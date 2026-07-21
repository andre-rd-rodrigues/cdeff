"use client";

import ContactHero from "@/components/Hero/ContactHero";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import useTranslationArray from "@/hooks/useTranslationsArray";
import { TEL_LINK } from "@/constants";
import { useTranslations } from "next-intl";

export default function ActivitiesPage() {
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
        image={"https://i.postimg.cc/yYjyyn3C/Atividades.jpg"}
      />

      {/* ATL */}
      <span id="atl"></span>
      <Section variant="pattern-dots">
        <TextWithImage
          title={t("pages.activities.section_1.title")}
          description={t("pages.activities.section_1.description")}
          imageSrc="https://i.postimg.cc/0Nfj1KPp/ATL.jpg"
          labelOptions={{
            href: TEL_LINK,
            label: t("common.buttons.contact")
          }}
        />
      </Section>

      {/* Organização de Aniversários */}
      <Section containerClassName="bg-white">
        <TextWithImage
          title={t("pages.activities.section_2.title")}
          description={t("pages.activities.section_2.description")}
          imageSrc="https://i.postimg.cc/4nks9XXf/Organizac-a-o-de-Aniversa-rios.jpg"
          labelOptions={{
            href: TEL_LINK,
            label: t("common.buttons.contact")
          }}
          imageRight
        />
      </Section>

      {/* Orientação */}
      <Section variant="pattern-dots">
        <TextWithImage
          title={t("pages.activities.section_3.title")}
          description={t("pages.activities.section_3.description")}
          imageSrc="https://i.postimg.cc/024pWKh7/Orientac-a-o.jpg"
          labelOptions={{
            href: TEL_LINK,
            label: t("common.buttons.contact")
          }}
        />
      </Section>

      {/* Muay Thai */}
      <Section containerClassName="bg-white">
        <TextWithImage
          title={t("pages.activities.section_4.title")}
          description={t("pages.activities.section_4.description")}
          location={t("pages.activities.section_4.location")}
          schedule={section_4_schedule_array}
          contact={t("pages.activities.section_4.contact")}
          imageSrc="https://i.postimg.cc/zDPj1VfZ/Muay-Thai.jpg"
          labelOptions={{
            href: "tel:+351 966372155",
            label: t("common.buttons.contact")
          }}
          imageRight
        />
      </Section>

      {/* Zumba */}
      <Section variant="pattern-dots">
        <TextWithImage
          title={t("pages.activities.section_5.title")}
          description={t("pages.activities.section_5.description")}
          location={t("pages.activities.section_5.location")}
          schedule={section_5_schedule_array}
          contact={t("pages.activities.section_5.contact")}
          imageSrc="https://i.postimg.cc/1tVpmKtk/Zumba.jpg"
          labelOptions={{
            href: "tel:+351 966410578",
            label: t("common.buttons.contact")
          }}
        />
      </Section>

      {/* Ginastica */}
      <Section containerClassName="bg-white">
        <TextWithImage
          title={t("pages.activities.section_6.title")}
          description={t("pages.activities.section_6.description")}
          location={t("pages.activities.section_6.location")}
          schedule={section_6_schedule_array}
          contact={t("pages.activities.section_6.contact")}
          imageSrc="https://i.postimg.cc/Y01YgqQ8/Gina-stica.jpg"
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
