"use client";

import IconCard from "@/components/Cards/IconCard/IconCard";
import RegistrationCard from "@/components/Cards/RegistrationCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import useSportSelect from "@/hooks/useSportSelect";
import {
  SPORTS,
  nationalTournament2024,
  viiTournamentOfficial2StageLinks,
  viiTournamentPre1StageLinks
} from "@/constants";
import { useTranslations } from "next-intl";

export default function RegistrationsPage() {
  const { isBasket, updateSelectedSport } = useSportSelect();

  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.registrations.title")}
        image={
          "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      <Section variant="pattern-dots">
        <SectionTitle
          title={t("pages.registrations.activities.title")}
          className={"text-center"}
        />

        {/* Summer */}
        <RegistrationCard
          href="https://forms.gle/u8ZgfHAVZTn4fAyq9"
          imageSrc="/images/registrations/atl-verao.webp"
          title={t("pages.registrations.activities.summer.title")}
          subtitle={t("pages.registrations.activities.summer.description")}
          buttonLabel={t("common.buttons.registration")}
        />
        <SectionTitle
          title={t("pages.registrations.sports")}
          className={"text-center"}
        />
        <div className="flex flex-wrap md:justify-start justify-center gap-10">
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

          {!isBasket && (
            <>
              <RegistrationCard
                links={viiTournamentPre1StageLinks}
                imageSrc={"/images/registrations/pt.webp"}
                title={t("pages.registrations.futsal.viiTournament.title")}
                subtitle={t(
                  "pages.registrations.futsal.viiTournament.preRegistration"
                )}
                buttonLabel={t("common.buttons.registration")}
              />

              <RegistrationCard
                links={viiTournamentOfficial2StageLinks}
                imageSrc={"/images/registrations/pt.webp"}
                title={t("pages.registrations.futsal.viiTournament.title")}
                subtitle={t(
                  "pages.registrations.futsal.viiTournament.oficialRegistration"
                )}
                buttonLabel={t("common.buttons.registration")}
              />
            </>
          )}

          {isBasket && (
            <>
              <RegistrationCard
                href={nationalTournament2024.PRE}
                imageSrc="/images/registrations/cartaz-torneio-basket.webp"
                title={t(
                  "pages.registrations.basket.nationalTournament2024.title"
                )}
                subtitle={t(
                  "pages.registrations.basket.nationalTournament2024.preRegistration"
                )}
                buttonLabel={t("common.buttons.registration")}
              />

              <RegistrationCard
                href={nationalTournament2024.OFFICAL}
                imageSrc="/images/registrations/cartaz-torneio-basket.webp"
                title={t(
                  "pages.registrations.basket.nationalTournament2024.title"
                )}
                subtitle={t(
                  "pages.registrations.basket.nationalTournament2024.oficialRegistration"
                )}
                buttonLabel={t("common.buttons.registration")}
              />

              {/* Membership */}
              <RegistrationCard
                imageSrc={
                  "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                title={t("common.membership")}
                href="https://docs.google.com/forms/d/e/1FAIpQLSciyolXxZhuXbCMtGl9-31624IP1bHT3YEe-7WxjjCuNPBGGQ/viewform?usp=sf_link"
                subtitle={t("common.sports.basketball")}
              />
            </>
          )}
        </div>
      </Section>
    </main>
  );
}
