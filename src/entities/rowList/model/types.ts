import { ColumnData, RowData } from "shared/types";

export interface IRowListInitialState {
  rows: RowData[];
}

export interface IRowItem {
  children?: React.ReactNode;
  selected?: boolean;
  onSelect?(): void;
}

export type Payload = {
  ADD_ROW: RowData;
  ADD_COLUMN: {
    rowId: RowData["id"];
    column: ColumnData;
  };
  UPDATE_COLUMN: {
    rowId: RowData["id"];
    column: ColumnData;
  };
};
