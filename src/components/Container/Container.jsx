import React, { forwardRef } from "react";

const Container = forwardRef(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={`max-w-7xl m-auto px-padding-y ${className}`}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";

export default Container;
