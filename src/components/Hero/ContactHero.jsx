import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import { useTranslations } from "next-intl";

function ContactHero() {
  const t = useTranslations();
  return (
    <HeroSection
      href={t("common.links.contacts")}
      title={t("components.contactHero.title")}
    />
  );
}

export default ContactHero;
