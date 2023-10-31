import React from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { barlow } from "@/styles/fonts";

const ProductCard = ({ title, price, sizes, images, className }) => {
  const t = useTranslations();

  return (
    <div
      className={`relative flex flex-col shadow-xl max-w-[320px] ${className}`}
    >
      <div className="relative h-[350px]">
        <Image
          src={images[0]}
          alt={title}
          layout="fill"
          style={{
            objectFit: "cover"
          }}
        />
      </div>
      <div className="flex-grow p-7 pb-9 flex flex-col justify-between">
        <div>
          {price && (
            <p className="text-center text-red text-sm font-medium mt-1 break-words">
              {price} €
            </p>
          )}
          <h4
            className={`${barlow.className} text-blue text-center text-xl font-semibold uppercase break-words`}
          >
            {title}
          </h4>

          <p className=" text-gray-700 text-center tracking-widest text-sm  break-words mt-4 mb-6">
            {sizes.join(" | ")}
          </p>
        </div>

        <Button label={t("common.buttons.book")} onClick={() => null} />
      </div>
    </div>
  );
};

export default ProductCard;
