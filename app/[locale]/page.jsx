"use client";

import EventCard from "@/components/Cards/EventCard/EventCard";
import IconCard from "@/components/Cards/IconCard/IconCard";
import HeroSection from "@/components/HeroSection/HeroSection";
import TextWithImage from "@/components/TextWithImage/TextWithImage";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <EventCard />
    </main>
  );
}
