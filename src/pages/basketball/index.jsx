import Card from "@/components/Cards/Card";
import HeroHeader from "@/components/Hero/HeroHeader/HeroHeader";
import HeroSection from "@/components/Hero/HeroSection/HeroSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import RankSection from "@/components/RankSection";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Tabs from "@/components/Tabs/Tabs";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import {
  basketAllSponsorUrls,
  basketTeamsImages,
  basketTechnicalTeam
} from "@/data/basketball";
import { barlow } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";

function BasketballPage() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("common.sports.basketball")}
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
          imgSrc="https://i.postimg.cc/65gGMZpq/modalidades-basquetebol.jpg"
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
          {basketTechnicalTeam.map(({ role, members }, i) => (
            <div key={i} className="flex flex-col items-center">
              <SectionTitle
                title={t(`pages.basketball.teamRoles.${role}`)}
                className={"sub_section_title"}
              />
              <div className="flex flex-wrap gap-6 md:justify-normal justify-center">
                {members.map(({ name, image, position }, i) => (
                  <Card
                    className={"w-[220px] h-[300px]"}
                    key={i}
                    imageSrc={image}
                    title={name}
                    subTitle={
                      position && t(`pages.basketball.teamRoles.${position}`)
                    }
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
          className="text-center -mb-4"
          title={t("common.pages.selectRank")}
          subTitle={t("common.pages.squad")}
        />
        <Tabs
          tabs={[
            {
              name: t("pages.basketball.teamRoles.Seniores"),
              content: <RankSection team={basketTeamsImages.seniores} />
            }
          ]}
        />
      </Section>

      {/* Partnership */}
      <HeroHeader
        linkLabel={t("common.buttons.registration")}
        href="https://docs.google.com/forms/d/e/1FAIpQLSciyolXxZhuXbCMtGl9-31624IP1bHT3YEe-7WxjjCuNPBGGQ/viewform?usp=sf_link"
        imageSrc="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <h2
          className={`${barlow.className} text-4xl mb-4 uppercase tracking-wide`}
        >
          {t("pages.basketball.membership.title")}
        </h2>
        <p className="tracking-wide">
          {t("pages.basketball.membership.description")}
        </p>
      </HeroHeader>

      {/* Training schedule */}
      <Section>
        <SectionTitle title={t("common.pages.schedule")} />
        <div className="relative w-full h-[300px] md:h-[600px]">
          <Image
            alt="Training schedule"
            fill
            style={{ objectFit: "contain" }}
            src="https://i.postimg.cc/D0k7sr2g/Hora-rios-de-Treino-Formac-a-o-Basquetebol.png"
          />
        </div>
      </Section>

      {/* See results */}
      <HeroSection
        imageSrc="https://sav2.fpb.pt/uploads/equipas/EQU_475351697626024.jpg"
        linkLabel={t("common.buttons.seeMore")}
        subtitle={t("common.sports.basketball")}
        title={t("common.seeResults")}
        href="https://www.fpb.pt/equipa/equipa_47535/"
        linkProps={{ target: "_blank" }}
      />

      {/* Sponsors */}
      <Section containerClassName={"bg-white"}>
        <SectionTitle title={t("pages.sponsors.title")} />

        <div className="grid justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {basketAllSponsorUrls.map((image, i) => (
            <div className="relative w-[150px] h-[130px]" key={i}>
              <Image
                fill
                style={{ objectFit: "contain" }}
                src={image}
                alt="CDEFF Patrocinadores"
              />
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

export default BasketballPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
