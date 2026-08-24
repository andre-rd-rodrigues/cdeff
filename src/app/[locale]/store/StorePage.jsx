"use client";

import { useState } from "react";
import ProductCard from "@/components/Cards/ProductCard";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import StaggerGroup from "@/components/StaggerGroup";
import Reveal from "@/components/Reveal";
import { barlow } from "@/styles/fonts";
import { basketballProducts } from "@/data/basketball";
import { futsalProducts } from "@/data/futsal";
import { useTranslations } from "next-intl";

export default function StorePage() {
  // stagger-reveal: product grids cascade in on scroll
  const t = useTranslations();
  const [basketFilter, setBasketFilter] = useState(null);
  const [futsalFilter, setFutsalFilter] = useState(null);

  const basketCategories = [
    ...new Set(basketballProducts.map((p) => p.category))
  ].sort();
  const futsalCategories = [
    ...new Set(futsalProducts.map((p) => p.category))
  ].sort();

  const filteredBasketProducts = basketFilter
    ? basketballProducts.filter((p) => p.category === basketFilter)
    : basketballProducts;
  const filteredFutsalProducts = futsalFilter
    ? futsalProducts.filter((p) => p.category === futsalFilter)
    : futsalProducts;

  return (
    <main>
      <PageHeader
        title={t("pages.store.title")}
        image={"/images/headers/loja.png"}
      />
      <Section variant="pattern-dots" revealContent={false}>
        <Reveal>
        <SectionTitle title={t("common.sports.basketball")} />
        <div className={`flex flex-wrap gap-2 mb-8 ${barlow.className}`}>
          <button
            type="button"
            onClick={() => setBasketFilter(null)}
            className={` px-4 py-1.5 font-medium transition-colors ${
              basketFilter === null
                ? "bg-[#273e79] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300"
            }`}
          >
            {t("pages.store.filterAll")}
          </button>
          {basketCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setBasketFilter(cat)}
              className={`px-4 py-1.5 font-medium transition-colors ${
                basketFilter === cat
                  ? "bg-[#273e79] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        </Reveal>
        {filteredBasketProducts.length ? (
          <StaggerGroup className="flex flex-wrap gap-10 justify-center md:justify-start">
            {filteredBasketProducts.map((item, i) => (
              <ProductCard
                key={i}
                title={item.name}
                images={item.images}
                price={item.price}
                sizes={item.sizes}
              />
            ))}
          </StaggerGroup>
        ) : (
          <Reveal>
            <EmptyState
              icon="ph:t-shirt"
              title={t("pages.store.emptyTitle")}
              description={t("pages.store.emptyText")}
            />
          </Reveal>
        )}
      </Section>

      <Section containerClassName={"bg-white"} revealContent={false}>
        <Reveal>
        <SectionTitle title={t("common.sports.futsal")} />
        <div className={`flex flex-wrap gap-2 mb-8 ${barlow.className}`}>
          <button
            type="button"
            onClick={() => setFutsalFilter(null)}
            className={`px-4 py-1.5 font-medium transition-colors ${
              futsalFilter === null
                ? "bg-[#273e79] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {t("pages.store.filterAll")}
          </button>
          {futsalCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFutsalFilter(cat)}
              className={`px-4 py-1.5 font-medium transition-colors ${
                futsalFilter === cat
                  ? "bg-[#273e79] text-white"
                  : "border border-gray-300 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        </Reveal>
        {filteredFutsalProducts.length ? (
          <StaggerGroup className="flex flex-wrap gap-10 justify-center md:justify-start">
            {filteredFutsalProducts.map((item, i) => (
              <ProductCard
                key={i}
                title={item.name}
                image={item.image}
                price={item.price}
                sizes={item.sizes}
              />
            ))}
          </StaggerGroup>
        ) : (
          <Reveal>
            <EmptyState
              icon="ph:t-shirt"
              title={t("pages.store.emptyTitle")}
              description={t("pages.store.emptyText")}
            />
          </Reveal>
        )}
      </Section>
    </main>
  );
}
