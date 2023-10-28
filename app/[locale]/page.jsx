"use client";

import Faqs from "@/components/Faqs/Faqs";
import Heading from "@/components/Heading/Heading";
import SubHeading from "@/components/Heading/SubHeading";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useTranslations } from "next-intl";

export default function Home({ params: { locale } }) {
  const t = useTranslations();

  return (
    <main>
      <Faqs locale={locale} />
    </main>
  );
}
