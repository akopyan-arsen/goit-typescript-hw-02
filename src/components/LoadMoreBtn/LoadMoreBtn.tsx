import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.button} type="submit" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
