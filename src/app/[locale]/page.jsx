import { setRequestLocale } from "next-intl/server";
import { getPosts } from "@/lib/notion";
import HomePage from "./HomePage";

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const blogPosts = await getPosts(locale);

  return <HomePage blogPosts={blogPosts} />;
}
