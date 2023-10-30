import HeroSection from "@/components/Hero/HeroSection/HeroSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";
import React from "react";

function Sponsors() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.sponsors.title")}
        image="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Section>
        <SectionTitle title={t("pages.sponsors.mainSponsors")} />
      </Section>
      <Section>
        <SectionTitle title={t("pages.sponsors.premium")} />
      </Section>

      <HeroSection
        title={t("pages.sponsors.hero.title")}
        subtitle={t("pages.sponsors.hero.subtitle")}
        imageSrc={
          "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        linkLabel={t("common.buttons.contact")}
        href={"/contacts"}
      />

      <Section>
        <SectionTitle title={t("pages.sponsors.sponsors")} />
      </Section>
      <Section>
        <SectionTitle title={t("pages.sponsors.collaborations")} />
      </Section>
    </main>
  );
}

export default Sponsors;
