import React from "react";
import BrandName from "../components/BrandName";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { FaFacebookF, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { fromUp, fromDown } from "../Animation";

import "../styles/sections/Footer.scss";
function Footer() {
  const [element, controls] = useScroll();
  return (
    <div className="footer-container" ref={element}>
      <div className="container">
        <div className="main-container">
          <motion.div
            className="news-letter"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <BrandName isFooter={true} />
            <p>
              Junte-se à nossa newsletter para ficar atualizado com as nossas
              ofertas e descontos.
            </p>
            <div className="mail">
              <input type="email" placeholder="Insira seu e-mail" />
              <button type="submit">
                <AiOutlineSend />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="quick-links"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Links Rápidos</h3>
            <ul>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Testemunho</a>
              </li>
              <li>
                <a href="#">Contate-Nos</a>
              </li>
              <li>
                <a href="#">Portfólio</a>
              </li>
              <li>
                <a href="#">Carreira</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Termos & Condições</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="industries"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Indústrias</h3>
            <ul>
              <li>
                <a href="#">Website Development</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">Website Design</a>
              </li>
              <li>
                <a href="#">Mobile App Design</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">IOS App Development</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="touch"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Entrar em contato</h3>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="details">
                <div className="detail-name">Email</div>
                <div className="detail-content">
                  <a href="#">Empire@gamil.com</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="details">
                <div className="detail-name">Telefone</div>
                <div className="detail-content">
                  <a href="#">+91 7551231231</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="details">
                <div className="detail-name">Localização</div>
                <div className="detail-content">
                  <a href="#"> Rua Pedro II, 555</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>Copyright &copy; 2022 Empire. Todos os direitos reservados..</p>
          </div>

          <div className="icons">
            <div className="icon">
              <a href="#">
                <FaFacebookF />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
