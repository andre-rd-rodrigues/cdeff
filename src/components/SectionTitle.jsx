import { barlow } from "@/styles/fonts";
import React from "react";

function SectionTitle({ title, subTitle, className }) {
  return (
    <div className={className}>
      {subTitle && (
        <p className={`uppercase font-semibold subtitle tracking-wider`}>
          {subTitle}
        </p>
      )}
      <h2 className={`${barlow.className} section-header`}>{title}</h2>
    </div>
  );
}

export default SectionTitle;
