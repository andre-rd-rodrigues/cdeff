import React from "react";
import SectionTitle from "./SectionTitle";
import Card from "./Cards/Card";
import { useTranslations } from "next-intl";
import { getTranslations } from "@/utils";

function DepartmentsSection({ locale }) {
  const t = useTranslations();

  const translations = getTranslations(locale);

  const departments = translations.common.departments;

  return (
    <>
      <SectionTitle
        className="text-center"
        title={t("pages.about.departments")}
      />
      <div className="flex flex-wrap justify-around gap-6">
        {departments.map(({ imageSrc, name, position, description }, i) => (
          <Card
            key={i}
            imageSrc={imageSrc}
            title={name}
            description={description}
            subTitle={position}
          />
        ))}
      </div>
    </>
  );
}

export default DepartmentsSection;
