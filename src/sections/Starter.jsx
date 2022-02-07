import React from "react";
import WorkImage from "../assets/images/work.svg";
import Button from "../components/Button";

import { GoPlay } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import "../styles/sections/Starter.scss";

function Starter() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="content">
          <h1>
            Nós fornecemos soluções para ajudá-lo a construir ou expandir seu
            negócio!
          </h1>

          <p>
            Uma agência profissional de desenvolvimento de aplicativos móveis e
            da Web com mais de 100+ aplicativos desenvolvidos para Web e
            aplicativos. fornecemos um serviço de alta qualidade no
            desenvolvimento de aplicativos web e móveis, bem como em design.
          </p>
          <div className="button-container">
            <Button content="Watch video" icon={<GoPlay />} color="blue" />
            <Button
              content="Request quote"
              icon={<HiOutlineArrowNarrowRight />}
              color="pink"
            />
          </div>
        </div>
        <div className="image">
          <img src={WorkImage} alt="Work Image" />
        </div>
      </div>
    </div>
  );
}

export default Starter;
