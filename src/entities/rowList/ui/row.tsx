import classNames from "classnames";
import { FC } from "react";
import { SelectableContainer } from "../../../shared/ui/selectableContainer";
import { IRowItem } from "../model/types";

export const Row: FC<IRowItem> = ({ selected, ...props }) => (
  <SelectableContainer className={classNames("row", { selected })} {...props} />
);
