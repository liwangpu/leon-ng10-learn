import { createAction, props } from '@ngrx/store';

export const changeUserName = createAction('[store] change user name', props<{ name: string }>());
export const changeUserUpdateTime = createAction('[store] change user update time', props<{ updatedAt: string }>());
export const changeIcon = createAction('[store] change icon', props<{ icon: string }>());
export const changeRemark = createAction('[store] change remark', props<{ remark: string }>());