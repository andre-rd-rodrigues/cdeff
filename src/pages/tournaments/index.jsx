import Card from "@/components/Cards/Card";
import IconCard from "@/components/Cards/IconCard/IconCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const SPORTS = {
  BASKETBALL: "basketball",
  FUTSAL: "futsal"
};
function TournamentsPage() {
  const [selectedSport, setSelectedSport] = useState(SPORTS.BASKETBALL);

  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.tournaments.title")}
        image={
          "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <Section containerClassName={"-mt-7"}>
        <SectionTitle
          subTitle={t("pages.tournaments.selectSport")}
          className={"text-center"}
        />
        <div className="flex w-full m-auto justify-center gap-10 mt-7">
          <IconCard
            title={t("common.sports.basketball")}
            iconName="ph:soccer-ball"
            isSelected={selectedSport === SPORTS.BASKETBALL}
            onClick={() => setSelectedSport(SPORTS.BASKETBALL)}
          />
          <IconCard
            title={t("common.sports.futsal")}
            iconName="ph:soccer-ball"
            isSelected={selectedSport === SPORTS.FUTSAL}
            onClick={() => setSelectedSport(SPORTS.FUTSAL)}
          />
        </div>
      </Section>
    </main>
  );
}

export default TournamentsPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
