import classNames from "classnames";
import { FC } from "react";
import { IContent, ContentType, TextAlignType } from "shared/types";
import { Markdown } from "./markdown";
import { ImageContainer } from "./imageContainer";

export const Content: FC<IContent> = ({
  type = ContentType.NONE,
  imgUrl = "",
  text = "",
  textAlign = TextAlignType.LEFT,
}) => {
  const componentMap = {
    [ContentType.TEXT]: <Markdown className={classNames(`text-align-${textAlign}`)}>{text}</Markdown>,
    [ContentType.IMAGE]: <ImageContainer src={imgUrl} />,
    [ContentType.NONE]: <></>,
  };

  return componentMap[type];
};
