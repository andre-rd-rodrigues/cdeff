"use client";

import BlogCard from "@/components/Blog/BlogCard";
import Button from "@/components/Button/Button";
import EmptyState from "@/components/EmptyState";
import IconCard from "@/components/Cards/IconCard/IconCard";
import ProductCard from "@/components/Cards/ProductCard";
import HeroCarousel from "@/components/Carousel/HeroCarousel";
import DepartmentsSection from "@/components/DepartmentsSection";
import HeroHeader from "@/components/Hero/HeroHeader/HeroHeader";
import HeroSection from "@/components/Hero/HeroSection/HeroSection";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import StaggerGroup from "@/components/StaggerGroup";
import Reveal from "@/components/Reveal";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import { futsalProducts } from "@/data/futsal";
import { barlow } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function HomePage({ blogPosts }) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <main>
      <HeroCarousel autoPlay interval={4000}>
        <HeroHeader imageSrc="/images/homepage/headquarters.webp">
          <p className={`${barlow.className} tracking-wide`}>
            {t("pages.homepage.title.upperTitle")}
          </p>
          <h1 className={`${barlow.className} uppercase tracking-wide`}>
            {t("pages.homepage.title.main")}
          </h1>
          <p className="tracking-wide">{t("pages.homepage.title.sub")}</p>
        </HeroHeader>

        <HeroSection
          imageSrc="/images/homepage/banner-torneios-cta.webp"
          linkLabel={t("common.buttons.registration")}
          subtitle={t("pages.homepage.hero_1.subtitle")}
          title={t("pages.homepage.hero_1.title")}
          href="/registrations"
        />
      </HeroCarousel>

      {/* Sports section */}
      <span id="sports"></span>
      <Section variant="pattern-dots" revealContent={false}>
        <div className="max-w-2xl m-auto">
          <Reveal>
            <SectionTitle
              title={t("pages.homepage.sports.title")}
              className={"text-center"}
            />
          </Reveal>
          <StaggerGroup className="gap-6 flex justify-around flex-wrap align-center">
            <Link href="/basketball">
              <IconCard
                title={t("common.sports.basketball")}
                description={t("pages.homepage.sports.basket.description")}
                iconName="ph:basketball"
                motion="bounce"
              />
            </Link>
            <Link href="/futsal">
              <IconCard
                title={t("common.sports.futsal")}
                description={t("pages.homepage.sports.futsal.description")}
                iconName="ph:soccer-ball"
                motion="roll"
              />
            </Link>
          </StaggerGroup>
        </div>
      </Section>

      {/* About section */}
      <Section containerClassName="bg-white">
        <TextWithImage
          subtitle={t("pages.homepage.welcome.subtitle")}
          title={t("pages.homepage.welcome.title")}
          description={t("pages.homepage.welcome.description")}
          imageSrc={"/images/homepage/welcome.webp"}
          labelOptions={{
            href: "about",
            label: t("common.buttons.learnMore")
          }}
        />
      </Section>

      {/* Departments section */}
      <Section
        containerClassName="text-center"
        variant="pattern-dots"
        revealContent={false}
      >
        <DepartmentsSection locale={locale} knowMore />
      </Section>

      {/* Hero 1 */}
      <HeroSection
        imageSrc="/images/homepage/banner-torneio.webp"
        linkLabel={t("common.buttons.registration")}
        subtitle={t("pages.homepage.hero_1.subtitle")}
        title={t("pages.homepage.hero_1.title")}
        href="/registrations"
      />

      {/* Store section */}
      <Section variant="glow" revealContent={false}>
        <Reveal>
          <SectionTitle
            title={t("pages.homepage.store.title")}
            subtitle={t("pages.homepage.store.subtitle")}
          />
        </Reveal>
        <StaggerGroup className="flex flex-wrap gap-10 justify-center md:justify-between">
          {futsalProducts
            .slice(0, 4)
            .map(({ image, name, price, sizes }, i) => (
              <ProductCard
                key={i}
                title={name}
                image={image}
                price={price}
                sizes={sizes}
              />
            ))}
        </StaggerGroup>
        <Reveal className="text-center mt-12">
          <Link href="/store">
            <Button variant label={t("common.buttons.seeMore")} />
          </Link>
        </Reveal>
      </Section>

      {/* Hero 2 */}
      <HeroSection
        imageSrc="/images/homepage/modalidades-cta.webp"
        linkLabel={t("common.buttons.learnMore")}
        subtitle={t("pages.homepage.hero_2.subtitle")}
        title={t("pages.homepage.hero_2.title")}
        href="/#sports"
      />

      {/* Blog section */}
      <Section variant="pattern-dots" revealContent={false}>
        <Reveal>
          <SectionTitle
            className="text-center"
            title={t("pages.homepage.blog.title")}
            subtitle={t("pages.homepage.blog.subtitle")}
          />
        </Reveal>
        {blogPosts?.length ? (
          <>
            <StaggerGroup
              className="flex flex-wrap justify-center gap-10"
              itemClassName="w-full md:max-w-sm"
            >
              {blogPosts.slice(0, 3).map((post, i) => (
                <BlogCard
                  key={i}
                article={{
                  title: post.title,
                  description: post.description,
                  date: post.date,
                  image: post.image,
                  slug: post.slug,
                  category: post.category
                }}
                />
              ))}
            </StaggerGroup>
            <Reveal className="text-center mt-12">
              <Link href="/blog">
                <Button variant label={t("common.buttons.seeMore")} />
              </Link>
            </Reveal>
          </>
        ) : (
          <EmptyState
            icon="ph:newspaper-clipping"
            title={t("pages.blog.emptyTitle")}
            description={t("pages.blog.emptyText")}
          />
        )}
      </Section>
    </main>
  );
}
