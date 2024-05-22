import { FC, useState } from "react";
import { Content } from "../../../entities/content";
import { ColumnData, RowData } from "../../../shared/types";
import { useAppSelector } from "../../../shared/lib/store";
import { Row, selectRowListRows } from "../../../entities/rowList";
import { Stage } from "../../../entities/stage";
import { Column } from "../../../entities/column";
import { Sidebar } from "../../../widgets/sidebar";

export const Editor: FC = () => {
  const [selectedRowId, setSelectedRowId] = useState<RowData["id"] | null>(null);
  const [selectedColumnId, setSelectedColumnId] = useState<ColumnData["id"] | null>(null);

  const rows = useAppSelector(selectRowListRows);

  const onSelectRow = (rowId: RowData["id"]): void => {
    setSelectedRowId(rowId);
    setSelectedColumnId(null);
  };

  const onSelectColumn = (rowId: RowData["id"], columnId: ColumnData["id"] | null): void => {
    setSelectedRowId(rowId);
    setSelectedColumnId(columnId);
  };

  const onSelectStage = (): void => {
    setSelectedRowId(null);
    setSelectedColumnId(null);
  };

  const renderedColumns = (row: RowData): JSX.Element[] =>
    row.columns.map((column) => (
      <Column
        key={column.id}
        selected={row.id === selectedRowId && column.id === selectedColumnId}
        onSelect={() => onSelectColumn(row.id, column.id)}
      >
        <Content {...column.content} />
      </Column>
    ));

  const renderedRows = (rows: RowData[]): JSX.Element[] =>
    rows.map((row) => (
      <Row
        key={row.id}
        selected={row.id === selectedRowId && selectedColumnId === null}
        onSelect={() => onSelectRow(row.id)}
      >
        {renderedColumns(row)}
      </Row>
    ));

  return (
    <div className="editor">
      <Stage onSelect={onSelectStage}>{renderedRows(rows)}</Stage>

      <Sidebar
        onSelectRow={(id) => onSelectRow(id)}
        selectedRowId={selectedRowId}
        onSelectColumn={(rowId, columnId) => onSelectColumn(rowId, columnId)}
        selectedColumnId={selectedColumnId}
      />
    </div>
  );
};
