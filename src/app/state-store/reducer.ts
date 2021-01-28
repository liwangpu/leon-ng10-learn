import { Action, createReducer, on } from '@ngrx/store';
import * as fromAction from './action';
import * as fromState from './state';
import * as _ from 'lodash';

export const _reducer: any = createReducer({
    user: {
        name: 'robot',
        age: 1,
        remark: 'auto message',
        updatedAt: '000000000'
    }
},
    on(fromAction.changeUserUpdateTime, (state: fromState.IStore, { updatedAt }) => {
        let user = _.cloneDeep(state.user);
        user.updatedAt = updatedAt;
        return { ...state, ...{ ['user']: user } };
    })
);

export function reducer(state: any, action: Action): any {
    return _reducer(state, action);
}
