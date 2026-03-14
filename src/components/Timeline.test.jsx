import { render, screen } from "@/test-utils";
import Timeline from "./Timeline";

describe("Timeline", () => {
  it("renders timeline items", () => {
    const data = [
      { date: "2020", title: "First event" },
      { date: "2021", title: "Second event" }
    ];

    render(<Timeline data={data} />);

    expect(screen.getByText("2020")).toBeInTheDocument();
    expect(screen.getByText("First event")).toBeInTheDocument();
    expect(screen.getByText("2021")).toBeInTheDocument();
    expect(screen.getByText("Second event")).toBeInTheDocument();
  });
});
