import { setRequestLocale } from "next-intl/server";
import { getTournament, getTournaments } from "@/lib/content";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import TournamentDetailPage from "./TournamentDetailPage";

export function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    const tournaments = getTournaments(locale);
    for (const tournament of tournaments) {
      params.push({ locale, slug: tournament.slug });
    }
  }
  return params;
}

export default async function TournamentDetail({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const tournament = getTournament(slug, locale);
  if (!tournament) notFound();

  const { content, metadata } = tournament;
  return (
    <TournamentDetailPage
      content={content}
      metadata={metadata}
      locale={locale}
    />
  );
}
