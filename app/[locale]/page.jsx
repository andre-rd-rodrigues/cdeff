"use client";
import Card from "@/components/Cards/Card";
import IconCard from "@/components/Cards/IconCard/IconCard";
import Carousel from "@/components/Carousel/Carousel";
import HeroHeader from "@/components/Hero/HeroHeader/HeroHeader";
import HeroSection from "@/components/Hero/HeroSection/HeroSection";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import { getPosts } from "@/lib/notion";
import { barlow } from "@/styles/fonts";
import { getTranslations } from "@/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = ({ params: { locale } }) => {
  const t = useTranslations();

  const translations = getTranslations(locale);

  const departments = translations.common.departments;
  const products = translations.common.products;

  return (
    <main>
      <Carousel>
        <HeroHeader
          linkLabel={t("common.buttons.registration")}
          href="#"
          imageSrc="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="keen-slider__slide"
        >
          <p className={`${barlow.className} tracking-wide`}>
            {t("pages.homepage.title.upperTitle")}
          </p>
          <h1 className={`${barlow.className} uppercase tracking-wide`}>
            {t("pages.homepage.title.main")}
          </h1>
          <p className="tracking-wide">{t("pages.homepage.title.sub")}</p>
        </HeroHeader>
      </Carousel>

      {/* Sports section */}
      <Section
        sectionClassName="gap-6 flex justify-around flex-wrap align-center"
        containerClassName={"max-w-2xl m-auto"}
      >
        <Link href="/sports/basketball">
          <IconCard
            title={t("pages.homepage.sports.basket.title")}
            description={t("pages.homepage.sports.basket.description")}
            iconName="ph:basketball"
          />
        </Link>
        <Link href="/sports/futsal">
          <IconCard
            title={t("pages.homepage.sports.futsal.title")}
            description={t("pages.homepage.sports.futsal.description")}
            iconName="ph:basketball"
          />
        </Link>
      </Section>

      {/* About section */}
      <Section containerClassName="bg-white">
        <TextWithImage
          title={t("pages.homepage.welcome.title")}
          description={t("pages.homepage.welcome.description")}
          imgSrc={
            "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          labelOptions={{
            href: "about",
            label: t("common.buttons.learnMore")
          }}
        />
      </Section>

      {/* Departments section */}
      <Section containerClassName="text-center">
        <SectionTitle label={t("pages.homepage.departments.title")} />
        <div className="flex flex-wrap justify-around gap-6">
          {departments.map(({ imageSrc, name, position, description }, i) => (
            <Card
              key={i}
              imageSrc={imageSrc}
              title={name}
              description={description}
              subTitle={position}
            />
          ))}
        </div>
      </Section>

      {/* Hero 1 */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        linkLabel={t("common.buttons.registration")}
        subtitle={t("pages.homepage.hero_1.subtitle")}
        title={t("pages.homepage.hero_1.title")}
        href="#"
      />

      {/* Store section */}
      <Section>
        <SectionTitle
          label={t("pages.homepage.store.title")}
          subTitle={t("pages.homepage.store.subtitle")}
        />
        <div className="flex flex-wrap justify-around gap-6">
          {products.map(({ images, title, price, description }, i) => (
            <Card
              key={i}
              subTitle={`${price}€`}
              title={title}
              description={description}
              imageSrc={images[0]}
              hasButton
            />
          ))}
        </div>
      </Section>

      {/* Hero 2 */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        linkLabel={t("common.buttons.registration")}
        subtitle={t("pages.homepage.hero_2.subtitle")}
        title={t("pages.homepage.hero_2.title")}
        href="#"
      />

      {/* Blog section */}
      <Section>
        <SectionTitle
          className="text-center"
          label={t("pages.homepage.blog.title")}
          subTitle={t("pages.homepage.blog.subtitle")}
        />
      </Section>
    </main>
  );
};

export default Home;
