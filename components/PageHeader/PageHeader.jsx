import React from "react";
import styles from "./pageheader.module.scss";
import { barlow } from "@/styles/fonts";
import Link from "next/link";
import Button from "../Button/Button";

const PageHeader = ({ title, image, href, linkLabel }) => {
  const containerStyle = {
    background: `url(${image}) no-repeat center center`,
    backgroundSize: "cover"
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <h1 className={`${styles.content} ${barlow.className}`}>{title}</h1>
      {linkLabel && (
        <Link href={href}>
          <Button label={linkLabel} />
        </Link>
      )}
    </div>
  );
};

export default PageHeader;
