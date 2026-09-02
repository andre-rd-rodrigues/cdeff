import { barlow } from "@/styles/fonts";
import React from "react";

function SectionTitle({
  title,
  subtitle,
  className,
  isSubSectionTitle,
  textClassName,
  hideAccent
}) {
  const sizeClass = isSubSectionTitle ? "text-fs-l-s" : "text-fs-l";
  const showAccent = !subtitle && !hideAccent;
  const centered = className?.includes("text-center");

  return (
    <div className={className}>
      {subtitle && (
        <p className={`uppercase font-semibold subtitle tracking-wider ${isSubSectionTitle ? "text-fs-l-s" : ""} ${
          centered ? "justify-center" : ""
        }`}>
          {subtitle}
        </p>
      )}
      {title && (
        <h2
          className={`${barlow.className} ${sizeClass} uppercase mb-5 text-blue relative inline-block section-header ${
            showAccent ? "section-header-accent" : ""
          } ${textClassName} ${centered ? "section-header-center" : ""}`}
        >
          {title}
        </h2>
      )}
    </div>
  );
}

export default SectionTitle;
