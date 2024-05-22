import classNames from "classnames";
import { FC } from "react";
import { ColumnData, ContentType } from "shared/types";
import * as Icons from "./icons";

interface ISetContentType {
  onAction(type: ContentType): void;
  content: ColumnData["content"];
}

interface IConfig {
  key: string;
  className: string;
  onClick(): void;
  children: React.ReactNode;
}

export const SetContentType: FC<ISetContentType> = ({ content, onAction }) => {
  const config: IConfig[] = [
    {
      key: ContentType.TEXT,
      className: classNames({ selected: content?.type === ContentType.TEXT }),
      onClick: () => onAction(ContentType.TEXT),
      children: <Icons.Text />,
    },
    {
      key: ContentType.IMAGE,
      className: classNames({ selected: content?.type === ContentType.IMAGE }),
      onClick: () => onAction(ContentType.IMAGE),
      children: <Icons.Image />,
    },
  ];

  const renderedButtons = (config: IConfig[]): JSX.Element[] => config.map((props) => <button {...props} />);

  return (
    <div className="button-group-field">
      <label>Contents</label>
      <div className="button-group">{renderedButtons(config)}</div>
    </div>
  );
};
