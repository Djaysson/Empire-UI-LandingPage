import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { HiLightBulb } from "react-icons/hi";
import { BsCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";

import { motion } from "framer-motion";
import { reveal } from "../utils/Animations";
import { useScroll } from "../components/useScroll";

import "../styles/sections/About.scss";
function About() {
  const [element, controls] = useScroll();
  return (
    <div className="about-container" id="sobre" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.2, type: "tween" }}
        >
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
        </motion.div>
        <div className="cards" ref={element}>
          <Card
            title="Inovação"
            logo={<HiLightBulb />}
            animateCustom={controls}
          />
          <Card
            title="Planejamento"
            logo={<BsCalendarFill />}
            animateCustom={controls}
          />
          <Card
            title="Comunicação"
            logo={<BiSupport />}
            animateCustom={controls}
          />
          <Card
            title="Suporte"
            logo={<SiGooglemessages />}
            animateCustom={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
