import React from "react";
import "../styles/components/Button.scss";

function Button({ content, icon = "", color = "" }) {
  return (
    <button className={`${color}`}>
      {content} {icon}
    </button>
  );
}

export default Button;
