import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { barlow } from "@/styles/fonts";
import Link from "next/link";
import { TEL_LINK } from "@/utils";

const ProductCard = ({ title, price, sizes, image, images, className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = useTranslations();
  const intervalRef = useRef(null);

  const maxImageIndex = images?.length - 1;

  const handleHoverImage = () => {
    // Don't run for single image
    if (image) return;

    // Apply effect only to multiple images
    setCurrentImageIndex((prev) => (prev === maxImageIndex ? 0 : prev + 1));

    intervalRef.current = setInterval(
      () =>
        setCurrentImageIndex((prev) => (prev === maxImageIndex ? 0 : prev + 1)),
      1500
    );
  };

  return (
    <div className={`relative flex flex-col shadow-xl w-[250px] ${className}`}>
      <div className="relative h-[350px]">
        <Image
          className="cursor-pointer"
          onMouseOver={handleHoverImage}
          onMouseLeave={() => clearInterval(intervalRef.current)}
          src={image || images[currentImageIndex]}
          alt={title}
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </div>
      <div className="flex-grow p-7 pb-9 flex flex-col justify-between">
        <div>
          {price && (
            <p className="text-center text-red text-sm font-medium mt-1 break-words">
              {price}
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
