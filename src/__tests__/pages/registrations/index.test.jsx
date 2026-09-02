import { render, screen } from "@/test-utils";
import RegistrationsPage from "@/app/[locale]/registrations/RegistrationsPage";

describe("Registrations Page", () => {
  it("renders the page header with title", () => {
    render(<RegistrationsPage />);

    expect(screen.getByText("Inscrições")).toBeInTheDocument();
  });

  it("renders sport selection cards", () => {
    render(<RegistrationsPage />);

    expect(screen.getByText("Basquetebol")).toBeInTheDocument();
    expect(screen.getByText("Futsal")).toBeInTheDocument();
  });

  it("shows futsal registration cards by default (isBasket=false)", () => {
    render(<RegistrationsPage />);

    const registrationButtons = screen.getAllByText("Inscrição");
    expect(registrationButtons.length).toBeGreaterThan(0);
  });
});
