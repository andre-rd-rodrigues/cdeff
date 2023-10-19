import React from "react";

const Button = ({ label, className }) => {
  return (
    <button
      className={` bg-transparent hover:bg-zinc-700 text-zinc hover:text-white py-2 px-4 border border-zinc-700 hover:border-transparent ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
