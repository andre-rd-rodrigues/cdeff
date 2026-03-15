"use client";

import React from "react";
import Container from "./Container/Container";
import useScrollReveal from "@/hooks/useScrollReveal";

function Section({ children, containerClassName, sectionClassName, variant, angleTop, angleBottom }) {
  const revealRef = useScrollReveal();

  const variantClasses = {
    dark: "section-dark",
    "pattern-stripes": "bg-diagonal-stripes",
    "pattern-dots": "bg-dots-pattern"
  };

  const variantClass = variant ? variantClasses[variant] || "" : "";
  const angleClasses = `${angleTop ? "section-angle-top" : ""} ${angleBottom ? "section-angle-bottom" : ""}`;

  return (
    <section className={`${containerClassName || ""} ${variantClass} ${angleClasses} py-5 w-full relative overflow-hidden`}>
      <Container className={`${sectionClassName || ""} py-6 reveal`} ref={revealRef}>
        {children}
      </Container>
    </section>
  );
}

export default Section;
