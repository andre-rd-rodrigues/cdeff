"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/Blog/BlogCard";
import BlogFilters from "@/components/Blog/BlogFilters";
import EmptyState from "@/components/EmptyState";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import StaggerGroup from "@/components/StaggerGroup";
import Reveal from "@/components/Reveal";
import { useTranslations } from "next-intl";

const CATEGORY_KEYS = ["all", "basketball", "futsal", "health", "club"];

const normalize = (value) =>
  (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function BlogPage({ posts, initialCategory }) {
  const t = useTranslations();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(
    CATEGORY_KEYS.includes(initialCategory) ? initialCategory : "all"
  );

  const filteredPosts = useMemo(() => {
    const query = normalize(search).trim();
    return (posts || []).filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;
      const matchesSearch =
        !query ||
        normalize(post.title).includes(query) ||
        normalize(post.description).includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [posts, search, activeCategory]);

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
          <>
            <Reveal>
              <BlogFilters
                search={search}
                onSearchChange={setSearch}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </Reveal>
            {filteredPosts.length ? (
              <StaggerGroup
                className="flex flex-wrap gap-10 justify-center md:justify-start"
                itemClassName="w-full md:max-w-sm"
              >
                {filteredPosts.map((post, i) => (
                  <BlogCard
                    key={post.slug || i}
                    article={{
                      title: post.title,
                      description: post.description,
                      date: post.date,
                      image: post.image,
                      slug: post.slug,
                      category: post.category
                    }}
                  />
                ))}
              </StaggerGroup>
            ) : (
              <Reveal>
                <EmptyState
                  icon="ph:magnifying-glass"
                  title={t("pages.blog.noResults")}
                />
              </Reveal>
            )}
          </>
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
