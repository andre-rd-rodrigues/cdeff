"use client";

import Faqs from "@/components/Faqs/Faqs";
import Heading from "@/components/Heading/Heading";
import SubHeading from "@/components/Heading/SubHeading";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <Faqs />
    </main>
  );
}
