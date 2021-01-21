import { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";
import "./style.css";

function Header() {
  const { inpValue, handleChange } = useContext(BooksContext);
  return (
    <div className="contanier">
      <input
        type="text"
        className="search"
        value={inpValue}
        onChange={handleChange}
        placeholder="Search a Book"
      />
    </div>
  );
}

export default Header;
