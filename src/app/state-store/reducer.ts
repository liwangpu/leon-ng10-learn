import { Action, createReducer, on } from '@ngrx/store';
import * as fromAction from './action';
import * as fromState from './state';
import * as _ from 'lodash';

export const _reducer: any = createReducer({
    id: 'aaa',
    user: {
        name: 'robot',
        age: 1,
        remark: 'auto message',
        updatedAt: '000000000'
    },
    icon: 'check',
    remark: '我是备注'
},
    on(fromAction.changeUserUpdateTime, (state: fromState.IStore, { updatedAt }) => {
        let user = _.cloneDeep(state.user);
        user.updatedAt = updatedAt;
        return { ...state, ...{ ['user']: user } };
    }),
    on(fromAction.changeIcon, (state: fromState.IStore, { icon }) => ({ ...state, icon })),
    on(fromAction.changeRemark, (state: fromState.IStore, { remark }) => ({ ...state, remark }))
);

export function reducer(state: any, action: Action): any {
    return _reducer(state, action);
}
