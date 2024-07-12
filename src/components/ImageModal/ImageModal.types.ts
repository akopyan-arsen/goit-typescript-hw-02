import { Image } from "../App.types";

export interface ImageModalProps {
    isOpen: boolean;
    closeModal: () => void;
    imageModal: Image | null;
  }