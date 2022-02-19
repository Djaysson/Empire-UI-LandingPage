import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { HiLightBulb } from "react-icons/hi";
import { BsCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";

import "../styles/sections/About.scss";
function About() {
  return (
    <div className="about-container" id="sobre">
      <div className="container">
        <div className="details">
          <Title title="Sobre a Empire" color="blue" />

          <p>
            Acreditamos que todos merecem ter um site ou loja online. Inovação e
            simplicidade nos fazem felizes. Nossa missão é ajudar as pessoas a
            alcançarem o que são apaixonadas.
          </p>
          <p>
            Estamos empolgados em simplificar o SEO para todos por meio de
            software, educação ou comunidade.
          </p>
          <Button content="Por que Empire ?" />
        </div>
        <div className="cards">
          <Card title="Inovação" logo={<HiLightBulb />} />
          <Card title="Planejamento" logo={<BsCalendarFill />} />
          <Card title="Comunicação" logo={<BiSupport />} />
          <Card title="24 * 7 Suporte" logo={<SiGooglemessages />} />
        </div>
      </div>
    </div>
  );
}

export default About;
