import { render, screen } from "@/test-utils";
import Container from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(
      <Container>
        <span>Child content</span>
      </Container>
    );

    expect(screen.getByText("Child content")).toBeInTheDocument();
  });
});
