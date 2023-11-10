import BlogPageHeader from "@/components/PageHeader/BlogPageHeader";
import { getPost, getPosts, getTournament, getTournaments } from "@/lib/notion";
import { DATE_FORMAT } from "@/utils";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
require("dayjs/locale/pt");
require("dayjs/locale/en");

const TournamentDetailsPage = ({ tournament, metadata }) => {
  /*   const { date, description, id, slug, title, image } = metadata; */
  const { locale } = useRouter();

  return (
    <main>
      <BlogPageHeader
        image={metadata?.image}
        title={metadata?.title}
        date={dayjs(metadata.date).locale(locale).format(DATE_FORMAT)}
      />
      <div className="max-w-7xl m-auto py-10">
        <ReactMarkdown className="markdown">{tournament.parent}</ReactMarkdown>
      </div>
    </main>
  );
};

export default TournamentDetailsPage;

export const getStaticPaths = async ({ locales }) => {
  const publishedTournaments = await Promise.all(locales.map(getTournaments));

  return {
    paths: publishedTournaments.flat().flatMap((tournament) => {
      return locales.map(() => ({
        params: {
          slug: tournament.properties.Slug.rich_text[0].plain_text
        },
        locale: tournament.properties.Idioma.select.name
      }));
    }),
    fallback: false
  };
};

export const getStaticProps = async ({ locale, params }) => {
  let { slug } = params;

  let tournament = await getTournament(slug, locale);

  if (!tournament) {
    return {
      notFound: true
    };
  }

  let { markdown, metadata } = tournament;

  return {
    props: {
      tournament: markdown,
      metadata,
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
};
