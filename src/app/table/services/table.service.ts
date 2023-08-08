import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Artwork, Datum } from 'src/app/shared/model/interfaces.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  private http = inject(HttpClient);
  constructor() {}

  getArtworks(): Observable<Datum[]> {
    let params = new HttpParams();
    params = params.set('fields', 'title,image_id,thumbnail,artist_display');
    return this.http
      .get(environment.api, { params })
      .pipe(map((res: Artwork) => res.data));
  }
}
