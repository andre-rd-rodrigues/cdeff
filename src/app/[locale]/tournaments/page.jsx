import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { getTournaments } from "@/lib/content";
import TournamentsPageClient from "./TournamentsPage";

export default async function Tournaments({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tournaments = getTournaments(locale);
  return (
    <Suspense>
      <TournamentsPageClient tournaments={tournaments} />
    </Suspense>
  );
}
