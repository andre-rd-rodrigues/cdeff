"use client";

import Card from "@/components/Cards/Card";
import Carousel from "@/components/Carousel/Carousel";
import StatCounter from "@/components/StatCounter";
import DepartmentsSection from "@/components/DepartmentsSection";
import HeroHeader from "@/components/Hero/HeroHeader/HeroHeader";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import { barlow } from "@/styles/fonts";
import { getTranslations } from "@/helpers/locale.helpers.js";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function AboutPage() {
  const t = useTranslations();
  const locale = useLocale();

  const translations =
    getTranslations(locale).pages.about.achievements.achievementsList;

  const basketAchievements = translations.basketball;
  const futsalAchievements = translations.futsal;

  const yearsStrong = new Date().getFullYear() - 2005;
  const totalTitles =
    (basketAchievements?.length || 0) + (futsalAchievements?.length || 0);

  return (
    <main>
      <PageHeader
        title={t("pages.about.title")}
        image="https://i.postimg.cc/7YvTNjbs/Sobre-No-s.png"
      />
      <Section variant="pattern-dots">
        <TextWithImage
          title={t("pages.about.welcome.title")}
          subtitle={t("pages.about.welcome.subtitle")}
          description={t("pages.about.welcome.description")}
          imageSrc="https://i.postimg.cc/PJ3NPLJ9/welcome.png"
        />
      </Section>

      <Section containerClassName="bg-white">
        <TextWithImage
          title={t("pages.about.mission.title")}
          subtitle={t("pages.about.mission.subtitle")}
          description={t("pages.about.mission.description")}
          imageSrc="https://i.postimg.cc/15mpX6CC/mission.jpg"
          imageRight
        />
      </Section>

      {/* Departments Section */}
      <Section variant="pattern-dots">
        <div id="departments">
          <DepartmentsSection locale={locale} />
        </div>
      </Section>

      {/* Sponsors Section */}
      <HeroHeader
        linkLabel={t("common.buttons.learnMore")}
        href="/about/sponsors"
        imageSrc="https://i.postimg.cc/wThR4Fm6/Quer-apoiar-o-nosso-Clube-Torne-se-um-patrocinador.png"
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
      <Section variant="pattern-dots">
        <TextWithImage
          title={t("pages.about.activities.title")}
          subtitle={t("pages.about.activities.subtitle")}
          description={t("pages.about.activities.description")}
          imageSrc="https://i.postimg.cc/0Nfj1KPp/ATL.jpg"
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
          subtitle={t("pages.about.achievements.subtitle")}
        />

        {/* Club scoreboard */}
        <div
          className="rounded-lg mb-16 mt-2"
          style={{ background: "var(--blue)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 py-12 px-6">
            <StatCounter
              value={150}
              prefix="+"
              label={t("pages.about.achievements.stats.athletes")}
            />
            <StatCounter
              value={yearsStrong}
              label={t("pages.about.achievements.stats.years")}
            />
            <StatCounter
              value={2}
              label={t("pages.about.achievements.stats.sports")}
            />
            <StatCounter
              value={totalTitles}
              label={t("pages.about.achievements.stats.titles")}
            />
          </div>
        </div>

        {/* Basketball */}
        <SectionTitle
          title={t("common.sports.basketball")}
          isSubSectionTitle
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
              <Card title={title} imageSrc={image} subtitle={date} />
            </div>
          ))}
        </Carousel>

        {/* Futsal */}
        <SectionTitle
          title={t("common.sports.futsal")}
          isSubSectionTitle
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
              <Card title={title} imageSrc={image} subtitle={date} />
            </div>
          ))}
        </Carousel>
      </Section>
    </main>
  );
}
