"use client";
import Button from "@/components/Button/Button";
import Card from "@/components/Cards/Card";
import Carousel from "@/components/Carousel/Carousel";
import CarouselFeedback from "@/components/Carousel/CarouselFeedback";
import DepartmentsSection from "@/components/DepartmentsSection";
import HeroHeader from "@/components/Hero/HeroHeader/HeroHeader";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import Timeline from "@/components/Timeline";
import { barlow } from "@/styles/fonts";
import { getTranslations } from "@/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

function About() {
  const t = useTranslations();

  const { locale } = useRouter();

  const translations =
    getTranslations(locale).pages.about.achievements.achievementsList;

  const basketAchievements = translations.basketball;
  const futsalAchievements = translations.futsal;

  return (
    <main>
      <PageHeader
        title={t("pages.about.title")}
        image="https://i.postimg.cc/WbBngYcT/sobre.jpg"
      />
      <Section>
        <TextWithImage
          title={t("pages.about.welcome.title")}
          subtitle={t("pages.about.welcome.subtitle")}
          description={t("pages.about.welcome.description")}
          imgSrc="https://i.postimg.cc/PJ3NPLJ9/welcome.png"
        />
      </Section>

      <Section containerClassName="bg-white">
        <TextWithImage
          title={t("pages.about.mission.title")}
          subtitle={t("pages.about.mission.subtitle")}
          description={t("pages.about.mission.description")}
          imgSrc="https://i.postimg.cc/15mpX6CC/mission.jpg"
          imageRight
        />
      </Section>

      {/* Departments Section */}
      <Section>
        <div id="departments">
          <DepartmentsSection locale={locale} />
        </div>
      </Section>

      {/* Sponsors Section */}
      <HeroHeader
        linkLabel={t("common.buttons.learnMore")}
        href="/about/sponsors"
        imageSrc="https://i.postimg.cc/1zMDPWxk/397754064-824352832813912-1867964922690926201-n1.png"
      >
        <p className={`${barlow.className} tracking-wide`}>
          {t("pages.about.sponsors.subtitle")}
        </p>
        <h1 className={`${barlow.className} uppercase tracking-wide`}>
          {t("pages.about.sponsors.title")}
        </h1>
        <p className="tracking-wide">{t("pages.about.sponsors.description")}</p>
      </HeroHeader>

      {/* Activities */}
      <Section>
        <TextWithImage
          title={t("pages.about.activities.title")}
          subtitle={t("pages.about.activities.subtitle")}
          description={t("pages.about.activities.description")}
          imgSrc="https://i.postimg.cc/0Nfj1KPp/ATL.jpg"
          labelOptions={{
            href: "/activities",
            label: t("common.buttons.seeMore")
          }}
        />
      </Section>

      {/* Palmarés */}
      <Section containerClassName="bg-white">
        <SectionTitle
          className={"text-center"}
          title={t("pages.about.achievements.title")}
          subTitle={t("pages.about.achievements.subtitle")}
        />

        {/* Basketball */}
        <SectionTitle
          title={t("common.sports.basketball")}
          className="sub_section_title"
        />
        <Carousel
          isSpaced
          autoPlay
          darkArrows
          breakpoints={{
            breakpoints: {
              "(min-width: 600px)": {
                slides: { perView: 3, spacing: 20 }
              }
            }
          }}
        >
          {basketAchievements.map(({ title, image, date }, i) => (
            <div
              className="keen-slider__slide pb-8 flex justify-center"
              key={i}
            >
              <Card title={title} imageSrc={image} subTitle={date} />
            </div>
          ))}
        </Carousel>

        {/* Futsal */}
        <SectionTitle
          title={t("common.sports.futsal")}
          className="sub_section_title"
        />
        <Carousel
          isSpaced
          autoPlay
          darkArrows
          breakpoints={{
            breakpoints: {
              "(min-width: 600px)": {
                slides: { perView: 3, spacing: 20 }
              }
            }
          }}
        >
          {futsalAchievements.map(({ title, image, date }, i) => (
            <div
              className="keen-slider__slide pb-8 flex justify-center"
              key={i}
            >
              <Card title={title} imageSrc={image} subTitle={date} />
            </div>
          ))}
        </Carousel>
      </Section>
    </main>
  );
}

export default About;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
