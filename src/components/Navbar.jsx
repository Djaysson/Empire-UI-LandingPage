import { useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import BrandName from "./BrandName";

import { motion } from "framer-motion";
import { navbarAnimation } from "../utils/Animations";

import "../styles/components/NavBar.scss";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNavbarToggle = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <motion.div
      className={`navbar ${toggleNav === true ? "active" : "disabled"}`}
      variants={navbarAnimation}
      transition={{ delay: 0.1 }}
    >
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
          <ul onClick={handleNavbarToggle}>
            <li onClick={handleNavbarToggle}>
              <a href="#sobre">Sobre</a>
            </li>
            <li onClick={handleNavbarToggle}>
              <a href="#servicos">Serviços</a>
            </li>
            <li onClick={handleNavbarToggle}>
              <a href="#depoimentos">Depoimentos</a>
            </li>
            <li onClick={handleNavbarToggle}>
              <a href="#blog">Blog</a>
            </li>
            <li onClick={handleNavbarToggle}>
              <Button content="Contato" />
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;
