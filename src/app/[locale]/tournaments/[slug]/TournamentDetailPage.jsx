"use client";

import BlogPageHeader from "@/components/PageHeader/BlogPageHeader";
import { DATE_FORMAT } from "@/constants";
import dayjs from "dayjs";
import { useLocale } from "next-intl";
import ReactMarkdown from "react-markdown";
import "dayjs/locale/pt";
import "dayjs/locale/en";

export default function TournamentDetailPage({ tournament, metadata }) {
  const locale = useLocale();

  return (
    <main>
      <BlogPageHeader
        image={metadata?.image}
        title={metadata?.title}
        date={`${dayjs(metadata?.dateStart)
          .locale(locale)
          .format(DATE_FORMAT)} - ${dayjs(metadata?.dateEnd)
          .locale(locale)
          .format(DATE_FORMAT)}`}
      />
      <div className="max-w-7xl m-auto py-10">
        <ReactMarkdown className="markdown">
          {tournament.parent}
        </ReactMarkdown>
      </div>
    </main>
  );
}
