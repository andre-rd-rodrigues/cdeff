import React from "react";
import { Icon } from "@iconify/react";
import styles from "./iconcard.module.scss";
import { barlow } from "@/styles/fonts";

function IconCard({ title, description, iconName }) {
  return (
    <div className={styles.container}>
      <Icon icon={iconName} fontSize={50} className={styles.icon} />
      <h4 className={`${styles.title} ${barlow.className}`}>{title}</h4>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default IconCard;
