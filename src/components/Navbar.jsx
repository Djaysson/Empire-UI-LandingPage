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
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#depoimentos">Depoimentos</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
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
