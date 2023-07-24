import { combineReducers } from '@reduxjs/toolkit';

import counterReducer, { type CounterStateType } from './counter/counterSlice';
import authReducer, { type AuthStateType } from './auth/authSlice';

export interface IRootReducer {
  readonly counterReducer: CounterStateType;
  readonly authReducer: AuthStateType;
}

const rootReducer = combineReducers<IRootReducer>({
  counterReducer,
  authReducer,
});

export default rootReducer;
