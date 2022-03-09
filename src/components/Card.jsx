import React from "react";
import { motion } from "framer-motion";
import { cardAnimation } from "../utils/Animations";
import "../styles/components/Card.scss";
function Card({ logo, title, animateCustom }) {
  return (
    <motion.div
      className="card"
      variants={cardAnimation}
      animate={animateCustom}
      transition={{ stiffness: 5000 }}
    >
      <div className="logo">{logo}</div>
      <div className="card-title">
        <h4>{title}</h4>
      </div>
    </motion.div>
  );
}

export default Card;
