import { barlow } from "@/styles/fonts";
import React from "react";

function SectionTitle({
  title,
  subTitle,
  className,
  isSubSectionTitle,
  textClassName
}) {
  return (
    <div className={`${className} ${isSubSectionTitle && "sub_section_title"}`}>
      {subTitle && (
        <p className={`uppercase font-semibold subtitle tracking-wider`}>
          {subTitle}
        </p>
      )}
      {title && (
        <h2 className={`${barlow.className} section-header ${textClassName}`}>
          {title}
        </h2>
      )}
    </div>
  );
}

export default SectionTitle;
