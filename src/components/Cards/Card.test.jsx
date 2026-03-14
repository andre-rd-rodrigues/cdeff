import { render, screen } from "@/test-utils";
import Card from "./Card";

describe("Card", () => {
  it("renders title and image", () => {
    render(<Card title="Test Title" imageSrc="/test-image.jpg" />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Test Title" })).toBeInTheDocument();
  });
});
