import { setRequestLocale } from "next-intl/server";
import { getTournament, getTournaments } from "@/lib/notion";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import TournamentDetailPage from "./TournamentDetailPage";

export async function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    const tournaments = await getTournaments(locale);
    for (const tournament of tournaments) {
      params.push({
        locale,
        slug: tournament.properties.Slug.rich_text[0].plain_text
      });
    }
  }
  return params;
}

export default async function TournamentDetail({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const tournament = await getTournament(slug, locale);
  if (!tournament) notFound();

  const { markdown, metadata } = tournament;
  return <TournamentDetailPage tournament={markdown} metadata={metadata} />;
}
