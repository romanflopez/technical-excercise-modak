import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap,
} from 'rxjs';
import { Artwork } from 'src/app/shared/model/interfaces.model';
import { PageSize, PaginationUi } from '../../model/home.model';
import { HomeService } from '../../services/home.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchInput = new FormControl();
  pageSize = PageSize;
  private homeService = inject(HomeService);
  private store = inject(Store);
  artworks$: Observable<Artwork>;
  private artworksPagination = new BehaviorSubject<PaginationUi>({
    current_page: 0,
    limit: PageSize.TWELVE,
  });

  artworksPagination$: Observable<PaginationUi> =
    this.artworksPagination.asObservable();

  ngOnInit(): void {
    const input$ = this.searchInput.valueChanges.pipe(
      startWith(''),
      debounceTime(600),
      distinctUntilChanged()
    );

    this.artworks$ = combineLatest({
      query: input$,
      paginator: this.artworksPagination$,
    }).pipe(
      switchMap(({ query, paginator }) =>
        this.homeService.getArtworks(
          paginator.current_page,
          paginator.limit,
          query
        )
      )
    );
  }

  onPageChange({ first, rows }): void {
    this.artworksPagination.next({
      current_page: first + 1,
      limit: rows,
    });
  }
}
