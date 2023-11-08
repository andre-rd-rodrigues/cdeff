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
      imageSrc="https://images.unsplash.com/photo-1510051640316-cee39563ddab?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      linkLabel={t("common.buttons.contacts")}
    />
  );
}

export default ContactHero;
