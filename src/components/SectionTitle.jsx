import { barlow } from "@/styles/fonts";
import React from "react";

function SectionTitle({
  title,
  subtitle,
  className,
  isSubSectionTitle,
  textClassName
}) {
  return (
    <div className={`${className} ${isSubSectionTitle && "sub_section_title"}`}>
      {subtitle && (
        <p className={`uppercase font-semibold subtitle tracking-wider ${
          className?.includes("text-center") ? "justify-center" : ""
        }`}>
          {subtitle}
        </p>
      )}
      {title && (
        <h2
          className={`${barlow.className} section-header ${
            !subtitle ? "section-header-accent" : ""
          } ${textClassName} ${
            className?.includes("text-center") ? "section-header-center" : ""
          }`}
        >
          {title}
        </h2>
      )}
    </div>
  );
}

export default SectionTitle;
