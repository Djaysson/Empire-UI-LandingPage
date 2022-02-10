import { useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import "../styles/components/NavBar.scss";
import BrandName from "./BrandName";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNavbarToggle = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className={`navbar ${toggleNav === true ? "active" : "disabled"}`}>
      <div className="col">
        <BrandName />
        <div className="collapsible-button">
          {!toggleNav ? (
            <GiHamburgerMenu onClick={handleNavbarToggle} />
          ) : (
            <MdClose onClick={handleNavbarToggle} />
          )}
        </div>
      </div>
      <nav>
        <div className="links">
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Testemunho</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <Button content="Contato" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
