import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Artwork } from 'src/app/shared/model/interfaces.model';

@Injectable()
export class HomeService {
  private http = inject(HttpClient);

  getArtworks(
    page: number,
    limit: number,
    query?: string
  ): Observable<Artwork> {
    const fields = 'title,image_id,artist_title,exhibition_history';
    let url = environment.api;
    let params1 = new HttpParams();
    params1 = params1
      .append('page', page)
      .append('limit', limit)
      .append('fields', fields);
    if (query) {
      params1 = params1.set('q', query);
      url += '/search';
    }
    return this.http.get(url, {
      params: params1,
    }) as Observable<Artwork>;
  }
}
