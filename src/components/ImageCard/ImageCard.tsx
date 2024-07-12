import { BsInstagram } from "react-icons/bs";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({
  data,
  openModal,
}) => {
  const handleClick = () => {
    openModal(data);
  };

  return (
    <div className={css.card}>
      <img src={data.urls.small} alt={data.alt_description} onClick={handleClick} />
      {data.description ? (
        <p className={css.description}>{data.description}</p>
      ) : (
        <p className={css.description}>No description</p>
      )}
      {data.user.instagram_username && (
        <div className={css.instagram}>
          <a
            href={`https://instagram.com/${data.user.instagram_username}`}
            target="_blank"
            rel="noreferrer noopener"
            className={css.link}
          >
            <BsInstagram />
            {data.user.instagram_username}
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
