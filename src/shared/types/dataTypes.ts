import { IContent } from ".";

export type RowData = {
  id: number;
  columns: ColumnData[];
};

export type ColumnData = {
  id: number;
  content: IContent;
};
