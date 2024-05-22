import { FC } from "react";
import { ImagePlaceholder } from "./imagePlaceholder";

export interface IImageContainer {
  src?: string;
}

export const ImageContainer: FC<IImageContainer> = ({ src }) => {
  if (!src) {
    return <ImagePlaceholder />;
  }

  return <img src={src} alt="" />;
};
