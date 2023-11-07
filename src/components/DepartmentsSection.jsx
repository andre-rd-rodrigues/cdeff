import { getTranslations } from "@/utils";
import { useTranslations } from "next-intl";
import Card from "./Cards/Card";
import SectionTitle from "./SectionTitle";
import Button from "./Button/Button";
import Link from "next/link";

function DepartmentsSection({ locale, knowMore }) {
  const t = useTranslations();

  const translations = getTranslations(locale);

  const departments = translations.common.departments;

  const renderDepartments = knowMore ? departments.slice(0, 3) : departments;
  return (
    <>
      <SectionTitle
        className="text-center mb-10"
        title={t("pages.about.departments")}
      />
      <div
        className="flex flex-wrap gap-24 justify-around mb-12"
        style={{ marginTop: "75px" }}
      >
        {renderDepartments.map(({ department, members }, i) => (
          <div key={i} className="flex flex-col items-center">
            <SectionTitle
              title={department}
              className={"departments_section_title"}
            />
            <div className="flex flex-wrap gap-6">
              {members.map(({ name, position, imageSrc }, i) => (
                <Card
                  className={"w-[320px]"}
                  key={i}
                  imageSrc={imageSrc}
                  title={name}
                  subTitle={position}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {knowMore && (
        <Link href="/about#departments">
          <Button label={t("common.buttons.seeMore")} />
        </Link>
      )}
    </>
  );
}

export default DepartmentsSection;
