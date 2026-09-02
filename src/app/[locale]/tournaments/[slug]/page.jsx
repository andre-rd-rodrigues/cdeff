import { setRequestLocale } from "next-intl/server";
import { getTournament, getTournaments } from "@/lib/content";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { SITE_URL, defaultOgImage } from "@/lib/metadata";
import TournamentDetailPage from "./TournamentDetailPage";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const tournament = getTournament(slug, locale);
  if (!tournament) return {};

  const { title, description, image } = tournament.metadata;
  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      url: `${SITE_URL}/${locale}/tournaments/${slug}`,
      locale,
      images: [{ url: image || defaultOgImage(locale), alt: title }]
    }
  };
}

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
