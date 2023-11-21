import BlogCard from "@/components/Blog/BlogCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { getPosts } from "@/lib/notion";
import { REVALIDATE_TIME, getNotionImagePathname } from "@/utils";
import { useTranslations } from "next-intl";

function BlogPage({ posts }) {
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

export default BlogPage;

export async function getStaticProps({ locale }) {
  const posts = await getPosts(locale);

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
      posts
    },
    revalidate: REVALIDATE_TIME
  };
}
