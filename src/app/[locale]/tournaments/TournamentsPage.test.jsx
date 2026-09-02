import { render, screen } from "@/test-utils";
import TournamentsPage from "./TournamentsPage";
import { SPORTS } from "@/constants";

describe("TournamentsPage", () => {
  it("shows the club-voice empty state when the selected sport has no tournaments", () => {
    render(<TournamentsPage tournaments={[]} />);

    expect(screen.getByText("Ainda nada no calendário")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /ver inscrições/i })
    ).toBeInTheDocument();
  });

  it("renders an event card for the selected sport's tournaments", () => {
    const tournaments = [
      {
        sport: SPORTS.FUTSAL,
        slug: "copa-teste",
        title: "Copa Teste",
        description: "Uma prova de teste",
        dateStart: "2024-01-01",
        dateEnd: "2024-01-02",
        image: "/test.jpg",
        location: "Funchal"
      }
    ];

    render(<TournamentsPage tournaments={tournaments} />);

    expect(screen.getByText("Copa Teste")).toBeInTheDocument();
    expect(
      screen.queryByText("Ainda nada no calendário")
    ).not.toBeInTheDocument();
  });
});
