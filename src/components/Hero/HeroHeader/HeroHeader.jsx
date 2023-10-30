import React from "react";
import styles from "./heroheader.module.scss";
import Button from "../../Button/Button";
import Container from "../../Container/Container";
import Link from "next/link";

const HeroHeader = ({ imageSrc, linkLabel, href, children, className }) => {
  const containerStyle = {
    background: `url(${imageSrc}) no-repeat center center`,
    backgroundSize: "cover"
  };

  return (
    <div className={`${styles.container} ${className}`} style={containerStyle}>
      <Container className={styles.content}>
        {children}
        {linkLabel && (
          <Link href={href}>
            <Button label={linkLabel} className={styles.button} />
          </Link>
        )}
      </Container>
    </div>
  );
};

export default HeroHeader;
