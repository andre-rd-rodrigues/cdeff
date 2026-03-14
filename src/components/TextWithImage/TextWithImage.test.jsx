import { render, screen } from "@/test-utils";
import TextWithImage from "./TextWithImage";

describe("TextWithImage", () => {
  it("renders title and image", () => {
    render(
      <TextWithImage
        title="Section Title"
        description="Section description"
        imageSrc="/test-image.jpg"
      />
    );

    expect(screen.getByText("Section Title")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Section Title" })).toBeInTheDocument();
  });
});
