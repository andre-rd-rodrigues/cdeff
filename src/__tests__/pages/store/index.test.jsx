import { render, screen } from "@/test-utils";
import StorePage from "@/app/[locale]/store/StorePage";

describe("Store Page", () => {
  it("renders the page header with title", () => {
    render(<StorePage />);

    expect(screen.getByText("Loja")).toBeInTheDocument();
  });

  it("renders basketball and futsal section titles", () => {
    render(<StorePage />);

    expect(screen.getByText("Basquetebol")).toBeInTheDocument();
    expect(screen.getByText("Futsal")).toBeInTheDocument();
  });

  it("renders product cards with book buttons", () => {
    render(<StorePage />);

    const bookButtons = screen.getAllByText("Reservar");
    expect(bookButtons.length).toBeGreaterThan(0);
  });
});
