"use client";

import BlogCard from "@/components/Blog/BlogCard";
import EmptyState from "@/components/EmptyState";
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
      <Section variant="pattern-dots">
        <SectionTitle title={t("pages.blog.recentArticles")} />
        {posts?.length ? (
          <div className="flex flex-wrap gap-10 justify-center md:justify-start">
            {posts.map((post, i) => (
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
        ) : (
          <EmptyState
            icon="ph:newspaper-clipping"
            title={t("pages.blog.emptyTitle")}
            description={t("pages.blog.emptyText")}
          />
        )}
      </Section>
    </main>
  );
}
