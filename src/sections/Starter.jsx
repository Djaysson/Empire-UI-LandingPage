import React from "react";
import WorkImage from "../assets/images/work.svg";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

import { GoPlay } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { motion } from "framer-motion";
import { headerAnimation, imageAnimation } from "../Animation";
import { useScroll } from "../components/useScroll";

import "../styles/sections/Starter.scss";

function Starter() {
  const [element, controls] = useScroll();

  return (
    <div className="main-container" ref={element}>
      <Navbar />
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h1>
            Nós fornecemos soluções para ajudá-lo a construir ou expandir seu
            negócio!
          </h1>

          <p>
            Uma agência profissional de desenvolvimento de aplicativos móveis e
            da Web com mais de 100 aplicativos desenvolvidos para Web e
            dispositivos móveis. fornecemos um serviço de alta qualidade no
            desenvolvimento de aplicativos web e móveis, bem como em design.
          </p>
          <div className="button-container">
            <Button content="Assista vídeo" icon={<GoPlay />} color="blue" />
            <Button
              content="Solicitar preço"
              icon={<HiOutlineArrowNarrowRight />}
              color="pink"
            />
          </div>
        </motion.div>
        <motion.div
          className="image"
          variants={imageAnimation}
          animate={controls}
          transition={{ type: "tween" }}
        >
          <img src={WorkImage} alt="People at work meeting" />
        </motion.div>
      </div>
    </div>
  );
}

export default Starter;
