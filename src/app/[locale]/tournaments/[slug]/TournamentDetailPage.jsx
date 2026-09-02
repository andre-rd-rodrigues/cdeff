import BlogPageHeader from "@/components/PageHeader/BlogPageHeader";
import { DATE_FORMAT } from "@/constants";
import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote/rsc";
import "dayjs/locale/pt";
import "dayjs/locale/en";

const mdxComponents = {
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt || ""} loading="lazy" />
  )
};

export default function TournamentDetailPage({ content, metadata, locale }) {
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
        <div className="markdown">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </div>
    </main>
  );
}
