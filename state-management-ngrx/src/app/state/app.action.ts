import { createAction, props } from '@ngrx/store';

export const doLogin = createAction(
  '[Login] Do Login',
  props<{ name: string, email: string }>()
);
