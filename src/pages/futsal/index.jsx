import Card from "@/components/Cards/Card";
import HeroSection from "@/components/Hero/HeroSection/HeroSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import RankSection from "@/components/RankSection";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import SponsorSection from "@/components/SponsorSection";
import Tabs from "@/components/Tabs/Tabs";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import {
  futsalAllSponsorsUrls,
  futsalSponsors,
  futsalTeam,
  futsalTechnicalTeam
} from "@/data/futsal";
import { useTranslations } from "next-intl";
import Image from "next/image";

function FutsalPage() {
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
          imgSrc="https://images.unsplash.com/photo-1669046238811-8e748e79b8de?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Section>

      {/* Technical team */}
      <Section>
        <SectionTitle
          className="text-center -mb-4"
          title={t("common.pages.techTeam")}
        />
        <div
          className="flex flex-wrap gap-12 justify-around mb-12"
          style={{ marginTop: "75px" }}
        >
          {futsalTechnicalTeam.map(({ role, members }, i) => (
            <div key={i} className="flex flex-col items-center">
              <SectionTitle
                title={t(`pages.futsal.teamRoles.${role}`)}
                className={"sub_section_title"}
              />
              <div className="flex flex-wrap gap-6 md:justify-normal justify-center">
                {members.map(({ name, image, position }, i) => (
                  <Card
                    className={"w-[220px] h-[300px]"}
                    key={i}
                    imageSrc={image}
                    subTitle={t(`pages.futsal.sportRoles.${position}`)}
                    title={name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Ranks */}
      <Section containerClassName={"bg-white"}>
        <SectionTitle
          className="text-center mb-1 md:-mb-1"
          title={t("common.pages.selectRank")}
          subTitle={t("common.pages.squad")}
        />
        <Tabs
          tabs={[
            {
              name: t("pages.futsal.teamRoles.Seniores"),
              content: (
                <>
                  <RankSection team={futsalTeam.seniores} />
                </>
              )
            },
            {
              name: t("pages.futsal.teamRoles.Juniores"),
              content: <RankSection team={futsalTeam.juniores} />
            },
            {
              name: t("pages.futsal.teamRoles.Juvenis"),
              content: <RankSection team={futsalTeam.juvenis} />
            },
            {
              name: t("pages.futsal.teamRoles.Iniciados"),
              content: <RankSection team={futsalTeam.iniciados} />
            },
            {
              name: t("pages.futsal.teamRoles.Infantis"),
              content: <RankSection team={futsalTeam.infantis} />
            },
            {
              name: t("pages.futsal.teamRoles.Benjamins"),
              content: (
                <div className="relative w-full h-[300px] md:h-[600px]">
                  <Image
                    alt="Benjamins"
                    fill
                    style={{ objectFit: "contain" }}
                    src={futsalTeam.benjamins.image}
                  />
                </div>
              )
            },

            {
              name: t("pages.futsal.teamRoles.Petizes e Traquinas"),
              content: <RankSection team={futsalTeam.petizes} />
            }
          ]}
        />
      </Section>

      {/* Training schedule */}
      <Section>
        <SectionTitle title={t("common.pages.schedule")} />
        <div className="relative w-full h-[300px] md:h-[600px]">
          <Image
            alt="Training schedule"
            fill
            style={{ objectFit: "contain" }}
            src="https://i.postimg.cc/GmNJkty2/Hora-rios-de-Treino-Futsal.png"
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
            style={{ objectFit: "contain" }}
            src="/images/navbar/futsal/tourigalo.png"
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

export default FutsalPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
