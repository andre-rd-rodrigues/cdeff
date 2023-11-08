import { Client } from "@notionhq/client";
const { NotionToMarkdown } = require("notion-to-md");

const notion = new Client({
  auth: process.env.NOTION_KEY
});

const n2m = new NotionToMarkdown({ notionClient: notion });

const getPageMetaData = (post) => {
  return {
    id: post.id,
    title: post.properties?.Name.title[0].plain_text,
    description: post.properties?.Description.rich_text[0].plain_text,
    date: post.last_edited_time,
    slug: post.properties?.Slug.rich_text[0].plain_text,
    image: post.cover?.external.url
  };
};

const getPosts = async (locale) => {
  const myPosts = await notion.databases.query({
    database_id: process.env.NOTION_DB_BLOG,
    filter: {
      and: [
        {
          property: "Publish",
          checkbox: {
            equals: true
          }
        },
        {
          property: "Language",
          select: {
            equals: locale
          }
        }
      ]
    },
    sorts: [
      {
        property: "Created",
        direction: "descending"
      }
    ]
  });
  return myPosts.results;
};

const getPost = async (slug, locale) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DB_BLOG,
    filter: {
      and: [
        {
          property: "Slug",
          formula: {
            string: {
              equals: slug
            }
          }
        },
        {
          property: "Publish",
          checkbox: {
            equals: true
          }
        },
        {
          property: "Language",
          select: {
            equals: locale
          }
        }
      ]
    }
  });

  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    metadata,
    markdown: mdString
  };
};

export { getPost, getPosts };
