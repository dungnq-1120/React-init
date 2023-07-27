import { createSelector } from "@reduxjs/toolkit";
import { type RootState } from "~/store";

const counter = (state: RootState) => state.counterReducer;

export const counterSelector = createSelector(
  [counter],
  (counter) => counter.value
);
