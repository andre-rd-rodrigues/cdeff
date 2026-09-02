import { render, screen } from "@/test-utils";
import BlogPageHeader from "./BlogPageHeader";

describe("BlogPageHeader", () => {
  it("renders title and date", () => {
    render(
      <BlogPageHeader
        title="Blog Post Title"
        image="/blog-header.jpg"
        date="15 Janeiro 2024"
      />
    );

    expect(screen.getByText("Blog Post Title")).toBeInTheDocument();
    expect(screen.getByText("15 Janeiro 2024")).toBeInTheDocument();
  });
});
