import React from "react";
import Testimonial from "../components/Testimonial";
import Title from "../components/Title";

import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { textAnimation, cardAnimation } from "../Animation";

import "../styles/sections/Testimonials.scss";
function Testimonials() {
  const [element, controls] = useScroll();
  return (
    <div className="testimonials-container" id="depoimentos" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Depoimentos" color="blue" lineCenter={true} />

          <p>Veja o que nossos clientes estão dizendo sobre nós</p>
        </motion.div>
        <div className="testimonials">
          <Testimonial
            content="A melhor da net! O desenvolvimento de software salvou meu negócio. A empresa é magnifica vale a pena mesmo o investimento."
            name="Pedro Lima"
            designation="Cliente"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="O desenvolvimento de aplicativos móveis desta empresa é incrível e era exatamente o que minha empresa precisava."
            name="Ágata Álvares"
            designation="Cliente"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="A empresa criou meu aplicativo do zero e ficou excelente, sem dúvidas eles criaram o melhor produto, com certeza vale a pena o investimento."
            name="Luiz H. Martins"
            designation="Cliente"
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
