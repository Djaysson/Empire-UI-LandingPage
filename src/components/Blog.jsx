import React from "react";
import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import "../styles/components/Blog.scss";
function Blog({ image, title, subTitle }) {
  return (
    <div className="blog-container">
      <div className="image">
        <img src={image} alt="blog" />
      </div>
      <div className="content">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="subTitle">
          <p>{subTitle}</p>
        </div>
        <Button
          content="Saiba Mais"
          color="inverse"
          icon={<HiOutlineArrowNarrowRight />}
        />
      </div>
    </div>
  );
}

export default Blog;
