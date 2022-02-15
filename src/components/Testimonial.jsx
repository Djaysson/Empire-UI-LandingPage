import React from "react";
import "../styles/components/Testimonial.scss";
function Testimonial({ content, name, designation }) {
  return (
    <div className="testimonial-container">
      <div className="quote">
        <span>&#10077;</span>
      </div>
      <div className="content">{content}</div>
      <div className="author">
        <div className="name">{name}</div>
        <div className="designation">{designation}</div>
      </div>
    </div>
  );
}

export default Testimonial;
