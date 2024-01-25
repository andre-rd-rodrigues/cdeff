import Card from "@/components/Cards/Card";
import EventCard from "@/components/Cards/EventCard";
import IconCard from "@/components/Cards/IconCard/IconCard";
import Carousel from "@/components/Carousel/Carousel";

import CarouselFeedback from "@/components/Carousel/CarouselFeedback";
import FeedbackCard from "@/components/FeedbackCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import TournamentsSportSelect from "@/components/TournamentsSportSelect";
import { futsalFeedback } from "@/data/futsal";
import { getTournament, getTournaments } from "@/lib/notion";
import { REVALIDATE_TIME, SPORTS } from "@/utils";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

function TournamentsPage({ tournaments }) {
  const [selectedSport, setSelectedSport] = useState(SPORTS.FUTSAL);

  const t = useTranslations();

  const selectedSportTournaments = tournaments?.filter(
    (tournament) =>
      tournament.properties?.Modalidade.select.name === selectedSport
  );

  return (
    <main>
      <PageHeader
        title={t("pages.tournaments.title")}
        image={"https://i.postimg.cc/jSJCSSb3/torneios.jpg"}
      />
      <Section containerClassName={"-mt-7"}>
        <SectionTitle
          subTitle={t("pages.tournaments.selectSport")}
          className={"text-center"}
        />
        <TournamentsSportSelect
          tournaments={selectedSportTournaments}
          onSportSelect={(sportSelected) => setSelectedSport(sportSelected)}
        />

        {selectedSport === SPORTS.FUTSAL && (
          <Section>
            <SectionTitle title={t("pages.tournaments.feedback.title")} />
            <Carousel isSpaced autoPlay darkArrows>
              {futsalFeedback.map(({ author, image, feedback }, i) => (
                <FeedbackCard
                  author={author}
                  feedback={feedback}
                  image={image}
                  key={i}
                  className="keen-slider__slide"
                />
              ))}
            </Carousel>
          </Section>
        )}
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
    },
    revalidate: REVALIDATE_TIME
  };
}
