import { createFeatureSelector, createSelector, createSelectorFactory, MemoizedSelector } from '@ngrx/store';
import * as  fromReducer from './reducer';
import * as fromState from './state';

const selectStoreData: MemoizedSelector<object, fromState.IStore> = createFeatureSelector<fromState.IStore>(fromState.storeKey);

export const selectUser = createSelector(
    selectStoreData,
    state => state.user
);

export const selectIdAndIcon = createSelector(
    selectStoreData,
    state => {
        let ms = { id: state.id, icon: state.icon };
        return ms;
    }
);

export const selectIdAndIconStr = createSelector(
    selectStoreData,
    state => {
        let ms = { id: state.id, icon: state.icon };
        return JSON.stringify(ms);
    }
);

// export const selectIdAndIcon2 = createSelector(
//     // selectStoreData,
//     (state: fromState.IStore) => state.id,
//     (state: fromState.IStore) => state.icon,
//     (id, icon) => {
//         let ms = { id, icon };
//         return ms;
//     }
// );

export const selectIdAndIcon2 = createSelector(
    (state: any) => state.store.id,
    (state: any) => state.store.icon,
    (id, icon) => {
        let ms = { id, icon };
        return ms;
    }
);

// export const selectIdAndIcon2 = createSelector(
//     selectStoreData,
//     (state: any) => state,
//     (state: any) => state,
//     (p1, p2, p3) => {
//         let ms = { p1, p2, p3 };
//         return ms;
//     }
// );

// export const selectIdAndIcon2 = createSelector(
//     selectStoreData,
//     (p1) => {
//         let ms = { id: p1.id, icon: p1.icon };
//         return ms;
//     }
// );

// export const selectIdAndIcon2 = createSelectorFactory(
//     t => {
//         console.log(1, t);

//         return null;
//     }
// );