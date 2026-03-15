"use client";

import BlogPageHeader from "@/components/PageHeader/BlogPageHeader";
import { DATE_FORMAT } from "@/constants";
import dayjs from "dayjs";
import { useLocale } from "next-intl";
import ReactMarkdown from "react-markdown";
import "dayjs/locale/pt";
import "dayjs/locale/en";

export default function BlogPostPage({ post, metadata }) {
  const locale = useLocale();

  return (
    <main>
      <BlogPageHeader
        image={metadata?.image}
        title={metadata?.title}
        date={dayjs(metadata?.date).locale(locale).format(DATE_FORMAT)}
      />
      <div className="max-w-7xl m-auto py-10">
        <ReactMarkdown className="markdown">{post.parent}</ReactMarkdown>
      </div>
    </main>
  );
}
