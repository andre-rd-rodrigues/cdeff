import { render, screen } from "@/test-utils";
import SubHeading from "./SubHeading";

describe("SubHeading", () => {
  it("renders subheading text", () => {
    render(<SubHeading title="Subheading Text" />);

    expect(screen.getByText("Subheading Text")).toBeInTheDocument();
  });
});
