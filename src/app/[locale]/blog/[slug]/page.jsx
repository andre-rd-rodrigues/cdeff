import { setRequestLocale } from "next-intl/server";
import { getPost, getPosts } from "@/lib/notion";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import BlogPostPage from "./BlogPostPage";

export async function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    const posts = await getPosts(locale);
    for (const post of posts) {
      params.push({
        locale,
        slug: post.properties.Slug.rich_text[0].plain_text
      });
    }
  }
  return params;
}

export default async function BlogPost({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = await getPost(slug, locale);
  if (!post) notFound();

  const { markdown, metadata } = post;
  return <BlogPostPage post={markdown} metadata={metadata} />;
}
