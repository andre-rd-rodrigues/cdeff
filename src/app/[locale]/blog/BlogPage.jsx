"use client";

import BlogCard from "@/components/Blog/BlogCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { getNotionImagePathname } from "@/lib/notion";
import { useTranslations } from "next-intl";

export default function BlogPage({ posts }) {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.blog.title")}
        image={"https://i.postimg.cc/D0B4LjjC/blog.jpg"}
      />
      <Section>
        <SectionTitle title={t("pages.blog.recentArticles")} />
        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
          {posts?.map((post, i) => (
            <BlogCard
              key={i}
              article={{
                title: post.properties.Name.title[0].plain_text,
                description:
                  post.properties?.Description.rich_text[0]?.plain_text,
                date: post.created_time,
                image: getNotionImagePathname(post),
                slug: post.properties.Slug.rich_text[0].plain_text
              }}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
