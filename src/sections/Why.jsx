import React from "react";
import Title from "../components/Title";
import { GoPlay } from "react-icons/go";

import "../styles/sections/Why.scss";

function Why() {
  return (
    <div className="why-container" id="servicos">
      <div className="container">
        <div className="top">
          <Title title="Por que Empire ?" color="pink" lineCenter={true} />
          <div className="subTitle">
            <p>
              Porque é uma empresa que está sempre atualizada com as tecnologias
              do mercado e que está sempre procurando ajudar nossos clientes
              fornecendo as melhores soluções para suas necessidades.
            </p>
          </div>
        </div>
        <div className="content">
          <div>
            <div className="video">
              <GoPlay />
            </div>
          </div>
          <div className="reasons">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
