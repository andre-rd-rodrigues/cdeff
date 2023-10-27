import { getPost } from "@/lib/notion";
import React from "react";
import ReactMarkdown from "react-markdown";

const Post = async ({ params: { slug, locale } }) => {
  const { markdown } = await getPost(slug);

  return (
    <div>
      <ReactMarkdown className="markdown">{markdown.parent}</ReactMarkdown>
    </div>
  );
};

export default Post;
