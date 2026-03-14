import React from "react";
import styles from "./button.module.scss";

const ChevronIcon = ({ fill = "currentColor" }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.arrow}
  >
    <path
      d="M5 3L9 7L5 11"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Button = ({ label, className, onClick, variant, showArrow = false }) => {
  return variant ? (
    <button
      className={`py-2 px-6 ${styles.button2} ${className}`}
      onClick={onClick}
    >
      {label}
      {showArrow && <ChevronIcon fill="currentColor" />}
    </button>
  ) : (
    <button
      className={`py-2 px-6 ${styles.button} ${className}`}
      onClick={onClick}
    >
      {label}
      {showArrow && <ChevronIcon fill="white" />}
    </button>
  );
};

export default Button;
