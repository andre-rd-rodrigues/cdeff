import PageHeader from "@/components/PageHeader/PageHeader";
import { useTranslations } from "next-intl";
import React from "react";

function FutsalPage() {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("common.sports.futsal")}
        image={
          "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </main>
  );
}

export default FutsalPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
