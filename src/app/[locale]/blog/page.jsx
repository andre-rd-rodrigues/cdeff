import { setRequestLocale } from "next-intl/server";
import { getPosts } from "@/lib/notion";
import BlogPageClient from "./BlogPage";

export default async function Blog({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const posts = await getPosts(locale);
  return <BlogPageClient posts={posts} />;
}
