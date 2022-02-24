import React from "react";
import Title from "../components/Title";
import { GoPlay } from "react-icons/go";

import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../Animation";

import "../styles/sections/Why.scss";

function Why() {
  const [element, controls] = useScroll();
  return (
    <div className="why-container" id="servicos" ref={element}>
      <div className="container">
        <motion.div
          className="top"
          variants={topContainerAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Por que Empire ?" color="pink" lineCenter={true} />
          <div className="subTitle">
            <p>
              Porque é uma empresa que está sempre atualizada com as tecnologias
              do mercado e que está sempre procurando ajudar nossos clientes
              fornecendo as melhores soluções para suas necessidades.
            </p>
          </div>
        </motion.div>
        <div className="content">
          <motion.div
            className=""
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div>
              <div className="video">
                <GoPlay />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="reasons"
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <ul>
              <li>Mais de 10 anos de experiência em todo o setor</li>
              <li>
                Fornecer soluções para nossos vários clientes globais ou site
                geração de tráfego e fluxo de trabalho
              </li>
              <li>Forte equipe de mais de 150 pessoas criativas</li>
              <li>99% aderem ao contrato de nível de serviço</li>
              <li>
                Pronto para receber solicitação de serviço 24 horas por dia, 7
                dias por semana
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Why;
