import Button from "@/components/Button/Button";
import HeroHeader from "@/components/Hero/HeroHeader/HeroHeader";
import HeroSection from "@/components/Hero/HeroSection/HeroSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { basketSponsors } from "@/data/basketball";
import { futsalSponsors } from "@/data/futsal";
import { barlow } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function Sponsors() {
  const t = useTranslations();

  const SponsorSection = ({ images, basket }) => {
    return (
      <div className="flex gap-10 mb-10">
        <div>
          <SectionTitle
            title={
              basket ? t("common.sports.basketball") : t("common.sports.futsal")
            }
            isSubSectionTitle
            textClassName={"opacity-70"}
          />
          <div className="flex flex-wrap gap-5">
            {images.map((image, i) => (
              <div className="relative w-[150px] h-[130px]" key={i}>
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src={image}
                  alt="CDEFF Patrocinadores"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <main>
      <PageHeader
        title={t("pages.sponsors.title")}
        image="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Main */}
      <Section>
        <SectionTitle title={t("pages.sponsors.mainSponsors")} />
        <div className="flex gap-10 justify-center">
          <SponsorSection
            images={["/images/navbar/basket/hospital.png"]}
            basket
          />
          <SponsorSection images={["/images/navbar/futsal/tourigalo.png"]} />
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
        href="/contactos"
        imageSrc="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <h1 className={`${barlow.className} uppercase tracking-wide`}>
          {t("pages.sponsors.hero.title")}
        </h1>
        <p className="tracking-wide">{t("pages.sponsors.hero.description")}</p>
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

export default Sponsors;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default
    }
  };
}
