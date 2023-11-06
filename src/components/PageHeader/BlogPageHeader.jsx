import React from "react";
import styles from "./pageheader.module.scss";
import { barlow } from "@/styles/fonts";

const BlogPageHeader = ({ title, image, date }) => {
  const containerStyle = {
    background: `url(${image}) no-repeat center center`,
    backgroundSize: "cover"
  };

  return (
    <div className={styles.containerBlogPage} style={containerStyle}>
      <h1
        className={`uppercase text-white z-10 tracking-wider ${barlow.className}`}
      >
        {title}
      </h1>
      <p className="z-10 font-light opacity-50">{date}</p>
    </div>
  );
};

export default BlogPageHeader;
