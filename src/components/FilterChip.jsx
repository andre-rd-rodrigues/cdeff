"use client";

import React from "react";
import { barlow } from "@/styles/fonts";

function FilterChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`${barlow.className} uppercase tracking-[2px] font-medium text-fs-s py-2 px-5 border transition-all duration-fast ease-smooth ${
        active
          ? "bg-blue text-white border-blue"
          : "bg-white text-blue border-[rgba(39,62,121,0.15)] hover:border-blue"
      }`}
    >
      {label}
    </button>
  );
}

export default FilterChip;
