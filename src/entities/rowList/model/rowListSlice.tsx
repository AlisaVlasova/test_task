import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColumnPayload, IRowListInitialState } from "./types";
import { RowData } from "../../../shared/types";

const initialState: IRowListInitialState = {
  rows: [],
};

export const rowsSlice = createSlice({
  name: "rowList",
  initialState,
  reducers: {
    addRow: (state, { payload }: PayloadAction<RowData>) => {
      state.rows = [...state.rows, payload];
    },
    addColumn: (state, { payload }: PayloadAction<ColumnPayload>) => {
      const selectedRow = state.rows.find((row) => row.id === payload.rowId) || state.rows.at(-1);

      if (!selectedRow) {
        return;
      }

      const updatedColumns = [
        ...selectedRow.columns,
        {
          ...payload.column,
        },
      ];

      selectedRow.columns = updatedColumns;
    },
    updateColumn: (state, { payload }: PayloadAction<ColumnPayload>) => {
      const selectedRow = state.rows.find((row) => row.id === payload.rowId) || state.rows.at(-1);

      if (!selectedRow) {
        return;
      }

      const updatedColumns = selectedRow.columns.map((column) => {
        if (column.id === payload.column.id) {
          return payload.column;
        }

        return column;
      });

      selectedRow.columns = updatedColumns;
    },
  },
});

export const { addRow, addColumn, updateColumn } = rowsSlice.actions;
export default rowsSlice.reducer;
