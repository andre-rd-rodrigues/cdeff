import Button from "@/components/Button/Button";
import HeroHeader from "@/components/Hero/HeroHeader/HeroHeader";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import SponsorSection from "@/components/SponsorSection";
import { basketSponsors } from "@/data/basketball";
import { futsalSponsors } from "@/data/futsal";
import { barlow } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Sponsors() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.sponsors.title")}
        image="https://i.postimg.cc/T1b56JNJ/Patrocinadores.png"
      />

      {/* Main */}
      <Section>
        <SectionTitle title={t("pages.sponsors.mainSponsors")} />
        <div className="flex">
          <SponsorSection
            images={["/images/navbar/basket/hospital.png"]}
            basket
          />
          <SponsorSection images={["/images/navbar/futsal/tourigalo.png"]} />
        </div>
      </Section>

      {/* Premium */}
      <Section containerClassName={"bg-white"}>
        <SectionTitle title={t("pages.sponsors.premium")} />
        <SponsorSection basket images={basketSponsors.premium} />
        <SponsorSection images={futsalSponsors.premium} />
      </Section>

      {/* Hero section */}
      <HeroHeader
        linkLabel={t("common.buttons.contacts")}
        href="/contacts"
        imageSrc="https://i.postimg.cc/wThR4Fm6/Quer-apoiar-o-nosso-Clube-Torne-se-um-patrocinador.png"
      >
        <h1 className={`${barlow.className} uppercase tracking-wide`}>
          {t("pages.sponsors.hero.title")}
        </h1>
        <p className="tracking-wide">{t("pages.sponsors.hero.description")}</p>
        <a href={"/assets/CDEFF.pdf"} download className="mx-3">
          <Button
            variant
            label="Download"
            className={"text-white border-white"}
          />
        </a>
      </HeroHeader>

      {/* Normal */}
      <Section containerClassName={"bg-white"}>
        <SectionTitle title={t("pages.sponsors.sponsors")} />
        <SponsorSection basket images={basketSponsors.normal} />
        <SponsorSection images={futsalSponsors.normal} />
      </Section>

      {/* Collaborators */}
      <Section containerClassName={"bg-white"}>
        <SectionTitle title={t("pages.sponsors.collaborations")} />
        <SponsorSection basket images={basketSponsors.collaborators} />
        <SponsorSection images={futsalSponsors.collaborators} />
      </Section>
    </main>
  );
}

export default Sponsors;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default
    }
  };
}
