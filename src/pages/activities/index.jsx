import ContactHero from "@/components/Hero/ContactHero";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import { useTranslations } from "next-intl";
import React from "react";

function ActivitiesPage() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.activities.title")}
        image={
          "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      <Section>
        <TextWithImage
          title={t("pages.activities.section_1.title")}
          description={t("pages.activities.section_1.description")}
          imgSrc="https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          labelOptions={{
            href: "/contacts",
            label: t("common.buttons.contact")
          }}
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
