import React from "react";

import styles from "./iconcard.module.scss";
import { barlow } from "@/styles/fonts";
import { Icon } from "@iconify/react";

function IconCard({ title, description, iconName, isSelected, onClick }) {
  return (
    <div
      className={`${styles.container} ${
        isSelected && styles.containerSelected
      }`}
      onClick={onClick}
    >
      {iconName && (
        <Icon
          icon={iconName}
          fontSize={50}
          className={`${styles.icon} ${isSelected && styles.iconSelected}`}
        />
      )}
      <h4 className={`${styles.title} ${barlow.className}`}>{title}</h4>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default IconCard;
