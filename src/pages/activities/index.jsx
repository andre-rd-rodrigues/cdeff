import ContactHero from "@/components/Hero/ContactHero";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import useTranslationArray from "@/hooks/useTranslationsArray";
import { TEL_LINK, getTranslations } from "@/utils";
import { useTranslations } from "next-intl";
import React from "react";

function ActivitiesPage() {
  const t = useTranslations();
  const section_4_schedule_array = useTranslationArray(
    "pages.activities.section_4.schedule"
  );
  const section_5_schedule_array = useTranslationArray(
    "pages.activities.section_5.schedule"
  );
  const section_6_schedule_array = useTranslationArray(
    "pages.activities.section_6.schedule"
  );

  return (
    <main>
      <PageHeader
        title={t("pages.activities.title")}
        image={
          "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      {/* ATL */}
      <Section>
        <TextWithImage
          title={t("pages.activities.section_1.title")}
          description={t("pages.activities.section_1.description")}
          imgSrc="https://i.postimg.cc/0Nfj1KPp/ATL.jpg"
          labelOptions={{
            href: TEL_LINK,
            label: t("common.buttons.contact")
          }}
        />
      </Section>

      {/* Organização de Aniversários */}
      <Section>
        <TextWithImage
          title={t("pages.activities.section_2.title")}
          description={t("pages.activities.section_2.description")}
          imgSrc="https://i.postimg.cc/4nks9XXf/Organizac-a-o-de-Aniversa-rios.jpg"
          labelOptions={{
            href: TEL_LINK,
            label: t("common.buttons.contact")
          }}
          imageRight
        />
      </Section>

      {/* Orientação */}
      <Section>
        <TextWithImage
          title={t("pages.activities.section_3.title")}
          description={t("pages.activities.section_3.description")}
          imgSrc="https://i.postimg.cc/024pWKh7/Orientac-a-o.jpg"
          labelOptions={{
            href: TEL_LINK,
            label: t("common.buttons.contact")
          }}
        />
      </Section>

      {/* Muay Thai */}
      <Section>
        <TextWithImage
          title={t("pages.activities.section_4.title")}
          description={t("pages.activities.section_4.description")}
          location={t("pages.activities.section_4.location")}
          schedule={section_4_schedule_array}
          contact={t("pages.activities.section_4.contact")}
          imgSrc="https://i.postimg.cc/zDPj1VfZ/Muay-Thai.jpg"
          labelOptions={{
            href: "tel:+351 966372155",
            label: t("common.buttons.contact")
          }}
          imageRight
        />
      </Section>

      {/* Zumba */}
      <Section>
        <TextWithImage
          title={t("pages.activities.section_5.title")}
          description={t("pages.activities.section_5.description")}
          location={t("pages.activities.section_5.location")}
          schedule={section_5_schedule_array}
          contact={t("pages.activities.section_5.contact")}
          imgSrc="https://i.postimg.cc/1tVpmKtk/Zumba.jpg"
          labelOptions={{
            href: "tel:+351 966410578",
            label: t("common.buttons.contact")
          }}
        />
      </Section>

      {/* Ginastica */}
      <Section>
        <TextWithImage
          title={t("pages.activities.section_6.title")}
          description={t("pages.activities.section_6.description")}
          location={t("pages.activities.section_6.location")}
          schedule={section_6_schedule_array}
          contact={t("pages.activities.section_6.contact")}
          imgSrc="https://i.postimg.cc/Y01YgqQ8/Gina-stica.jpg"
          labelOptions={{
            href: "tel:+351 966573753",
            label: t("common.buttons.contact")
          }}
          imageRight
        />
      </Section>

      {/* Contacts hero */}
      <ContactHero />
    </main>
  );
}

export default ActivitiesPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
