import React, { forwardRef } from "react";
import styles from "./container.module.scss";

const Container = forwardRef(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={`max-w-7xl m-auto ${className} ${styles.container}`}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";

export default Container;
