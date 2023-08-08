import { Component, OnInit, inject } from '@angular/core';
import { TableService } from 'primeng/table';
import { TableDataService } from '../../services/table.service';
import { Observable } from 'rxjs';
import { Datum } from 'src/app/shared/model/interfaces.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  tableService = inject(TableDataService);
  tableData$: Observable<Datum[]>;

  ngOnInit(): void {
    this.tableData$ = this.tableService.getArtworks();
  }
}
