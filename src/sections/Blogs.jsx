import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import BlogImage1 from "../assets/images/blogImage1.jpg";
import BlogImage2 from "../assets/images/blogImage2.jpg";
import BlogImage3 from "../assets/images/blogImage3.jpg";

import Blog from "../components/Blog";

import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { textAnimation, cardAnimation } from "../utils/Animations";

import "../styles/sections/Blogs.scss";

function Blogs() {
  const [element, controls] = useScroll();
  return (
    <div className="blogs-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Blogs" color="pink" lineCenter={true} />
          <p>Percepção e conselhos de nossos especialistas.</p>
        </motion.div>
        <div className="blogs">
          <Blog
            image={BlogImage1}
            title="Erros a serem evitados durante o desenvolvimento do MVP"
            subTitle="Quando surge uma ideia para criar uma startup, você precisa levar em consideração todos os riscos que enfrentará e avaliá-los cuidadosamente. Também como regra..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage2}
            title="Um dia na vida de um gerente de engenharia de software"
            subTitle="Durante os oito anos que passei como gerente de engenharia, acompanhei regularmente como passava meu tempo. Como gerente de engenharia de startups, fui..."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage3}
            title="Como construir uma cultura forte de trabalho remoto"
            subTitle="Charles Miller é o vice-presidente de operações de talentos da empresa responsável por combinar alguns dos maiores freelancers do mundo com empresas que..."
            variants={cardAnimation}
            animate={controls}
          />
        </div>
        <div className="button-container">
          <Button content="Ver tudo" />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
