import Logomark from "../assets/images/Logomark.png";
import { Search } from "@mui/icons-material";
import { navData } from "../utils/navData";
import NavbarItems from "./NavbarItems";
import { useState } from "react";
import Modal from "./Modal";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav">
      <div className="nav-items">
        <img src={Logomark} alt="logomark" />
        <p className="logotype">Catalog</p>
        <ul>
          {navData.map((item, index) => {
            return <NavbarItems items={item} key={index} />;
          })}
        </ul>
      </div>
      <div className="nav-search" onClick={() => setIsOpen(prev => !prev)}>
        <Search />
        {isOpen ? <Modal isOpen={isOpen} setIsOpen={setIsOpen} />:""}
      </div>
    </div>
  );
}

export default Navbar;
