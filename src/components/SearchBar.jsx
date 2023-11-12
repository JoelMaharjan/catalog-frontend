import { Cancel, Search } from "@mui/icons-material";
import { useState } from "react";

function SearchBar({ setIsOpen }) {
  const [text, setText] = useState("");

  return (
    <div className= "search-bar">
      <Search className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="search-cancel" onClick={() => setIsOpen(false)}>
        <Cancel />
      </div>
    </div>
  );
}

export default SearchBar;
