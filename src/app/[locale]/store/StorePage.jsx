"use client";

import ProductCard from "@/components/Cards/ProductCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { basketballProducts } from "@/data/basketball";
import { futsalProducts } from "@/data/futsal";
import { useTranslations } from "next-intl";

export default function StorePage() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.store.title")}
        image={"https://i.postimg.cc/MpqMCR71/Loja.png"}
      />
      <Section>
        <SectionTitle title={t("common.sports.basketball")} />
        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
          {basketballProducts.map((item, i) => (
            <ProductCard
              key={i}
              title={item.name}
              images={item.images}
              price={item.price}
              sizes={item.sizes}
            />
          ))}
        </div>
      </Section>

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
