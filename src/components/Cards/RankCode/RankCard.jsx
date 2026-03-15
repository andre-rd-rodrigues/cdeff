"use client";

import React from "react";

import { barlow } from "@/styles/fonts";

function RankCard({ rank, onSelect, isSelected }) {
  const containerSelectedStyles = "bg-blue";
  const textSelectedStyles = "text-white";

  const containerBaseClasses =
    "w-[200px] h-full py-10 px-2 shadow-card inline-flex flex-col justify-center items-center gap-3.5 rounded-md overflow-hidden text-blue cursor-pointer transition-all duration-normal ease-smooth hover:text-white hover:bg-blue hover:-translate-y-1.5 hover:shadow-card-hover-strong active:-translate-y-0.5";

  return (
    <div
      className={`${containerBaseClasses} ${
        isSelected ? containerSelectedStyles : "bg-white"
      }`}
      onClick={onSelect}
    >
      <h4
        className={`text-fs-m font-bold uppercase tracking-[2px] my-1 mb-3 ${barlow.className} ${
          isSelected ? textSelectedStyles : ""
        }`}
      >
        {rank}
      </h4>
    </div>
  );
}

export default RankCard;
