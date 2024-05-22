import classNames from "classnames";
import { FC } from "react";
import { ColumnData, TextAlignType } from "shared/types";
import * as Icons from "./icons";

interface IAddTextAlign {
  onAction(textAlign: TextAlignType): void;
  content: ColumnData["content"];
}

interface IConfig {
  key: string;
  className: string;
  onClick(): void;
  children: React.ReactNode;
}

export const AddTextAlign: FC<IAddTextAlign> = ({ content, onAction }) => {
  const config: IConfig[] = [
    {
      key: TextAlignType.LEFT,
      className: classNames({ selected: !content.textAlign || content.textAlign === TextAlignType.LEFT }),
      onClick: () => onAction(TextAlignType.LEFT),
      children: <Icons.TextAlignLeft />,
    },
    {
      key: TextAlignType.CENTER,
      className: classNames({ selected: content.textAlign === TextAlignType.CENTER }),
      onClick: () => onAction(TextAlignType.CENTER),
      children: <Icons.TextAlignCenter />,
    },
    {
      key: TextAlignType.RIGHT,
      className: classNames({ selected: content.textAlign === TextAlignType.RIGHT }),
      onClick: () => onAction(TextAlignType.RIGHT),
      children: <Icons.TextAlignRight />,
    },
  ];

  const renderedButtons = (config: IConfig[]): JSX.Element[] => config.map((props) => <button {...props} />);

  return (
    <div className="button-group-field">
      <label>Alignment</label>
      <div className="button-group">{renderedButtons(config)}</div>
    </div>
  );
};
