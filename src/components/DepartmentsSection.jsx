import { getTranslations } from "@/helpers/locale.helpers.js";
import { useTranslations } from "next-intl";
import Card from "./Cards/Card";
import SectionTitle from "./SectionTitle";
import Button from "./Button/Button";
import Link from "next/link";
import { departments } from "@/data/company";

function DepartmentsSection({ knowMore }) {
  const t = useTranslations();

  const renderDepartments = knowMore ? departments.slice(0, 3) : departments;

  return (
    <>
      <SectionTitle
        className="text-center mb-10"
        title={t("pages.about.departments")}
      />
      <div
        className="flex flex-wrap gap-12 justify-around mb-12"
        style={{ marginTop: "75px" }}
      >
        {renderDepartments.map(({ department, members }, i) => (
          <div key={i} className="flex flex-col items-center">
            <SectionTitle
              title={t(`common.departments.${department}`)}
              className={"sub_section_title"}
            />
            <div className="flex flex-wrap gap-6 md:justify-normal justify-center">
              {members.map(({ name, position, imageSrc }, i) => (
                <Card
                  className={"w-[320px]"}
                  key={i}
                  imageSrc={imageSrc}
                  title={name}
                  subTitle={t(`common.positions.${position}`)}
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
