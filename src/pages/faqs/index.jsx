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
        image={"https://i.postimg.cc/59QCLf9Q/Perguntas-Frequentes.jpg"}
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
