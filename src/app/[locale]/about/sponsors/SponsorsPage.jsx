"use client";

import Button from "@/components/Button/Button";
import HeroHeader from "@/components/Hero/HeroHeader/HeroHeader";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import SponsorSection from "@/components/SponsorSection";
import { basketSponsors } from "@/data/basketball";
import { futsalSponsors } from "@/data/futsal";
import { barlow } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function SponsorsPage() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.sponsors.title")}
        image="/images/headers/patrocinadores.png"
      />

      {/* Main */}
      <Section variant="pattern-dots">
        <SectionTitle title={t("pages.sponsors.mainSponsors")} hideAccent />
        <div className="flex">
          <SponsorSection
            images={["/images/navbar/basket/hospital.webp"]}
            basket
          />
          <SponsorSection images={["/images/navbar/futsal/tourigalo.webp"]} />
        </div>
      </Section>

      {/* Premium */}
      <Section containerClassName={"bg-white"}>
        <SectionTitle title={t("pages.sponsors.premium")} />
        <SponsorSection basket images={basketSponsors.premium} />
        <SponsorSection images={futsalSponsors.premium} />
      </Section>

      {/* Hero section */}
      <HeroHeader
        linkLabel={t("common.buttons.contacts")}
        href="/contacts"
        imageSrc="/images/about/sponsor-cta.webp"
      >
        <h1 className={`${barlow.className} uppercase tracking-wide`}>
          {t("pages.sponsors.hero.title")}
        </h1>
        <p className="tracking-wide">{t("pages.sponsors.hero.description")}</p>
        <a href={"/assets/CDEFF.pdf"} download className="mx-3">
          <Button
            variant
            label="Download"
            className={"text-white border-white"}
          />
        </a>
      </HeroHeader>

      {/* Normal */}
      <Section containerClassName={"bg-white"}>
        <SectionTitle title={t("pages.sponsors.sponsors")} />
        <SponsorSection basket images={basketSponsors.normal} />
        <SponsorSection images={futsalSponsors.normal} />
      </Section>

      {/* Collaborators */}
      <Section containerClassName={"bg-white"}>
        <SectionTitle title={t("pages.sponsors.collaborations")} />
        <SponsorSection basket images={basketSponsors.collaborators} />
        <SponsorSection images={futsalSponsors.collaborators} />
      </Section>
    </main>
  );
}
