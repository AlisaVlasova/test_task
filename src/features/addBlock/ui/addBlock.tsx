import { addColumn, addRow, selectRowListRows } from "../../../entities/rowList";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/store";
import { BlockType, ColumnData, RowData } from "../../../shared/types";
import { ActionButton } from "../../../shared/ui/actionButton";

interface IAddBlock {
  selectedRow: RowData | null;
  onSelectRow(rowId: RowData["id"]): void;
  onSelectColumn(rowId: RowData["id"], columnId: ColumnData["id"]): void;
}

interface IBlockConfig {
  type: BlockType;
  target: BlockType;
  condition: boolean;
  props: {
    onAction(): void;
  };
}

export const AddBlock: FC<IAddBlock> = ({ selectedRow, onSelectRow, onSelectColumn }) => {
  const rows = useAppSelector(selectRowListRows);
  const dispatch = useAppDispatch();

  const onAddRow = (): void => {
    const id = rows?.length ? rows.at(-1)!.id + 1 : 0;

    dispatch(
      addRow({
        id,
        columns: [],
      })
    );

    onSelectRow(id);
  };

  const onAddColumn = (): void => {
    if (!selectedRow) {
      return;
    }

    const columns = selectedRow.columns;
    const columnId = columns?.length ? columns.at(-1)!.id + 1 : 0;

    const column = {
      id: columnId,
      content: {},
    };

    dispatch(
      addColumn({
        rowId: selectedRow.id,
        column,
      })
    );

    onSelectColumn(selectedRow.id, columnId);
  };

  const config: IBlockConfig[] = [
    {
      type: BlockType.ROW,
      target: BlockType.PAGE,
      condition: true,
      props: {
        onAction: () => onAddRow(),
      },
    },
    {
      type: BlockType.COLUMN,
      target: BlockType.ROW,
      condition: Boolean(selectedRow),
      props: {
        onAction: () => onAddColumn(),
      },
    },
  ].filter((block) => block.condition);

  const renderedSections = (config: IBlockConfig[]): JSX.Element[] =>
    config.map((section) => {
      return (
        <div className="section" key={section.type}>
          <div className="section-header">{section.target}</div>
          <div className="actions">
            <ActionButton {...section.props}>Add {section.type}</ActionButton>
          </div>
        </div>
      );
    });

  return <>{renderedSections(config)}</>;
};
