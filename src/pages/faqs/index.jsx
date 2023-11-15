import Faqs from "@/components/Faqs/Faqs";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import { useTranslations } from "next-intl";
import React from "react";

function FaqsPage() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.faqs.title")}
        image={
          "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <Section containerClassName={"m-auto max-w-4xl"}>
        <Faqs />
      </Section>
    </main>
  );
}

export default FaqsPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
