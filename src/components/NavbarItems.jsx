import React from "react";
import Dropdown from "./Dropdown";
import { useState } from "react";

function NavbarItems({ items }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="navbar-list">
      {items.submenus ? (
        <>
          <button
            className="navbar-btn"
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.text}
            {items.icon}
          </button>

          <Dropdown dropdown={dropdown} submenu={items.submenus} />
        </>
      ) : (
        <>{items.text}</>
      )}
    </li>
  );
}

export default NavbarItems;
