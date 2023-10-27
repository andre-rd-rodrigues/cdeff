import React from "react";
import styles from "./herosection.module.scss";
import Button from "../Button/Button";
import Container from "../Container/Container";

const HeroSection = ({ imageSrc, buttonLabel, children }) => {
  const containerStyle = {
    background: `url(${imageSrc}) no-repeat center center`
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <Container className={styles.content}>
        {children}
        {buttonLabel && (
          <Button label={buttonLabel} color="red" className={styles.button} />
        )}
      </Container>
    </div>
  );
};

export default HeroSection;
