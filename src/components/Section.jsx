import React from "react";
import Container from "./Container/Container";

function Section({ children, containerClassName, sectionClassName }) {
  return (
    <section className={`${containerClassName} py-5 w-full`}>
      <Container className={`${sectionClassName} py-6`}>{children}</Container>
    </section>
  );
}

export default Section;
