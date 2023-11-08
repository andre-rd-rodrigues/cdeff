import BlogCard from "@/components/Blog/BlogCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { getPosts } from "@/lib/notion";
import { useTranslations } from "next-intl";
import React from "react";

function BlogPage({ posts }) {
  const t = useTranslations();
  console.log(posts);
  return (
    <main>
      <PageHeader
        title={t("pages.blog.title")}
        image={
          "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
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
                image: post.cover?.external.url,
                slug: post.properties.Slug.rich_text[0].plain_text
              }}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}

export default BlogPage;

export async function getStaticProps({ locale }) {
  const posts = await getPosts(locale);

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
      posts
    }
  };
}
