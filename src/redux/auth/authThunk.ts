import { createAsyncThunk } from "@reduxjs/toolkit";
import { authServices } from "~/services";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (userId: number, thunkAPI) => {
    const response = await authServices.login(userId);
    return response?.data;
  }
);
