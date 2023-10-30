import { getPost, getPosts } from "@/lib/notion";
import React from "react";
import ReactMarkdown from "react-markdown";

const Post = async ({ post }) => {
  return (
    <div>
      <ReactMarkdown className="markdown">{post.parent}</ReactMarkdown>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const publishedPosts = await getPosts("en");

  return {
    paths: publishedPosts.map((post) => {
      return {
        params: {
          slug: post.properties.Slug.rich_text[0].plain_text
        }
      };
    }),
    fallback: false
  };
};

export const getStaticProps = async ({ locale, params }) => {
  let { slug } = params;

  let { markdown } = await getPost(slug, locale);

  return {
    props: {
      post: markdown
    }
  };
};
