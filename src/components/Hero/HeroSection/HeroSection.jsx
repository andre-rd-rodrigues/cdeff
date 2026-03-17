import React from "react";
import styles from "./herosection.module.scss";
import Button from "../../Button/Button";
import Container from "../../Container/Container";
import { barlow } from "@/styles/fonts";
import { Link, parseHref } from "@/i18n/routing";

const HeroSection = ({
  imageSrc,
  linkLabel,
  subtitle,
  title,
  href,
  className,
  linkProps,
  contactHero
}) => {
  const containerStyle = {
    background: `url(${imageSrc}) no-repeat center center`,
    backgroundSize: "cover"
  };

  return (
    <div className={`${styles.container} ${contactHero ? styles.contactHero : ""} ${className || ""}`} style={containerStyle}>
      <Container className={`text-center uppercase tracking-wider ${styles.content}`}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {title && (
          <h3 className={`${styles.title} ${barlow.className}`}>{title}</h3>
        )}
        {linkLabel && (
          <Link href={parseHref(href)} className="text-center mt-2" {...linkProps}>
            <Button label={linkLabel} />
          </Link>
        )}
      </Container>
    </div>
  );
};

export default HeroSection;
