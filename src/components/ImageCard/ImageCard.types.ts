import { Image } from "../App.types";

export interface ImageCardProps {
data: Image;
  openModal: (image: Image) => void;
}