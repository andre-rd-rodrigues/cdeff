import BlogCard from "@/components/Blog/BlogCard";
import Button from "@/components/Button/Button";
import IconCard from "@/components/Cards/IconCard/IconCard";
import ProductCard from "@/components/Cards/ProductCard";
import Carousel from "@/components/Carousel/Carousel";
import DepartmentsSection from "@/components/DepartmentsSection";
import HeroHeader from "@/components/Hero/HeroHeader/HeroHeader";
import HeroSection from "@/components/Hero/HeroSection/HeroSection";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import { futsalProducts } from "@/data/futsal";
import { getPosts } from "@/lib/notion";
import { barlow } from "@/styles/fonts";

import { REVALIDATE_TIME, getNotionImagePathname } from "@/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ blogPosts }) {
  const t = useTranslations();
  const { locale } = useRouter();

  return (
    <main>
      <Carousel autoPlay timeoutProp={4000}>
        <HeroHeader
          imageSrc="/images/homepage/headquarters.jpeg"
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

        <HeroSection
          imageSrc="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          linkLabel={t("common.buttons.registration")}
          subtitle={t("pages.homepage.hero_1.subtitle")}
          title={t("pages.homepage.hero_1.title")}
          href="/registrations"
          className="keen-slider__slide"
        />
      </Carousel>

      {/* Sports section */}
      <span id="sports"></span>
      <Section containerClassName={"max-w-2xl m-auto"}>
        <SectionTitle
          title={t("pages.homepage.sports.title")}
          className={"text-center"}
        />
        <div className="gap-6 flex justify-around flex-wrap align-center">
          <Link href="/basketball">
            <IconCard
              title={t("common.sports.basketball")}
              description={t("pages.homepage.sports.basket.description")}
              iconName="ph:basketball"
            />
          </Link>
          <Link href="/futsal">
            <IconCard
              title={t("common.sports.futsal")}
              description={t("pages.homepage.sports.futsal.description")}
              iconName="ph:soccer-ball"
            />
          </Link>
        </div>
      </Section>

      {/* About section */}
      <Section containerClassName="bg-white">
        <TextWithImage
          subtitle={t("pages.homepage.welcome.subtitle")}
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
        <DepartmentsSection locale={locale} knowMore />
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
          title={t("pages.homepage.store.title")}
          subTitle={t("pages.homepage.store.subtitle")}
        />
        <div className="flex flex-wrap gap-10 justify-center md:justify-between">
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
        </div>
        <div className="text-center mt-12">
          <Link href="/store">
            <Button variant label={t("common.buttons.seeMore")} />
          </Link>
        </div>
      </Section>

      {/* Hero 2 */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        linkLabel={t("common.buttons.learnMore")}
        subtitle={t("pages.homepage.hero_2.subtitle")}
        title={t("pages.homepage.hero_2.title")}
        href="/#sports"
      />

      {/* Blog section */}
      <Section>
        <SectionTitle
          className="text-center"
          title={t("pages.homepage.blog.title")}
          subTitle={t("pages.homepage.blog.subtitle")}
        />
        <div className="flex flex-wrap justify-center gap-10">
          {blogPosts?.map((post, i) => (
            <BlogCard
              key={i}
              article={{
                title: post.properties.Name.title[0].plain_text,
                description:
                  post.properties?.Description.rich_text[0]?.plain_text,
                date: post.created_time,
                image: getNotionImagePathname(post),
                slug: post.properties.Slug.rich_text[0].plain_text
              }}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

export async function getStaticProps({ locale }) {
  const blogPosts = await getPosts(locale);

  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
      blogPosts
    },
    revalidate: REVALIDATE_TIME
  };
}
