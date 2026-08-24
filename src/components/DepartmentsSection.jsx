"use client";

import { getTranslations } from "@/helpers/locale.helpers.js";
import { useTranslations } from "next-intl";
import TeamMemberCard from "./Cards/TeamMemberCard";
import SectionTitle from "./SectionTitle";
import Button from "./Button/Button";
import StaggerGroup from "./StaggerGroup";
import Reveal from "./Reveal";
import { Link, parseHref } from "@/i18n/routing";
import { departments } from "@/data/company";

function DepartmentsSection({ knowMore }) {
  const t = useTranslations();

  const renderDepartments = knowMore ? departments.slice(0, 3) : departments;

  return (
    <>
      <Reveal>
        <SectionTitle
          className="text-center mb-10"
          title={t("pages.about.departments")}
        />
      </Reveal>
      <StaggerGroup
        className="flex flex-wrap gap-12 justify-around mb-12"
        style={{ marginTop: "var(--spacing-section-gap)" }}
      >
        {renderDepartments.map(({ department, members }, i) => (
          <div key={i} className="flex flex-col items-center">
            {members.map(({ name, position, imageSrc }, i) => (
              <TeamMemberCard
                className={"w-[320px]"}
                key={i}
                imageSrc={imageSrc}
                name={name}
                role={t(`common.positions.${position}`)}
              />
            ))}
          </div>
        ))}
      </StaggerGroup>
      {knowMore && (
        <Reveal className="text-center">
          <Link href={parseHref("/about#departments")}>
            <Button label={t("common.buttons.seeMore")} />
          </Link>
        </Reveal>
      )}
    </>
  );
}

export default DepartmentsSection;
