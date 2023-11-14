import RegistrationCard from "@/components/Cards/RegistrationCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import { viiTournamentPreLinks } from "@/utils";
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
          <RegistrationCard
            links={viiTournamentPreLinks}
            imageSrc={"https://i.postimg.cc/KzBPZ6xQ/PT.jpg"}
            title={t("pages.registrations.tournament")}
            buttonLabel={t("common.buttons.registration")}
          />

          <RegistrationCard
            imageSrc={
              "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={t("common.membership")}
            href={"#"}
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
