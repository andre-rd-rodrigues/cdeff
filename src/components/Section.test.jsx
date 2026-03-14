import { render, screen } from "@/test-utils";
import Section from "./Section";

describe("Section", () => {
  it("renders children", () => {
    render(
      <Section>
        <span>Section content</span>
      </Section>
    );

    expect(screen.getByText("Section content")).toBeInTheDocument();
  });
});
