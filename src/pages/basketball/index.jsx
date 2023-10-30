import RankCard from "@/components/Cards/RankCode/RankCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import { getPosts } from "@/lib/notion";
import { getTranslations } from "@/utils";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

function BasketballPage({ params: { locale } }) {
  const [selectedRankIndex, setSelectedRankIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const t = useTranslations();

  const translations = getTranslations(locale);

  const ranksList = translations.pages.basketball.ranks.ranksList;

  const handleRankSelect = (rank) => {
    console.log(rank);
  };

  return (
    <main>
      <PageHeader
        title={t("pages.basketball.title")}
        image={
          "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      {/* Welcome section */}
      <Section containerClassName={"bg-white"}>
        <TextWithImage
          title={t("pages.basketball.welcome.title")}
          subtitle={t("pages.basketball.welcome.subtitle")}
          description={t("pages.basketball.welcome.description")}
          imgSrc="https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Section>

      <Section>
        <SectionTitle
          className="text-center"
          title={t("pages.basketball.ranks.title")}
          subTitle={t("pages.basketball.ranks.subtitle")}
        />

        {/* Rank select */}
        <div className="flex flex-wrap gap-6 justify-center">
          {ranksList.map((rank, i) => (
            <RankCard
              rank={rank}
              isSelected={selectedRankIndex === i}
              key={i}
              onSelect={() => setSelectedRankIndex(i)}
            />
          ))}
        </div>

        {/* Rank details page */}
      </Section>
    </main>
  );
}

export default BasketballPage;
