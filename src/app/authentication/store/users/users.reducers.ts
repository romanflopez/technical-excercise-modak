import { login, loginFailure, loginSuccess, logout } from './users.actions';
import { createReducer, on } from '@ngrx/store';

export interface AuthState {
  token: string | null;
  error: string | null;
  isLoggedIn: boolean;
  username: string | null;
}
export type AuthUser = Pick<AuthState, 'token' | 'username'>;
export type AuthUserError = Pick<AuthState, 'error'>;
const initialState: AuthState = {
  token: null,
  error: null,
  isLoggedIn: false,
  username: null,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, error: null })),
  on(loginSuccess, (state, { token, username }) => ({
    ...state,
    token,
    error: null,
    isLoggedIn: true,
    username,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    token: null,
    error,
    isLoggedIn: false,
    username: null,
  })),
  on(logout, (state) => ({
    ...state,
    token: null,
    isLoggedIn: false,
    error: null,
    username: null,
  }))
);
