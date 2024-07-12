import css from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "./ErrorMessage.type";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return <div className={css.error}>{error}</div>;
};

export default ErrorMessage;
