import React from "react";

const { default: Link } = require("next/link");

const CustomLink = ({ children, href, className }) => (
  <Link
    href={href}
    className={`text-[var(--red)] font-medium hover:text-[var(--red-hover)] transition-colors duration-200 underline decoration-[var(--red)]/30 underline-offset-2 hover:decoration-[var(--red)] ${className} lowercase`}
  >
    {children}
  </Link>
);

export const renderAnswerWithLinks = (answer, t) => {
  const placeholders = {
    "{phoneLink}": (
      <CustomLink href="tel:+291615579">+351 291 615 579</CustomLink>
    ),
    "{emailLink}": (
      <CustomLink href="mailto:cdeff.madeira@esffranco.edu.pt">
        cdeff.madeira@esffranco.edu.pt
      </CustomLink>
    ),
    "{registrationLink}": (
      <CustomLink href="/registrations">
        {t("common.buttons.clickHere")}
      </CustomLink>
    ),
    "{basketballLink}": (
      <CustomLink href="/basketball">
        {t("common.buttons.clickHere")}
      </CustomLink>
    ),
    "{futsalLink}": (
      <CustomLink href="/futsal">{t("common.buttons.clickHere")}</CustomLink>
    ),
    "{equipmentLink}": (
      <CustomLink href="/store">{t("common.buttons.clickHere")}</CustomLink>
    ),
    "{atlLink}": (
      <CustomLink href="/activities#atl">
        {t("common.buttons.clickHere")}
      </CustomLink>
    )
  };

  const regex = new RegExp(
    "(" + Object.keys(placeholders).join("|") + ")",
    "gi"
  );
  const parts = answer.split(regex);

  return (
    <p className="max-w-3xl text-gray-600 leading-relaxed">
      {parts.map((part, index) => {
        const key = Object.keys(placeholders).find((key) =>
          new RegExp(key, "gi").test(part)
        );
        if (key) {
          return (
            <React.Fragment key={index}>
              {part.replace(new RegExp(key, "gi"), "")}
              {placeholders[key]}
            </React.Fragment>
          );
        }
        return part;
      })}
    </p>
  );
};
