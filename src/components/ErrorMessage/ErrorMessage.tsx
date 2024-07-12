import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC<{ error: Error }> = ({ error }) => {
  return <div className={css.error}>{error.message}</div>;
};

export default ErrorMessage;
