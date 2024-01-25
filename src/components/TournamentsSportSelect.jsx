import React, { useState } from "react";
import IconCard from "./Cards/IconCard/IconCard";
import EventCard from "./Cards/EventCard";
import { getTournaments } from "@/lib/notion";
import { SPORTS } from "@/utils";
import { useTranslations } from "next-intl";

function TournamentsSportSelect({ tournaments, onSportSelect }) {
  const [selectedSport, setSelectedSport] = useState(SPORTS.FUTSAL);

  const t = useTranslations();

  const handleSportsSelect = (sportSelected) => {
    setSelectedSport(sportSelected);
    onSportSelect(sportSelected);
  };

  return (
    <>
      <div className="flex w-full m-auto justify-center gap-10 mt-7">
        <IconCard
          title={t("common.sports.basketball")}
          iconName="ph:soccer-ball"
          isSelected={selectedSport === SPORTS.BASKETBALL}
          onClick={() => handleSportsSelect(SPORTS.BASKETBALL)}
        />
        <IconCard
          title={t("common.sports.futsal")}
          iconName="ph:soccer-ball"
          isSelected={selectedSport === SPORTS.FUTSAL}
          onClick={() => handleSportsSelect(SPORTS.FUTSAL)}
        />
      </div>
      <div className="my-16">
        <div className="flex flex-wrap gap-10 justify-center">
          {tournaments && tournaments.length ? (
            tournaments?.map((tournament, i) => (
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
            ))
          ) : (
            <p>{t("pages.tournaments.noTournaments")}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default TournamentsSportSelect;
