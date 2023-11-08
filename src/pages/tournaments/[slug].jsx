import BlogPageHeader from "@/components/PageHeader/BlogPageHeader";
import { getPost, getPosts } from "@/lib/notion";
import { DATE_FORMAT } from "@/utils";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
require("dayjs/locale/pt");
require("dayjs/locale/en");

const TournamentDetailsPage = ({ post, metadata }) => {
  /*   const { date, description, id, slug, title, image } = metadata; */
  const { locale } = useRouter();

  return (
    <main>
      {/*  <BlogPageHeader
        image={metadata?.image}
        title={metadata?.title}
        date={dayjs(metadata.date).locale(locale).format(DATE_FORMAT)}
      />
      <div className="max-w-7xl m-auto py-10">
        <ReactMarkdown className="markdown">{post.parent}</ReactMarkdown>
      </div> */}
    </main>
  );
};

export default TournamentDetailsPage;

/* export const getStaticPaths = async (params) => {
  const publishedPosts = await getPosts("en");

  return {
    paths: publishedPosts.map((post) => {
      return {
        params: {
          slug: post.properties.Slug.rich_text[0].plain_text
        }
      };
    }),
    fallback: false
  };
};

export const getStaticProps = async ({ locale, params }) => {
  let { slug } = params;

  let { markdown, metadata } = await getPost(slug, locale);

  return {
    props: {
      post: markdown,
      metadata,
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
};
 */
