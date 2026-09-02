"use client";

import Faqs from "@/components/Faqs/Faqs";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import { useTranslations } from "next-intl";

export default function FaqsPage() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.faqs.title")}
        image={"/images/headers/perguntas-frequentes.jpg"}
      />
      <Section containerClassName={"m-auto max-w-4xl"} variant="pattern-dots">
        <Faqs />
      </Section>
    </main>
  );
}
