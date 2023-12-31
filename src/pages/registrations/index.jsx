import RegistrationCard from "@/components/Cards/RegistrationCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import {
  viiTournamentOfficial2StageLinks,
  viiTournamentPre1StageLinks
} from "@/utils";
import { useTranslations } from "next-intl";

function RegistrationPage() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.registrations.title")}
        image={
          "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <Section>
        <div className="flex flex-wrap md:justify-start justify-center gap-10">
          {/* Pré-inscrição - 1ª fase */}
          <RegistrationCard
            links={viiTournamentPre1StageLinks}
            imageSrc={"https://i.postimg.cc/KzBPZ6xQ/PT.jpg"}
            title={t("pages.registrations.futsal.viiTournament.title")}
            subTitle={t(
              "pages.registrations.futsal.viiTournament.preRegistration"
            )}
            buttonLabel={t("common.buttons.registration")}
          />

          {/* Inscrição oficial - 2ª fase */}
          <RegistrationCard
            links={viiTournamentOfficial2StageLinks}
            imageSrc={"https://i.postimg.cc/KzBPZ6xQ/PT.jpg"}
            title={t("pages.registrations.futsal.viiTournament.title")}
            subTitle={t(
              "pages.registrations.futsal.viiTournament.oficialRegistration"
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
            subTitle={t("common.sports.basketball")}
          />
        </div>
      </Section>
    </main>
  );
}

export default RegistrationPage;
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
