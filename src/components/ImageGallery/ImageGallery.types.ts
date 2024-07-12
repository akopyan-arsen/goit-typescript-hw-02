import { Image } from "../App.types";

export interface ImageGalleryProps {
    items: Image[];
    openModal: (image: Image) => void;
  }
  