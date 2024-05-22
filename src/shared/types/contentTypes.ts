export interface IContent {
  type?: ContentType;
  imgUrl?: string;
  text?: string;
  textAlign?: TextAlignType;
}

export enum BlockType {
  PAGE = "Page",
  ROW = "Row",
  COLUMN = "Column",
}

export enum ContentType {
  TEXT = "Text",
  IMAGE = "Image",
  NONE = "Ione",
}

export enum TextAlignType {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}
