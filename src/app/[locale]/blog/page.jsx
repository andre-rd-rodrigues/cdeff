import { setRequestLocale } from "next-intl/server";
import { getPosts } from "@/lib/content";
import BlogPageClient from "./BlogPage";

export default async function Blog({ params, searchParams }) {
  const { locale } = await params;
  const { category } = (await searchParams) || {};
  setRequestLocale(locale);
  const posts = getPosts(locale);
  return <BlogPageClient posts={posts} initialCategory={category} />;
}
