"use client";
import Button from "@/components/Button/Button";
import Card from "@/components/Cards/Card";
import Carousel from "@/components/Carousel/Carousel";
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
        image="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Section>
        <TextWithImage
          title={t("pages.about.welcome.title")}
          subtitle={t("pages.about.welcome.subtitle")}
          description={t("pages.about.welcome.description")}
          imgSrc="https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Section>

      <Section containerClassName="bg-white">
        <TextWithImage
          title={t("pages.about.mission.title")}
          subtitle={t("pages.about.mission.subtitle")}
          description={t("pages.about.mission.description")}
          imgSrc="https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        imageSrc="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="keen-slider__slide"
      >
        <p className={`${barlow.className} tracking-wide`}>
          {t("pages.about.sponsors.subtitle")}
        </p>
        <h1 className={`${barlow.className} uppercase tracking-wide`}>
          {t("pages.about.sponsors.title")}
        </h1>
        <p className="tracking-wide">{t("pages.about.sponsors.description")}</p>
      </HeroHeader>

      <Section>
        <TextWithImage
          title={t("pages.about.activities.title")}
          subtitle={t("pages.about.activities.subtitle")}
          description={t("pages.about.activities.description")}
          imgSrc="https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          labelOptions={{
            href: "/activities",
            label: t("common.buttons.seeMore")
          }}
        />
      </Section>

      <Section containerClassName="bg-white">
        <SectionTitle
          className={"text-center"}
          title={t("pages.about.achievements.title")}
          subTitle={t("pages.about.achievements.subtitle")}
        />
        <div className="max-w-3xl m-auto">
          {/*  basketball */}
          <SectionTitle title={t("common.sports.basketball")} />
          <div className="flex ml-10 max-w-2xl items-start mb-12">
            <Timeline data={basketAchievements} />
          </div>

          {/* futsal */}
          <SectionTitle title={t("common.sports.futsal")} />
          <div className="flex ml-10 max-w-2xl items-start">
            <Timeline data={futsalAchievements} />
          </div>
        </div>
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
