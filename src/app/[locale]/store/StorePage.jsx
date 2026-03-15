"use client";

import { useState } from "react";
import ProductCard from "@/components/Cards/ProductCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { barlow } from "@/styles/fonts";
import { basketballProducts } from "@/data/basketball";
import { futsalProducts } from "@/data/futsal";
import { useTranslations } from "next-intl";

export default function StorePage() {
  const t = useTranslations();
  const [basketFilter, setBasketFilter] = useState(null);
  const [futsalFilter, setFutsalFilter] = useState(null);

  const basketCategories = [...new Set(basketballProducts.map((p) => p.category))].sort();
  const futsalCategories = [...new Set(futsalProducts.map((p) => p.category))].sort();

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
        image={"https://i.postimg.cc/MpqMCR71/Loja.png"}
      />
      <Section>
        <SectionTitle title={t("common.sports.basketball")} />
        <div className={`flex flex-wrap gap-2 mb-8 ${barlow.className}`}>
          <button
            type="button"
            onClick={() => setBasketFilter(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              basketFilter === null
                ? "bg-[#273e79] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {t("pages.store.filterAll")}
          </button>
          {basketCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setBasketFilter(cat)}
              className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                basketFilter === cat
                  ? "bg-[#273e79] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
          {filteredBasketProducts.map((item, i) => (
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
        <div className={`flex flex-wrap gap-2 mb-8 ${barlow.className}`}>
          <button
            type="button"
            onClick={() => setFutsalFilter(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
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
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                futsalFilter === cat
                  ? "bg-[#273e79] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
          {filteredFutsalProducts.map((item, i) => (
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
