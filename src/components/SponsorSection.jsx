import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SponsorSection = ({ images, basket, hideTitle }) => {
  const t = useTranslations();

  return (
    <div className="mb-10">
      <div>
        {!hideTitle && (
          <SectionTitle
            title={
              basket ? t("common.sports.basketball") : t("common.sports.futsal")
            }
            isSubSectionTitle
            textClassName={"opacity-70"}
          />
        )}
        <div
          className={`grid justify-items-center  ${
            images.length >= 3
              ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
              : "grid-cols-2"
          }`}
        >
          {images.map((image, i) => (
            <div className="relative w-[150px] h-[130px]" key={i}>
              <Image
                fill
                style={{ objectFit: "contain" }}
                src={image}
                alt="CDEFF Patrocinadores"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
