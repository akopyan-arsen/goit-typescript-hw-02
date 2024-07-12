import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";


const ImageGallery: React.FC<ImageGalleryProps>  = ({ items, openModal }) => {
  return (
    <ul className={css.images}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard data={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
