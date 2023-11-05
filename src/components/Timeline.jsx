// components/Timeline.js
import { barlow } from "@/styles/fonts";
import React from "react";

const Timeline = ({ data }) => {
  return (
    <ol className="relative border-l border-gray-200">
      {data.map(({ date, title }, i) => (
        <li
          key={i}
          className="mb-8 ml-4"
          style={{ listStyle: "none", position: "relative" }}
        >
          <div
            className="absolute w-3 h-3 bg-gray-400 rounded-full border border-white"
            style={{ top: "0.5rem", left: "-22px" }}
          />
          <time
            className={`mb-1 text-m tracking-wider font-normal leading-none text-gray-400 ${barlow.className}`}
          >
            {date}
          </time>
          <h3 className="text-lg font-normal text-dark">{title}</h3>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
