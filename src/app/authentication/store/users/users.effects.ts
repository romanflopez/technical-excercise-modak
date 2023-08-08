import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { login, loginFailure, loginSuccess, logout } from './users.actions';
import { AuthService } from '../../services/auth.service';
import { AuthUser } from './users.reducers';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ username, password }) =>
        this.authService.login({ username, password }).pipe(
          map(({ token }: AuthUser) => loginSuccess({ token, username })),
          catchError((error) => of(loginFailure({ error: error })))
        )
      ),
      tap((action) => {
        if (action.type === loginSuccess.type) {
          localStorage.setItem('token', JSON.stringify(action));
        }
      })
    )
  );
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => localStorage.removeItem('token'))
      ),
    {
      dispatch: false,
    }
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
