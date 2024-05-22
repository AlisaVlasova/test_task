import { createSelector } from "@reduxjs/toolkit";

import { IRowListInitialState } from "./types";

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.rowList
);

export const selectRowListRows = createSelector(selectBase, (state: IRowListInitialState) => state.rows);
