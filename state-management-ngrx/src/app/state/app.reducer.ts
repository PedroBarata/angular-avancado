import { Action, createReducer } from '@ngrx/store';
import { User } from '../shared/models/user.model';

export interface AppState {
    user: User
}

export const initialState: AppState = {
    user: undefined
}

const appStateReducer = createReducer(initialState);

export function reducer(state: AppState | undefined, action: Action): AppState {
    return appStateReducer(state, action);
}

