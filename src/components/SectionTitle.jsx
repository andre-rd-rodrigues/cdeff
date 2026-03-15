import { barlow } from "@/styles/fonts";
import React from "react";

function SectionTitle({
  title,
  subtitle,
  className,
  isSubSectionTitle,
  textClassName
}) {
  const sizeClass = isSubSectionTitle ? "text-fs-l-s" : "text-fs-l";

  return (
    <div className={className}>
      {subtitle && (
        <p className={`uppercase font-semibold subtitle tracking-wider ${isSubSectionTitle ? "text-fs-l-s" : ""} ${
          className?.includes("text-center") ? "justify-center" : ""
        }`}>
          {subtitle}
        </p>
      )}
      {title && (
        <h2
          className={`${barlow.className} ${sizeClass} uppercase mb-5 text-blue relative inline-block section-header ${
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
