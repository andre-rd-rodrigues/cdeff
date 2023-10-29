import { barlow } from "@/styles/fonts";
import React from "react";

function SectionTitle({ label, subTitle }) {
  return (
    <>
      {subTitle && (
        <p className={`uppercase font-semibold subtitle tracking-wider`}>
          {subTitle}
        </p>
      )}
      <h2 className={`${barlow.className} section-header`}>{label}</h2>
    </>
  );
}

export default SectionTitle;
