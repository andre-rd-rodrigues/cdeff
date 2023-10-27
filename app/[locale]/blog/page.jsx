import { getPosts } from "@/lib/notion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = async ({ params: { locale } }) => {
  const posts = await getPosts(locale);

  return (
    <div>
      <main>
        <h1 className="mb-3 text-2xl font-semibold">Latest posts</h1>
        {posts?.map((post, index) => {
          return (
            <Link
              className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-10 max-w-md md:max-w-2xl"
              key={index}
              href={`blog/${post.properties.Slug.rich_text[0].plain_text}`}
            >
              <div className="items-start px-4 py-6">
                <Image
                  src={post.cover?.external.url}
                  width={300}
                  height={200}
                  alt={post.properties.Name.title[0].plain_text}
                  className="w-20 h-20 rounded-full object-cover mr-4 shadow"
                />

                <div className="mt-3 text-gray-700 text-sm ">
                  <h4>{post.properties.Name.title[0].plain_text}</h4>
                </div>
                <p>{post.properties?.Description.rich_text[0]?.plain_text}</p>
              </div>
            </Link>
          );
        })}
      </main>
    </div>
  );
};
export default Blog;
