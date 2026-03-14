export function createMockPost(overrides = {}) {
  return {
    id: "mock-post-id",
    created_time: "2024-01-15T10:00:00.000Z",
    last_edited_time: "2024-01-15T12:00:00.000Z",
    cover: {
      external: { url: "https://example.com/cover.jpg" }
    },
    properties: {
      Name: { title: [{ plain_text: "Test Post Title" }] },
      Description: { rich_text: [{ plain_text: "Test description" }] },
      Slug: { rich_text: [{ plain_text: "test-post" }] },
      Language: { select: { name: "pt" } },
      Publish: { checkbox: true }
    },
    ...overrides
  };
}

export function createMockTournament(overrides = {}) {
  return {
    id: "mock-tournament-id",
    created_time: "2024-01-15T10:00:00.000Z",
    cover: {
      external: { url: "https://example.com/tournament.jpg" }
    },
    properties: {
      Titulo: { title: [{ plain_text: "Test Tournament" }] },
      "Descrição": { rich_text: [{ plain_text: "Tournament description" }] },
      Slug: { rich_text: [{ plain_text: "test-tournament" }] },
      Data: { date: { start: "2024-06-01", end: "2024-06-03" } },
      Local: { rich_text: [{ plain_text: "Funchal, Madeira" }] },
      Modalidade: { select: { name: "futsal" } },
      Idioma: { select: { name: "pt" } },
      Publicado: { checkbox: true }
    },
    ...overrides
  };
}
