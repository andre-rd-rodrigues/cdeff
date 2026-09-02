"use client";

import TeamMemberCard from "@/components/Cards/TeamMemberCard";
import HeroSection from "@/components/Hero/HeroSection/HeroSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import RankSection from "@/components/RankSection";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import StaggerGroup from "@/components/StaggerGroup";
import Reveal from "@/components/Reveal";
import SponsorSection from "@/components/SponsorSection";
import Tabs from "@/components/Tabs/Tabs";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import {
  futsalSponsors,
  futsalTeam,
  futsalTechnicalTeam
} from "@/data/futsal";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FutsalPage() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("common.sports.futsal")}
        image={
          "https://images.unsplash.com/photo-1549764206-048e4d403417?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      {/* Welcome section */}
      <Section containerClassName={"bg-white"}>
        <TextWithImage
          title={t("pages.futsal.welcome.title")}
          subtitle={t("pages.futsal.welcome.subtitle")}
          description={t("pages.futsal.welcome.description")}
          imageSrc="https://images.unsplash.com/photo-1669046238811-8e748e79b8de?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Section>

      {/* Technical team */}
      <Section variant="pattern-dots" revealContent={false}>
        <Reveal>
          <SectionTitle
            className="text-center -mb-4"
            title={t("common.pages.techTeam")}
          />
        </Reveal>
        <StaggerGroup
          className="flex flex-wrap gap-12 justify-around mb-12"
          style={{ marginTop: "var(--spacing-section-gap)" }}
        >
          {futsalTechnicalTeam.map(({ role, members }, i) => (
            <div key={i} className="flex flex-col items-center">
              <SectionTitle
                title={t(`pages.futsal.teamRoles.${role}`)}
                isSubSectionTitle
              />
              <div className="flex flex-wrap gap-6 md:justify-normal justify-center">
                {members.map(({ name, image, position }, i) => (
                  <TeamMemberCard
                    className={"w-[220px] h-[300px]"}
                    key={i}
                    imageSrc={image}
                    role={t(`pages.futsal.sportRoles.${position}`)}
                    name={name}
                  />
                ))}
              </div>
            </div>
          ))}
        </StaggerGroup>
      </Section>

      {/* Ranks */}
      <Section containerClassName={"bg-white"}>
        <SectionTitle
          className="text-center mb-1 md:-mb-1"
          title={t("common.pages.selectRank")}
          subtitle={t("common.pages.squad")}
        />
        <Tabs
          tabs={[
            {
              name: "pages.futsal.teamRoles.Seniores",
              content: (
                <>
                  <RankSection team={futsalTeam.seniores} />
                </>
              )
            },
            {
              name: "pages.futsal.teamRoles.Juniores",
              content: <RankSection team={futsalTeam.juniores} />
            },
            {
              name: "pages.futsal.teamRoles.Juvenis",
              content: <RankSection team={futsalTeam.juvenis} />
            },
            {
              name: "pages.futsal.teamRoles.Iniciados",
              content: <RankSection team={futsalTeam.iniciados} />
            },
            {
              name: "pages.futsal.teamRoles.Infantis",
              content: <RankSection team={futsalTeam.infantis} />
            },
            {
              name: "pages.futsal.teamRoles.Benjamins",
              content: (
                <div className="relative w-full h-[300px] md:h-[600px]">
                  <Image
                    alt="Benjamins"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                    src={futsalTeam.benjamins.image}
                  />
                </div>
              )
            },

            {
              name: "pages.futsal.teamRoles.Petizes e Traquinas",
              content: <RankSection team={futsalTeam.petizes} />
            }
          ]}
        />
      </Section>

      {/* Training schedule */}
      <Section variant="pattern-dots">
        <SectionTitle title={t("common.pages.schedule")} />
        <div className="relative w-full h-[300px] md:h-[600px]">
          <Image
            alt="Training schedule"
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
            src="/images/futsal/horarios-treino.webp"
          />
        </div>
      </Section>

      {/* See results */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1553627220-92f0446b6a5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        linkLabel={t("common.buttons.seeMore")}
        subtitle={t("common.sports.futsal")}
        title={t("common.seeResults")}
        href="https://resultados.fpf.pt/Competition/GetCompetitionsByAssociation?associationId=225&seasonId=103"
        linkProps={{ target: "_blank" }}
      />

      {/* Sponsors */}
      <Section containerClassName={"bg-white"}>
        {/* Main */}
        <SectionTitle title={t("pages.sponsors.mainSponsors")} />
        <div className="relative w-[150px] h-[130px]">
          <Image
            fill
            sizes="150px"
            style={{ objectFit: "contain" }}
            src="/images/navbar/futsal/tourigalo.webp"
            alt="Tourigalo"
            className="ml-4"
          />
        </div>

        {/* Premium */}
        <SectionTitle title={t("pages.sponsors.premium")} />
        <SponsorSection hideTitle images={futsalSponsors.premium} />

        {/* Normal */}
        <SectionTitle title={t("pages.sponsors.sponsors")} />
        <SponsorSection hideTitle images={futsalSponsors.normal} />

        {/* Collaborators */}
        <SectionTitle title={t("pages.sponsors.collaborations")} />
        <SponsorSection hideTitle images={futsalSponsors.collaborators} />
      </Section>
    </main>
  );
}
