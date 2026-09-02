import { render, screen } from "@/test-utils";
import TextSection from "./TextSection";

describe("TextSection", () => {
  it("renders title and description", () => {
    render(
      <TextSection
        title="Section Title"
        description="Section description"
      />
    );

    expect(screen.getByText("Section Title")).toBeInTheDocument();
    expect(screen.getByText("Section description")).toBeInTheDocument();
  });
});
