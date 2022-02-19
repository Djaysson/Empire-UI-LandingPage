import React from "react";
import Testimonial from "../components/Testimonial";
import Title from "../components/Title";
import "../styles/sections/Testimonials.scss";
function Testimonials() {
  return (
    <div className="testimonials-container" id="depoimentos">
      <div className="container">
        <div className="title-container">
          <Title title="Depoimentos" color="blue" lineCenter={true} />

          <p>Veja o que nossos clientes estão dizendo sobre nós</p>
        </div>
        <div className="testimonials">
          <Testimonial
            content="A melhor da net! O desenvolvimento de software salvou meu negócio. A empresa é magnifica vale a pena mesmo o investimento."
            name="Pedro Lima"
            designation="Cliente"
          />
          <Testimonial
            content="O desenvolvimento de aplicativos móveis desta empresa é incrível e era exatamente o que minha empresa precisava."
            name="Ágata Álvares"
            designation="Cliente"
          />
          <Testimonial
            content="A empresa criou meu aplicativo do zero e ficou excelente, sem dúvidas eles criaram o melhor produto, com certeza vale a pena o investimento."
            name="Luiz H. Martins"
            designation="Cliente"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
