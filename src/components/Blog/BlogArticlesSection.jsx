import React from "react";

const BlogArticlesSection = async ({ params: { locale } }) => {
  const posts = await getPosts(locale);
  console.log(posts);
  return <div>BlogArticlesSection</div>;
};

export default BlogArticlesSection;
