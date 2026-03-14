import { render, screen, fireEvent } from "@/test-utils";
import { useRouter } from "next/router";
import RegistrationPage from "./index";

describe("Registrations Page", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      locale: "pt",
      pathname: "/registrations",
      route: "/registrations",
      query: {},
      asPath: "/registrations",
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() }
    });
  });

  it("renders the page header with title", () => {
    render(<RegistrationPage />);

    expect(screen.getByText("Inscrições")).toBeInTheDocument();
  });

  it("renders sport selection cards", () => {
    render(<RegistrationPage />);

    expect(screen.getByText("Basquetebol")).toBeInTheDocument();
    expect(screen.getByText("Futsal")).toBeInTheDocument();
  });

  it("shows futsal registration cards by default (isBasket=false)", () => {
    render(<RegistrationPage />);

    const registrationButtons = screen.getAllByText("Inscrição");
    expect(registrationButtons.length).toBeGreaterThan(0);
  });
});
