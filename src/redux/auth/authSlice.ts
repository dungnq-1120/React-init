import { createSlice } from "@reduxjs/toolkit";

import reducers from "./reducer";
import extraReducers from "./extraReducer";

export interface AuthStateType {
  isAuth: boolean;
}

const initialState: AuthStateType = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
  extraReducers
});

// Action creators are generated for each case reducer function
export const {} = authSlice.actions;

export default authSlice.reducer;
