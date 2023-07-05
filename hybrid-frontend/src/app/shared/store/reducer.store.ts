import { createReducer, on } from '@ngrx/store';
import * as actions from './actions.store';
import { IUser } from '../models/user.model';

export interface IStoreReducer extends IUser {
  token: string | null;
}

const storeReducerInitialState: IStoreReducer = {
  userId: null,
  token: null,
  role: [],
};

export const storeReducer = createReducer(
  storeReducerInitialState,
  on(
    actions.userAuthSuccess,
    (state, { response }): IStoreReducer => ({
      ...state,
      token: response.token,
      role: response.roles,
      userId: response.userId,
    })
  ),
  on(actions.userLogoutSuccess, (): IStoreReducer => storeReducerInitialState),
);
