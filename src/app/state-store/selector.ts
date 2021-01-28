import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import * as  fromReducer from './reducer';
import * as fromState from './state';

const selectStoreData: MemoizedSelector<object, fromState.IStore> = createFeatureSelector<fromState.IStore>(fromState.storeKey);

export const selectUser = createSelector(
    selectStoreData,
    state => state.user
);