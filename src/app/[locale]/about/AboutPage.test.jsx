import { render, screen } from "@/test-utils";
import AboutPage from "./AboutPage";

describe("AboutPage", () => {
  it("renders the scoreboard club-stats band labels", () => {
    render(<AboutPage />);

    expect(screen.getByText("Atletas")).toBeInTheDocument();
    expect(screen.getByText("Anos de história")).toBeInTheDocument();
    expect(screen.getByText("Modalidades")).toBeInTheDocument();
    expect(screen.getByText("Títulos conquistados")).toBeInTheDocument();
  });
});
