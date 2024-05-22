import { FC } from "react";
import { ColumnData } from "shared/types";

interface IAddText {
  onAction(text: ColumnData["content"]["text"]): void;
  content: ColumnData["content"];
}

export const AddText: FC<IAddText> = ({ content, onAction }) => {
  return (
    <div className="textarea-field">
      <textarea
        onChange={({ target }) => onAction(target.value)}
        value={content.text || ""}
        rows={8}
        placeholder="Enter text"
      ></textarea>
    </div>
  );
};
