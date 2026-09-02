import React from "react";
import { barlow } from "@/styles/fonts";
import styles from "./button.module.scss";

const ChevronIcon = ({ fill = "currentColor" }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-fast ease-smooth group-hover:translate-x-0.5"
  >
    <path
      d="M5 3L9 7L5 11"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Button = ({ label, className, onClick, variant, showArrow = false }) => {
  return variant ? (
    <button
      className={`group inline-flex items-center gap-2 py-3 px-8  uppercase tracking-[2px] font-medium text-fs-s border border-red text-red hover:text-white hover:-translate-y-0.5 hover:shadow-button-hover active:translate-y-px active:shadow-button-active ${styles.button2} ${barlow.className} ${className}`}
      onClick={onClick}
    >
      {label}
      {showArrow && <ChevronIcon fill="currentColor" />}
    </button>
  ) : (
    <button
      className={`group inline-flex items-center justify-center gap-2 py-3 px-8  uppercase tracking-[2px] font-medium text-fs-s text-white bg-gradient-to-br from-[#bd3a4e] to-[#c94e60] transition-all duration-fast ease-smooth hover:-translate-y-0.5 hover:shadow-button-hover hover:from-[var(--red-hover)] hover:to-[#b8444f] active:translate-y-px active:shadow-button-active ${barlow.className} ${className}`}
      onClick={onClick}
    >
      {label}
      {showArrow && <ChevronIcon fill="white" />}
    </button>
  );
};

export default Button;
