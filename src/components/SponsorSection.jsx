import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SponsorSection = ({ images, basket }) => {
  const t = useTranslations();

  return (
    <div className="flex gap-10 mb-10">
      <div>
        <SectionTitle
          title={
            basket ? t("common.sports.basketball") : t("common.sports.futsal")
          }
          isSubSectionTitle
          textClassName={"opacity-70"}
        />
        <div className="flex flex-wrap gap-5">
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
