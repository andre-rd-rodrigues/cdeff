import React from "react";
import styles from "./heroheader.module.scss";
import Button from "../../Button/Button";
import Container from "../../Container/Container";
import { Link, parseHref } from "@/i18n/routing";

const HeroHeader = ({ imageSrc, linkLabel, href, children, className }) => {
  const containerStyle = {
    background: `url(${imageSrc}) no-repeat center center`,
    backgroundSize: "cover"
  };

  return (
    <div
      className={`${styles.container} ${className || ""}`}
      style={containerStyle}
    >
      <Container className={`z-content text-center text-white ${styles.content}`}>
        {children}
        {linkLabel && (
          <Link href={parseHref(href)}>
            <Button label={linkLabel} className="mt-9" />
          </Link>
        )}
      </Container>
    </div>
  );
};

export default HeroHeader;
