import React from "react";
import SearchBar from "./SearchBar";

function Modal({ setIsOpen }) {

  return (
    <div className="dark-bg" onClick={()=> setIsOpen(prev => !prev)}>
      <SearchBar setIsOpen={setIsOpen} />
    </div>
  );
}

export default Modal;
