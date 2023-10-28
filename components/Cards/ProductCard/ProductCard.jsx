import React from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { barlow } from "@/styles/fonts";

const ProductCard = ({ productInfo }) => {
  const t = useTranslations();
  const { title, description, price, image, id } = productInfo;

  return (
    <div className="relative flex flex-col shadow-xl max-w-[320px]">
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
      <div className="flex-grow text-center p-7 pb-9 flex flex-col justify-between">
        <div>
          <h4
            className={`${barlow.className} text-blue text-xl font-semibold uppercase break-words`}
          >
            {title}
          </h4>
          <p className=" text-gray-500 text-sm break-words">{price}€</p>
          <p className=" text-gray-700 text-sm break-words mt-2 mb-6">
            {description}
          </p>
        </div>
        <Button label={t("common.buttons.book")} onClick={() => null} />
      </div>
    </div>
  );
};

export default ProductCard;
