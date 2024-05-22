import { ColumnData, RowData } from "../../../shared/types";

export interface IRowListInitialState {
  rows: RowData[];
}

export interface IRowItem {
  children?: React.ReactNode;
  selected?: boolean;
  onSelect?(): void;
}

export type ColumnPayload = {
  rowId: RowData["id"];
  column: ColumnData;
};

