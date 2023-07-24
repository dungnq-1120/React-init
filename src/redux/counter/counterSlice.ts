import { createSlice } from '@reduxjs/toolkit';

import counterReducer from './counterReducer';

export interface CounterStateType {
  value: number;
}

const initialState: CounterStateType = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: counterReducer,
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
