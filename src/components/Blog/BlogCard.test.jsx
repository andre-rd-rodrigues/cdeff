import { render, screen } from "@/test-utils";
import BlogCard from "./BlogCard";

describe("BlogCard", () => {
  const article = {
    title: "Test Article",
    description: "Test description",
    date: "2024-01-15",
    image: "/test-image.jpg",
    slug: "test-article"
  };

  it("renders title, description, and Read More button text", () => {
    render(<BlogCard article={article} />);

    expect(screen.getByText("Test Article")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByText("Ler mais")).toBeInTheDocument();
  });
});
