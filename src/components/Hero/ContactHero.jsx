"use client";

import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import { useTranslations } from "next-intl";

function ContactHero() {
  const t = useTranslations();
  return (
    <HeroSection
      className="max-h-72"
      href="/contacts"
      title={t("components.contactHero.title")}
      imageSrc="/images/headers/perguntas-frequentes.webp"
      linkLabel={t("common.buttons.contacts")}
    />
  );
}

export default ContactHero;
