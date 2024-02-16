import { Client } from "@notionhq/client";
const { NotionToMarkdown } = require("notion-to-md");

const notion = new Client({
  auth: process.env.NOTION_KEY
});

const n2m = new NotionToMarkdown({ notionClient: notion });

const getPostPageMetaData = (post) => {
  return {
    id: post?.id,
    title: post?.properties?.Name.title[0].plain_text,
    description: post?.properties?.Description.rich_text[0].plain_text,
    date: post?.last_edited_time,
    slug: post?.properties?.Slug.rich_text[0].plain_text,
    image: getNotionImagePathname(post)
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

  const metadata = getPostPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    metadata,
    markdown: mdString
  };
};

/* Tournaments */
const getTournamentPageMetaData = (tournament) => {
  return {
    id: tournament?.id,
    title: tournament?.properties?.Titulo?.title[0]?.plain_text,
    description:
      tournament?.properties?.Descrição?.rich_text[0]?.plain_text || null,
    dateStart: tournament.properties?.Data?.date?.start,
    dateEnd: tournament.properties?.Data?.date?.end,
    slug: tournament?.properties?.Slug?.rich_text[0]?.plain_text,
    image: tournament.cover?.external?.url || tournament.cover?.file?.url || "",
    location: tournament?.properties?.Local?.rich_text[0]?.plain_text
  };
};

const getTournaments = async (locale) => {
  const tournaments = await notion.databases.query({
    database_id: process.env.NOTION_DB_TOURNAMENTS,
    filter: {
      and: [
        {
          property: "Publicado",
          checkbox: {
            equals: true
          }
        },
        {
          property: "Idioma",
          select: {
            equals: locale
          }
        }
      ]
    },
    sorts: [
      {
        property: "Data",
        direction: "descending"
      }
    ]
  });
  return tournaments.results;
};

const getTournament = async (slug, locale) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DB_TOURNAMENTS,
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
          property: "Publicado",
          checkbox: {
            equals: true
          }
        },
        {
          property: "Idioma",
          select: {
            equals: locale
          }
        }
      ]
    }
  });

  const page = response.results[0];

  const metadata = getTournamentPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    metadata,
    markdown: mdString
  };
};

const getNotionImagePathname = (post) =>
  post.cover?.external?.url ||
  post.cover?.file?.url ||
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export {
  getPost,
  getPosts,
  getTournaments,
  getTournament,
  getNotionImagePathname
};
