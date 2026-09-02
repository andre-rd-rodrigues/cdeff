import { setRequestLocale } from "next-intl/server";
import { getPost, getPosts } from "@/lib/content";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { SITE_URL, defaultOgImage } from "@/lib/metadata";
import BlogPostPage from "./BlogPostPage";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) return {};

  const { title, description, image } = post.metadata;
  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      url: `${SITE_URL}/${locale}/blog/${slug}`,
      locale,
      images: [{ url: image || defaultOgImage(locale), alt: title }]
    }
  };
}

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
