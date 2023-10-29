import React from "react";
import Container from "./Container/Container";

function Section({ children, containerClassName, sectionClassName }) {
  return (
    <section className={`${containerClassName} w-full py-16`}>
      <Container className={`${sectionClassName} py-6`}>{children}</Container>
    </section>
  );
}

export default Section;
