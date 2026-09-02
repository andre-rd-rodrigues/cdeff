"use client";

import { useState } from "react";
import ProductCard from "@/components/Cards/ProductCard";
import EmptyState from "@/components/EmptyState";
import FilterChip from "@/components/FilterChip";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import StaggerGroup from "@/components/StaggerGroup";
import Reveal from "@/components/Reveal";
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
        <div className="flex flex-wrap gap-3 mb-8">
          <FilterChip
            label={t("pages.store.filterAll")}
            active={basketFilter === null}
            onClick={() => setBasketFilter(null)}
          />
          {basketCategories.map((cat) => (
            <FilterChip
              key={cat}
              label={cat}
              active={basketFilter === cat}
              onClick={() => setBasketFilter(cat)}
            />
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
        <div className="flex flex-wrap gap-3 mb-8">
          <FilterChip
            label={t("pages.store.filterAll")}
            active={futsalFilter === null}
            onClick={() => setFutsalFilter(null)}
          />
          {futsalCategories.map((cat) => (
            <FilterChip
              key={cat}
              label={cat}
              active={futsalFilter === cat}
              onClick={() => setFutsalFilter(cat)}
            />
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
