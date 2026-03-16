import { setRequestLocale } from "next-intl/server";
import { getPost, getPosts } from "@/lib/content";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import BlogPostPage from "./BlogPostPage";

export function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    const posts = getPosts(locale);
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export default async function BlogPost({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPost(slug, locale);
  if (!post) notFound();

  const { content, metadata } = post;
  return <BlogPostPage content={content} metadata={metadata} locale={locale} />;
}
