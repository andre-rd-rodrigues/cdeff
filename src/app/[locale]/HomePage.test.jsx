import { render, screen } from "@/test-utils";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("renders the basketball and futsal sport picker tiles", () => {
    render(<HomePage blogPosts={[]} />);

    expect(screen.getByText("Basquetebol")).toBeInTheDocument();
    expect(screen.getByText("Futsal")).toBeInTheDocument();
  });

  it("shows the blog empty state when there are no posts", () => {
    render(<HomePage blogPosts={[]} />);

    expect(screen.getByText("Ainda sem histórias")).toBeInTheDocument();
  });
});
