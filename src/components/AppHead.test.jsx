import { render } from "@/test-utils";
import AppHead from "./AppHead";

jest.mock("next-seo", () => ({
  NextSeo: function MockNextSeo({ title }) {
    return <div data-testid="next-seo">{title}</div>;
  }
}));

describe("AppHead", () => {
  it("renders without crashing", () => {
    const { container } = render(<AppHead />);

    expect(container).toBeInTheDocument();
  });
});
