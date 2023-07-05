import { createAction, props } from '@ngrx/store';
import { LoginResponse } from '../api/models/login-response';

export const userAuthSuccess = createAction(
  '[Store] User Auth Success',
  props<{ response: LoginResponse }>()
);

export const userLogoutSuccess = createAction('[Store] User Logout Success');
