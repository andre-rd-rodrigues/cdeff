import React from "react";
import Container from "./Container/Container";
import useScrollReveal from "@/hooks/useScrollReveal";

function Section({ children, containerClassName, sectionClassName }) {
  const revealRef = useScrollReveal();

  return (
    <section className={`${containerClassName} py-5 w-full`}>
      <Container className={`${sectionClassName} py-6 reveal`} ref={revealRef}>
        {children}
      </Container>
    </section>
  );
}

export default Section;
