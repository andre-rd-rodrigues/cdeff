import Card from "@/components/Cards/Card";
import ProductCard from "@/components/Cards/ProductCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { futsalProducts } from "@/data/futsal";
import { getTranslations } from "@/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React from "react";

function StorePage() {
  const t = useTranslations();
  const { locale } = useRouter();

  const translations = getTranslations(locale);

  const products = translations.common.products;

  const basketballProducts = products.filter(
    (item) => item.sport === "basketball"
  );

  return (
    <main>
      <PageHeader
        title={t("pages.store.title")}
        image={
          "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      {/*       <Section>
        <SectionTitle title={t("common.sports.basketball")} />
        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
          {basketballProducts.map((item, i) => (
            <ProductCard
              key={i}
              title={item.title}
              images={item.images}
              price={item.price}
              sizes={item.sizes}
            />
          ))}
        </div>
      </Section> */}

      <Section containerClassName={"bg-white"}>
        <SectionTitle title={t("common.sports.futsal")} />
        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
          {futsalProducts.map((item, i) => (
            <ProductCard
              key={i}
              title={item.name}
              image={item.image}
              price={item.price}
              sizes={item.sizes}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

export default StorePage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
