import { render, screen } from "@/test-utils";
import ImageSection from "./ImageSection";

describe("ImageSection", () => {
  it("renders image", () => {
    render(<ImageSection imgSrc="/test-image.jpg" title="Image alt" />);

    expect(screen.getByRole("img", { name: "Image alt" })).toBeInTheDocument();
  });
});
