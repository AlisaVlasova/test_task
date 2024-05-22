import { FC } from "react";
import { ColumnData } from "../../../shared/types";

interface IAddImgUrl {
  onAction(text: ColumnData["content"]["text"]): void;
  content: ColumnData["content"];
}

export const AddImgUrl: FC<IAddImgUrl> = ({ content, onAction }) => {
  return (
    <div className="text-field">
      <label htmlFor="image-url">URL</label>
      <input
        onChange={({ target }) => onAction(target.value)}
        value={content.imgUrl || ""}
        id="image-url"
        type="text"
      />
    </div>
  );
};
