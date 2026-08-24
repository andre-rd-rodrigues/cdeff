"use client";

import React from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

/**
 * Fades + rises its content in once on scroll. A single, intentional reveal —
 * use it for a heading or intro block that should enter as one unit. For lists
 * of cards, reach for <StaggerGroup> instead so siblings enter in rhythm.
 */
function Reveal({ as: Tag = "div", children, className = "", ...rest }) {
  const ref = useScrollReveal();

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

export default Reveal;
