import React from "react";
import Image from "next/image";
import { barlow } from "@/styles/fonts";
import { imageBlur } from "@/data/imageBlur";

const TeamMemberCard = ({ name, role, imageSrc, className }) => {
  const blur = imageBlur[imageSrc];
  return (
    <div
      className={`relative flex border border-blue flex-col max-w-[320px] rounded-lg shadow-card overflow-hidden bg-white ${className}`}
    >
      <div className="relative h-[350px]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 640px) 90vw, 320px"
          placeholder={blur ? "blur" : "empty"}
          blurDataURL={blur}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-grow p-7 pb-9 flex flex-col justify-between bg-blue">
        <div>
          <h4
            className={`${barlow.className} text-white text-center text-xl font-semibold uppercase break-words`}
          >
            {name}
          </h4>
          {role && (
            <p className="text-center text-white text-sm font-thin mt-1 break-words">
              {role}
            </p>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-red" />
    </div>
  );
};

export default TeamMemberCard;
