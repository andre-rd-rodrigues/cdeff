"use client";

import BlogCard from "@/components/Blog/BlogCard";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import StaggerGroup from "@/components/StaggerGroup";
import Reveal from "@/components/Reveal";
import { useTranslations } from "next-intl";

export default function BlogPage({ posts }) {
  const t = useTranslations();

  return (
    <main>
      <PageHeader
        title={t("pages.blog.title")}
        image={"/images/headers/blog.jpg"}
      />
      <Section variant="pattern-dots" revealContent={false}>
        <Reveal>
          <SectionTitle title={t("pages.blog.recentArticles")} />
        </Reveal>
        {posts?.length ? (
          <StaggerGroup
            className="flex flex-wrap gap-10 justify-center md:justify-start"
            itemClassName="w-full md:max-w-sm"
          >
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
          </StaggerGroup>
        ) : (
          <Reveal>
            <EmptyState
              icon="ph:newspaper-clipping"
              title={t("pages.blog.emptyTitle")}
              description={t("pages.blog.emptyText")}
            />
          </Reveal>
        )}
      </Section>
    </main>
  );
}
