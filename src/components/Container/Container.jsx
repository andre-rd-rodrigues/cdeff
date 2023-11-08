import React from "react";
import styles from "./container.module.scss";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-7xl m-auto ${className} ${styles.container}`}>
      {children}
    </div>
  );
};

export default Container;
