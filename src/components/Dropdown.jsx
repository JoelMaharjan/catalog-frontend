import React from "react";

function Dropdown({ submenu, dropdown }) {
  return (
    <ul className={`dropdown ${dropdown ? "" : "hide"}`}>
      {submenu.map((menu, index) => (
        <li key={index} >
          {menu.icon}
          <div className="dropdown-list">
            <p className="dropdown-heading">{menu.heading}</p>
            <p className="dropdown-text">{menu.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
