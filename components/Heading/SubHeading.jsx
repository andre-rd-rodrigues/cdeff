import React from "react";

function SubHeading({ title }) {
  return (
    <p
      className={`text-sm font-semibold text-blue uppercase tracking-wide mb-2`}
    >
      {title}
    </p>
  );
}

export default SubHeading;
