import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../shared/models/user.model';
import * as fromAppActions from './app.action';
export interface AppState {
  user: User;
}

export const initialState: AppState = {
  user: undefined,
};

const appStateReducer = createReducer(
  initialState,
  on(fromAppActions.doLogin, (state, { name, email }) => {
    return {
      ...state,
      user: {
        ...state.user,
        name,
        email,
      },
    };
  })
);

export function reducer(state: AppState | undefined, action: Action): AppState {
  return appStateReducer(state, action);
}
