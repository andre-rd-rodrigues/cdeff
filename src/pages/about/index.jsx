"use client";
import Button from "@/components/Button/Button";
import Card from "@/components/Cards/Card";
import Carousel from "@/components/Carousel/Carousel";
import DepartmentsSection from "@/components/DepartmentsSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import Timeline from "@/components/Timeline";
import { getTranslations } from "@/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

function About() {
  const t = useTranslations();

  const { locale } = useRouter();

  const translations = getTranslations(locale);
  const awardsList = translations.pages.about.awards.awardsList;

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
      <Section containerClassName="bg-white">
        <SectionTitle
          className="text-center"
          title={t("pages.about.sponsors.title")}
          subTitle={t("pages.about.sponsors.subtitle")}
        />
        {/* sponsors here */}
        <Link href="sponsors" className="block text-center">
          <Button label={t("common.buttons.seeMore")} />
        </Link>
      </Section>

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
          title={t("pages.about.awards.title")}
          subTitle={t("pages.about.awards.subtitle")}
        />
        <div className="flex justify-center items-start">
          <Timeline
            data={[
              {
                date: "20-10-1992",
                title: "Tournament of the max well known team"
              },
              {
                date: "20-10-1992",
                title: "Tournament of the max well known team"
              },
              {
                date: "20-10-1992",
                title: "Tournament of the max well known team"
              }
            ]}
          />
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
