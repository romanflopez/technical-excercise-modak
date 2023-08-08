import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Artwork, Datum } from 'src/app/shared/model/interfaces.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private http = inject(HttpClient);

  getArtworks(): Observable<Datum[]> {
    const params = new HttpParams();
    params.set('fields', 'title,image_id');
    return this.http
      .get(environment.api, { params })
      .pipe(map((res: Artwork) => res.data));
  }

  login(credentials: {
    username: string;
    password: string;
  }): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(`${environment.authApi}/login`, credentials)
      .pipe(
        catchError((err) => {
          return throwError(() => err.error.message);
        })
      );
  }
}
