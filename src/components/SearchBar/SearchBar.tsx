import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";
import { FormEvent } from "react";
import { SearchBarProps } from "./SearchBar.types";



const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const topic = (form.elements.namedItem('topic') as HTMLInputElement)?.value;
    if (!topic.trim()) {
      toast.error("You must write something", {
        position: "top-right",
        duration: 1000,
      });
      return;
    }
    onSearch(topic);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <FcSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
