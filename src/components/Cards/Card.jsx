import React from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { barlow } from "@/styles/fonts";

const Card = ({
  hasButton,
  title,
  description,
  subTitle,
  imageSrc,
  className
}) => {
  const t = useTranslations();

  return (
    <div
      className={`relative flex flex-col shadow-xl max-w-[320px] ${className}`}
    >
      <div className="relative h-[350px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </div>
      <div className="flex-grow p-7 pb-9 flex flex-col justify-between">
        <div>
          <h4
            className={`${barlow.className} text-blue text-center text-xl font-semibold uppercase break-words`}
          >
            {title}
          </h4>
          {subTitle && (
            <p className="text-center text-gray-500 text-sm font-medium mt-1 break-words">
              {subTitle}
            </p>
          )}
          {description && (
            <p className=" text-gray-700 text-justify text-sm break-words mt-4 mb-6">
              {description}
            </p>
          )}
        </div>
        {hasButton && (
          <Button label={t("common.buttons.book")} onClick={() => null} />
        )}
      </div>
    </div>
  );
};

export default Card;
