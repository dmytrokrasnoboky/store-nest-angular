import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStoreReducer } from './reducer.store';
import { LocalStorageService } from '../services/local-storage.service';

export const storeFeatureSelectorKey = '[APP] Store Feature Selector Key';
export const selectStoreFeatureSelector = createFeatureSelector<IStoreReducer>(
  storeFeatureSelectorKey
);

export const selectIsAuthorized = createSelector(
  selectStoreFeatureSelector,
  (store) => !!store.userId
);

export const selectUserRole = createSelector(
  selectStoreFeatureSelector,
  (store) => store.role
);

export const selectUser = createSelector(
  selectStoreFeatureSelector,
  (store) => ({ role: store.role, userId: store.userId })
);

export const selectUserId = createSelector(
  selectStoreFeatureSelector,
  (store) => store.userId
);
