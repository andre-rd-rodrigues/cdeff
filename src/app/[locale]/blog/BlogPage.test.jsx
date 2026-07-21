import { render, screen } from "@/test-utils";
import BlogPage from "./BlogPage";

describe("BlogPage", () => {
  it("shows the empty state when there are no posts", () => {
    render(<BlogPage posts={[]} />);

    expect(screen.getByText("Ainda sem histórias")).toBeInTheDocument();
  });

  it("renders blog cards when posts are provided", () => {
    const posts = [
      {
        title: "Notícia de Teste",
        description: "Resumo do artigo",
        date: "2024-01-15",
        image: "/test.jpg",
        slug: "noticia-de-teste"
      }
    ];

    render(<BlogPage posts={posts} />);

    expect(screen.getByText("Notícia de Teste")).toBeInTheDocument();
    expect(screen.queryByText("Ainda sem histórias")).not.toBeInTheDocument();
  });
});
