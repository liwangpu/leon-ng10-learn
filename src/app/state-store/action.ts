import { createAction, props } from '@ngrx/store';

export const changeUserName = createAction('[store] change user name', props<{ name: string }>());

export const changeUserUpdateTime = createAction('[store] change user update time', props<{ updatedAt: string }>());
