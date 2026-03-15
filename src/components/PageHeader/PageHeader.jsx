import React from "react";
import styles from "./pageheader.module.scss";
import { barlow } from "@/styles/fonts";
import { Link } from "@/i18n/routing";
import Button from "../Button/Button";

const PageHeader = ({ title, image, href, linkLabel }) => {
  const containerStyle = {
    background: `url(${image}) no-repeat center center`,
    backgroundSize: "cover"
  };

  return (
    <div className={`relative w-full h-[300px] pt-20 flex justify-center items-center text-white -mb-[30px] ${styles.container}`} style={containerStyle}>
      <h1 className={`relative text-center uppercase tracking-wider z-content font-medium ${barlow.className}`}>{title}</h1>
      {linkLabel && (
        <Link href={href}>
          <Button label={linkLabel} />
        </Link>
      )}
    </div>
  );
};

export default PageHeader;
