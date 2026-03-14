import { render, screen } from "@/test-utils";
import Layout from "./Layout";

describe("Layout", () => {
  it("renders children passed to it", () => {
    render(
      <Layout>
        <span>Page content</span>
      </Layout>
    );

    expect(screen.getByText("Page content")).toBeInTheDocument();
  });
});
