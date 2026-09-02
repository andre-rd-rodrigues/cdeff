import { render, screen } from "@/test-utils";
import Heading from "./Heading";

describe("Heading", () => {
  it("renders heading text", () => {
    render(<Heading title="Page Heading" />);

    expect(screen.getByText("Page Heading")).toBeInTheDocument();
  });
});
