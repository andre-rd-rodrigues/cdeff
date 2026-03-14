import { render, screen, fireEvent, waitFor } from "@/test-utils";
import Faqs from "./Faqs";

describe("Faqs", () => {
  it("renders FAQ questions", () => {
    render(<Faqs />);

    expect(
      screen.getByText("Quais os horários de treinos de basquetebol e futsal?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Quais são as modalidades disponíveis e os respetivos custos?")
    ).toBeInTheDocument();
  });

  it("clicking a question expands the answer", async () => {
    render(<Faqs />);

    const firstQuestion = screen.getByText(
      "Quais os horários de treinos de basquetebol e futsal?"
    );

    expect(screen.queryByText(/Para verificar os horários de treinos de basquetebol/)).not.toBeInTheDocument();

    fireEvent.click(firstQuestion);

    await waitFor(() => {
      expect(screen.getByText(/Para verificar os horários de treinos de basquetebol/)).toBeInTheDocument();
    });
  });
});
