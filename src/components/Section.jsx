"use client";

import React from "react";
import Container from "./Container/Container";
import useScrollReveal from "@/hooks/useScrollReveal";

function Section({
  children,
  containerClassName,
  sectionClassName,
  variant,
  angleTop,
  angleBottom,
  revealContent = true
}) {
  const revealRef = useScrollReveal();

  const variantClasses = {
    dark: "section-dark",
    "pattern-stripes": "bg-diagonal-stripes",
    "pattern-dots": "bg-dots-pattern",
    glow: "bg-corner-glow"
  };

  const variantClass = variant ? variantClasses[variant] || "" : "";
  const angleClasses = `${angleTop ? "section-angle-top" : ""} ${angleBottom ? "section-angle-bottom" : ""}`;

  return (
    <section className={`${containerClassName || ""} ${variantClass} ${angleClasses} py-12 md:py-16 w-full relative overflow-hidden`}>
      <Container
        className={`${sectionClassName || ""} py-6 ${revealContent ? "reveal" : ""}`}
        ref={revealContent ? revealRef : undefined}
      >
        {children}
      </Container>
    </section>
  );
}

export default Section;
