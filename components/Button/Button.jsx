import React from "react";
import styles from "./button.module.scss";

const Button = ({ label, className, onClick }) => {
  return (
    <button
      className={` text-white py-2 px-4 ${styles.button} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
