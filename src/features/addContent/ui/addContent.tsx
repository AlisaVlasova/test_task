import { FC } from "react";
import { BlockType, ColumnData, ContentType, TextAlignType } from "shared/types";
import { SetContentType } from "./setContentType";
import { AddTextAlign } from "./addTextAlign";
import { AddText } from "./addText";
import { AddImgUrl } from "./addImgUrl";

interface IAddContent {
  selectedColumn: ColumnData;
  onUpdateColumn(content: ColumnData["content"]): void;
}

interface IContentConfig {
  target: BlockType | ContentType;
  condition: boolean;
  children: React.ReactNode;
}

export const AddContent: FC<IAddContent> = ({ selectedColumn, onUpdateColumn }) => {
  const onSetContentType = (type: ContentType): void => {
    onUpdateColumn({ ...selectedColumn.content, type });
  };

  const onSetTextAlign = (textAlign: TextAlignType): void => {
    onUpdateColumn({ ...selectedColumn.content, textAlign });
  };

  const onAddText = (text: ColumnData["content"]["text"]): void => {
    onUpdateColumn({ ...selectedColumn.content, text });
  };

  const onAddImgUrl = (imgUrl: ColumnData["content"]["imgUrl"]): void => {
    onUpdateColumn({ ...selectedColumn.content, imgUrl });
  };

  const config: IContentConfig[] = [
    {
      condition: true,
      target: BlockType.COLUMN,
      children: <SetContentType onAction={onSetContentType} content={selectedColumn?.content} />,
    },
    {
      condition: selectedColumn?.content.type === ContentType.TEXT,
      target: ContentType.TEXT,
      children: (
        <>
          <AddTextAlign onAction={onSetTextAlign} content={selectedColumn?.content} />
          <AddText onAction={onAddText} content={selectedColumn?.content} />
        </>
      ),
    },
    {
      condition: selectedColumn?.content.type === ContentType.IMAGE,
      target: ContentType.IMAGE,
      children: <AddImgUrl onAction={onAddImgUrl} content={selectedColumn?.content} />,
    },
  ].filter((block) => block.condition);

  const renderedSections = (config: IContentConfig[]): JSX.Element[] =>
    config.map((block) => (
      <div key={block.target} className="section">
        <div className="section-header">{block.target}</div>

        {block.children}
      </div>
    ));

  return <>{renderedSections(config)}</>;
};
