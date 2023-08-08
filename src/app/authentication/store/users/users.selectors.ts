import { createSelector } from '@ngrx/store';
import { AuthState } from './users.reducers';

// Selector para obtener el estado de autenticación completo
const selectAuth = (state: { auth: AuthState }) => state.auth;

// Selector para obtener el token del estado de autenticación
export const selectToken = createSelector(
  selectAuth,
  (state: AuthState) => state.token
);

// Selector para obtener el mensaje de error del estado de autenticación
export const selectError = createSelector(
  selectAuth,
  (state: AuthState) => state.error
);
export const selectIsLoggedIn = createSelector(
  selectAuth,
  (state: AuthState) => state.isLoggedIn
);
export const selectUsername = createSelector(
  selectAuth,
  (state: AuthState) => state.username
);
