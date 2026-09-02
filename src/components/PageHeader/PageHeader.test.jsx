import { render, screen } from "@/test-utils";
import PageHeader from "./PageHeader";

describe("PageHeader", () => {
  it("renders title", () => {
    render(<PageHeader title="Page Title" image="/header.jpg" />);

    expect(screen.getByText("Page Title")).toBeInTheDocument();
  });
});
