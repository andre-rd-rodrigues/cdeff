import React from "react";
import styles from "./herosection.module.scss";
import Button from "../../Button/Button";
import Container from "../../Container/Container";
import { barlow } from "@/styles/fonts";
import Link from "next/link";

const HeroSection = ({ imageSrc, linkLabel, subtitle, title, href }) => {
  const containerStyle = {
    background: `url(${imageSrc}) no-repeat center center`,
    backgroundSize: "cover"
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <Container className={styles.content}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {title && (
          <h3 className={`${styles.title} ${barlow.className}`}>{title}</h3>
        )}
        {linkLabel && (
          <Link href={href} className="text-center mt-2">
            <Button label={linkLabel} />
          </Link>
        )}
      </Container>
    </div>
  );
};

export default HeroSection;
