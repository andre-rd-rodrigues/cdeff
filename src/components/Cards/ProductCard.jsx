import React from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { barlow } from "@/styles/fonts";
import Link from "next/link";
import { TEL_LINK } from "@/utils";

const ProductCard = ({ title, price, sizes, image, className }) => {
  const t = useTranslations();

  return (
    <div className={`relative flex flex-col shadow-xl w-[250px] ${className}`}>
      <div className="relative h-[350px]">
        <Image
          src={image}
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
            className={`${barlow.className} text-blue text-center text-xl font-semibold uppercase break-words mb-4`}
          >
            {title}
          </h4>

          {sizes && (
            <p className=" text-gray-700 text-center tracking-widest text-sm  break-words mb-6">
              {sizes.join(" | ")}
            </p>
          )}
        </div>

        <Link href={TEL_LINK} className="w-full">
          <Button label={t("common.buttons.book")} className={"w-full"} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
