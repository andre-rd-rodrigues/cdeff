import React, { useState } from "react";

import styles from "./rankcard.module.scss";
import { barlow } from "@/styles/fonts";

function RankCard({ rank, onSelect, isSelected }) {
  const containerSelectedStyles = "bg-blue";
  const textSelectedStyles = "text-white";

  return (
    <div
      className={`${styles.container} ${
        isSelected ? containerSelectedStyles : "bg-white"
      }`}
      onClick={onSelect}
    >
      <h4
        className={`${styles.title} ${barlow.className} ${
          isSelected && textSelectedStyles
        }`}
      >
        {rank}
      </h4>
    </div>
  );
}

export default RankCard;
