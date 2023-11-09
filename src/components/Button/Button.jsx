import React from "react";
import styles from "./button.module.scss";

const Button = ({ label, className, onClick, variant }) => {
  return variant ? (
    <button
      className={`py-2 px-6 ${styles.button2} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  ) : (
    <button
      className={`py-2 px-6 ${styles.button} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
