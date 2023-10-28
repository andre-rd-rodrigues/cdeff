import React from "react";
import styles from "./pageheader.module.scss";
import { barlow } from "@/styles/fonts";

const PageHeader = ({ title, image }) => {
  const containerStyle = {
    background: `url(${image}) no-repeat center center`,
    backgroundSize: "cover"
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <h1 className={`${styles.content} ${barlow.className}`}>{title}</h1>
    </div>
  );
};

export default PageHeader;
