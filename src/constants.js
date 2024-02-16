export const DATE_FORMAT = `MMMM DD, YYYY`;
export const DATE_FORMAT_HOURS = `MMMM DD, YYYY [at] HH:mm`;

export const SPORTS = {
  BASKETBALL: "basketball",
  FUTSAL: "futsal"
};

export const TEL_LINK = "tel:+351 914 333 333";

export const REVALIDATE_TIME = 1800; // 30 minutes

export const headConfig = {
  "/": {
    title: "homeTitle" // These are keys for your translation files
  },
  "/about": {
    title: "aboutTitle"
  },
  "/about/sponsors": {
    title: "sponsorsTitle" // Key for the translation of the title
  },
  "/activities": {
    title: "activitiesTitle"
  },
  "/basketball": {
    title: "basketballTitle"
  },
  "/basketball/membership": {
    title: "membershipTitle"
  },
  "/blog": {
    // Assuming [slug].jsx is for individual blog posts
    title: "blogTitle"
  },
  "/blog/[slug]": {
    // Dynamic route for blog posts
    title: "blogPostTitle"
  },
  "/contacts": {
    title: "contactsTitle"
  },
  "/faqs": {
    title: "faqsTitle"
  },
  "/futsal": {
    title: "futsalTitle"
  },
  "/store": {
    title: "storeTitle"
  },
  "/tournaments": {
    title: "tournamentsTitle"
  },
  "/registrations": {
    title: "registrationsTitle"
  }
};

// generate country list for pt, en, fr and es
export const LANGUAGE = {
  PT: "PT",
  ES: "ES",
  FR: "FR",
  EN: "EN"
};

export const languagesCodes = [
  {
    language: "Português",
    code: "PT"
  },
  {
    language: "Español",
    code: "ES"
  },
  {
    language: "Français",
    code: "FR"
  },
  {
    language: "English",
    code: "EN"
  }
];

export const viiTournamentPre1StageLinks = {
  PT: "https://docs.google.com/forms/d/e/1FAIpQLSeKY0oIJ-SHGTtmRnPeUD9a-G2XLjWH28d2WeQZD8EA9mfNQA/viewform?usp=sf_link",
  EN: "https://docs.google.com/forms/d/e/1FAIpQLSdhbRY47AfA1d42v5Ukz3Wwak0f25ZLrcsPO1OJrLTrUdK5ow/viewform?usp=sf_link",
  ES: "https://docs.google.com/forms/d/e/1FAIpQLSde3wNB-3U1PKtO_GAX1fCxDEzM9CHusl4x9gCpwraPbA4Z2Q/viewform?usp=sf_link",
  FR: "https://docs.google.com/forms/d/e/1FAIpQLSf7AZZ747AiwhKrEHsQagvsv5QwuJANOw8HOcpeEzUJxuv32g/viewform?usp=sf_link"
};

export const viiTournamentOfficial2StageLinks = {
  PT: "https://docs.google.com/forms/d/e/1FAIpQLSevy0K_SBjNWSf-ApEqlG0eO5kMZlPN8lPqy96Z5vaWK3xEKw/viewform?usp=sf_link",
  EN: "https://docs.google.com/forms/d/e/1FAIpQLSdNJIWOh2EGUH7NCDTepdxh6NCWg4VpMBjHmS0SpJHZzPM2yQ/viewform?usp=sf_link",
  ES: "https://docs.google.com/forms/d/e/1FAIpQLSdFvrB9bpTdd-nI1zk4dgbf6Hh3m3bYOpDsWDZYafx2XsAeIw/viewform?usp=sf_link",
  FR: "https://docs.google.com/forms/d/e/1FAIpQLSfLxyhtg9enLOmF5dJC8UQVxe0w31MysnvK6NI0jCn5w-2BSg/viewform?usp=sf_link"
};

export const nationalTournament2024 = {
  PRE: "https://docs.google.com/forms/d/e/1FAIpQLScOfzRVqNOm0s0Ju3so8aGBGwwZCm_zo8Y8nkf-sUI_JlJL1w/viewform?usp=sf_link",
  OFFICAL:
    "https://docs.google.com/forms/d/e/1FAIpQLSeDfcya1gKefbmzhS2HaUO6jE7twABtZDIvDXKGfhwU1ZYV2A/viewform?usp=sf_link"
};
