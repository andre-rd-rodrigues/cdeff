import Card from "@/components/Cards/Card";
import EventCard from "@/components/Cards/EventCard";
import IconCard from "@/components/Cards/IconCard/IconCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { getTournaments } from "@/lib/notion";
import { SPORTS } from "@/utils";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

function TournamentsPage({ tournaments }) {
  const [selectedSport, setSelectedSport] = useState(SPORTS.BASKETBALL);

  const t = useTranslations();

  const renderTournaments = tournaments?.filter(
    (tournament) =>
      tournament.properties?.Modalidade.select.name === selectedSport
  );
  console.log(tournaments);

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
        <div className="my-16">
          <div className="flex flex-wrap gap-10 justify-center">
            {renderTournaments?.map((tournament, i) => (
              <EventCard
                key={i}
                href={`tournaments/${tournament.properties.Slug.rich_text[0].plain_text}`}
                event={{
                  title: tournament.properties.Titulo.title[0].plain_text,
                  description:
                    tournament.properties?.Descrição?.rich_text[0]?.plain_text,
                  dateStart: tournament.properties?.Data?.date?.start,
                  dateEnd: tournament.properties?.Data?.date?.end,
                  image:
                    tournament.cover?.external?.url ||
                    tournament.cover?.file?.url,
                  location:
                    tournament.properties?.Local.rich_text[0]?.plain_text
                }}
              />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}

export default TournamentsPage;

export async function getStaticProps({ locale }) {
  const tournaments = await getTournaments(locale);

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
      tournaments
    }
  };
}
