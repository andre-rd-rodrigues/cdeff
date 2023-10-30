import { barlow } from "@/styles/fonts";
import React from "react";

function Heading({ title }) {
  return (
    <h2
      className={`${barlow.className} text-4xl font-semibold text-blue uppercase tracking-wide mb-5`}
    >
      {title}
    </h2>
  );
}

export default Heading;
