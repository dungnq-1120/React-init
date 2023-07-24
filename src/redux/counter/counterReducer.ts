import type { PayloadAction } from '@reduxjs/toolkit';
import { type CounterStateType } from './counterSlice';

export default {
  increment(state: CounterStateType) {
    state.value += 1;
  },
  decrement(state: CounterStateType) {
    state.value -= 1;
  },
  incrementByAmount(state: CounterStateType, action: PayloadAction<number>) {
    state.value += action.payload;
  },
};
