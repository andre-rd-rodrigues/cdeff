import { render, screen } from "@/test-utils";
import RankSection from "./RankSection";

describe("RankSection", () => {
  it("renders team member names", () => {
    const team = [
      { name: "Player One", image: "/player1.jpg" },
      { name: "Player Two", image: "/player2.jpg" }
    ];

    render(<RankSection team={team} />);

    expect(screen.getByText("Player One")).toBeInTheDocument();
    expect(screen.getByText("Player Two")).toBeInTheDocument();
  });
});
