import React from "react";

import styles from "./iconcard.module.scss";
import { barlow } from "@/styles/fonts";
import { Icon } from "@iconify/react";

function IconCard({
  title,
  description,
  iconName,
  isSelected,
  onClick,
  motion
}) {
  const motionClass =
    motion === "bounce"
      ? styles.bounce
      : motion === "roll"
        ? styles.roll
        : "";

  return (
    <div
      className={`group w-[200px] h-full py-10 px-2 shadow-card inline-flex flex-col justify-center items-center gap-3.5 cursor-pointer transition-all duration-normal ease-smooth rounded-md overflow-hidden relative hover:text-white hover:bg-blue hover:-translate-y-1.5 hover:shadow-card-hover-strong active:-translate-y-0.5 ${styles.container} ${
        isSelected ? `bg-blue text-white ${styles.containerSelected}` : "bg-white text-blue"
      }`}
      onClick={onClick}
    >
      {iconName && (
        <span className="inline-flex transition-transform duration-normal ease-smooth group-hover:scale-[1.15]">
          <Icon
            icon={iconName}
            fontSize={50}
            className={`${motionClass} group-hover:text-white ${
              isSelected ? "text-white" : "text-blue"
            }`}
          />
        </span>
      )}
      <h4 className={`text-fs-m font-bold uppercase tracking-[2px] my-1 mb-3 ${barlow.className}`}>{title}</h4>
      {description && <p className="text-center text-fs-xs font-normal break-words">{description}</p>}
    </div>
  );
}

export default IconCard;
