import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { barlow } from "@/styles/fonts";

function FeedbackCard({ author, feedback, image, className }) {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-lg border border-blue/5 bg-white p-8 shadow-card transition duration-normal ease-smooth hover:-translate-y-1.5 hover:shadow-card-hover ${
        className || ""
      }`}
    >
      <span className="absolute left-0 top-8 h-10 w-1 rounded-r-full bg-blue" />
      <div className="text-blue/60 transition-transform duration-normal ease-smooth group-hover:-rotate-6 group-hover:scale-110">
        <Icon icon="ri:double-quotes-l" fontSize={40} />
      </div>
      <p className="mt-3 flex-grow leading-relaxed text-dark/75">{feedback}</p>
      <div className="mt-7 flex items-center justify-end gap-3 text-right">
        <div>
          <h5
            className={`${barlow.className} font-semibold uppercase tracking-wide text-blue`}
          >
            {author}
          </h5>
        </div>
        <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-card ring-2 ring-white">
          <Image
            src={image}
            alt={author || "client"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
