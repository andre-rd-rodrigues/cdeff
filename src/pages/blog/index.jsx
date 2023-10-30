import { getPosts } from "@/lib/notion";
import React from "react";

function BlogPage({ posts }) {
  console.log(posts);
  return <div>BlogPage</div>;
}

export default BlogPage;

export async function getServerSideProps({ locale }) {
  const posts = await getPosts(locale);

  return {
    props: {
      posts
    }
  };
}
