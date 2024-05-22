import classNames from "classnames";
import { FC } from "react";
import { SelectableContainer } from "../../../shared/ui/selectableContainer";

interface IColumnItem {
  children?: React.ReactNode;
  selected?: boolean;
  onSelect?(): void;
}

export const Column: FC<IColumnItem> = ({ selected, ...props }) => (
  <SelectableContainer className={classNames("column", { selected })} {...props} />
);
