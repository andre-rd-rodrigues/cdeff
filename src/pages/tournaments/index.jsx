import EventCard from "@/components/Cards/EventCard";
import IconCard from "@/components/Cards/IconCard/IconCard";
import Carousel from "@/components/Carousel/Carousel";

import FeedbackCard from "@/components/FeedbackCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { futsalFeedback } from "@/data/futsal";
import useSportSelect from "@/hooks/useSportSelect";
import { getTournaments } from "@/lib/notion";
import { REVALIDATE_TIME, SPORTS } from "@/utils";
import { useTranslations } from "next-intl";

function TournamentsPage({ tournaments }) {
  const { isBasket, updateSelectedSport } = useSportSelect();

  const t = useTranslations();

  const selectedSportTournaments = tournaments?.filter((tournament) =>
    tournament.properties?.Modalidade.select.name === isBasket
      ? SPORTS.BASKETBALL
      : SPORTS.FUTSAL
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
        {/* Sport select */}
        <div className="flex w-full m-auto justify-center gap-10 mt-7">
          <IconCard
            title={t("common.sports.basketball")}
            iconName="ph:soccer-ball"
            isSelected={isBasket}
            onClick={() => updateSelectedSport(SPORTS.BASKETBALL)}
          />
          <IconCard
            title={t("common.sports.futsal")}
            iconName="ph:soccer-ball"
            isSelected={!isBasket}
            onClick={() => updateSelectedSport(SPORTS.FUTSAL)}
          />
        </div>
        <div className="my-16">
          <div className="flex flex-wrap gap-10 justify-center">
            {selectedSportTournaments && selectedSportTournaments.length ? (
              selectedSportTournaments?.map((tournament, i) => (
                <EventCard
                  key={i}
                  href={`tournaments/${tournament.properties.Slug.rich_text[0].plain_text}`}
                  event={{
                    title: tournament.properties.Titulo.title[0].plain_text,
                    description:
                      tournament.properties?.Descrição?.rich_text[0]
                        ?.plain_text,
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

        {!isBasket && (
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
