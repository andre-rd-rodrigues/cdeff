import AppHead from "@/components/AppHead";
import BlogPageHeader from "@/components/PageHeader/BlogPageHeader";
import { getPost, getPosts } from "@/lib/notion";
import { DATE_FORMAT } from "@/constants";
import dayjs from "dayjs";

import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
require("dayjs/locale/pt");
require("dayjs/locale/en");

const BlogPost = ({ post, metadata }) => {
  /*   const { date, description, id, slug, title, image } = metadata; */
  const { locale } = useRouter();

  return (
    <>
      <AppHead
        title={metadata?.title}
        description={metadata?.description}
        canonical={`https://www.cdeff.com/blog/${metadata?.slug}`}
        openGraph={{
          url: `https://www.cdeff.com/blog/${metadata?.slug}`,
          title: metadata?.title,
          description: metadata?.description,
          datePublished: metadata?.created_date,
          authorName: "Ema Carolina",
          locale,
          images: [
            {
              url: metadata?.image,
              alt: `${metadata?.title} post`
            }
          ]
        }}
      />
      <main>
        <BlogPageHeader
          image={metadata?.image}
          title={metadata?.title}
          date={dayjs(metadata?.date).locale(locale).format(DATE_FORMAT)}
        />
        <div className="max-w-7xl m-auto py-10">
          <ReactMarkdown className="markdown">{post.parent}</ReactMarkdown>
        </div>
      </main>
    </>
  );
};

export default BlogPost;

export const getStaticPaths = async ({ locales }) => {
  const publishedPosts = await Promise.all(locales.map(getPosts));

  return {
    paths: publishedPosts.flat().flatMap((post) => {
      return locales.map(() => ({
        params: {
          slug: post.properties.Slug.rich_text[0].plain_text
        },
        locale: post.properties.Language.select.name
      }));
    }),
    fallback: false
  };
};

export const getStaticProps = async ({ locale, params }) => {
  let { slug } = params;

  let post = await getPost(slug, locale);

  if (!post) {
    return {
      notFound: true
    };
  }

  let { markdown, metadata } = post;

  return {
    props: {
      post: markdown,
      metadata,
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
};
