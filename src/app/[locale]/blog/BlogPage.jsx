"use client";

import BlogCard from "@/components/Blog/BlogCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
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
                title: post.title,
                description: post.description,
                date: post.date,
                image: post.image,
                slug: post.slug
              }}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
