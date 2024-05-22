import { selectRowListRows, updateColumn } from "entities/rowList";
import { AddBlock } from "features/addBlock";
import { AddContent } from "features/addContent";
import { FC, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "shared/lib/store";
import { ColumnData, RowData } from "shared/types";

export interface ISidebar {
  onSelectRow(id: RowData["id"]): void;
  selectedRowId: RowData["id"] | null;
  onSelectColumn(rowId: RowData["id"], columnId: ColumnData["id"]): void;
  selectedColumnId: ColumnData["id"] | null;
}

export const Sidebar: FC<ISidebar> = ({ onSelectRow, selectedRowId, onSelectColumn, selectedColumnId }) => {
  const rows = useAppSelector(selectRowListRows);
  const dispatch = useAppDispatch();

  const selectedRow = useMemo(() => rows.find((row) => row.id === selectedRowId), [rows, selectedRowId]) || null;

  const selectedColumn = useMemo(() => {
    return selectedRow?.columns.find((column) => column.id === selectedColumnId) || null;
  }, [selectedColumnId, selectedRow]);

  const onUpdateColumn = (content: ColumnData["content"]): void => {
    if (!selectedColumn) {
      return;
    }

    const payload = {
      rowId: selectedRowId!,
      column: {
        ...selectedColumn,
        content,
      },
    };

    dispatch(updateColumn(payload));
  };

  return (
    <div className="properties">
      <AddBlock selectedRow={selectedRow} onSelectRow={onSelectRow} onSelectColumn={onSelectColumn} />

      {selectedColumn && <AddContent selectedColumn={selectedColumn} onUpdateColumn={onUpdateColumn} />}
    </div>
  );
};
