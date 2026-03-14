import { render, screen } from "@/test-utils";
import SectionTitle from "./SectionTitle";

describe("SectionTitle", () => {
  it("renders title and subtitle when provided", () => {
    render(
      <SectionTitle title="Main Title" subTitle="Subtitle text" />
    );

    expect(screen.getByText("Main Title")).toBeInTheDocument();
    expect(screen.getByText("Subtitle text")).toBeInTheDocument();
  });
});
