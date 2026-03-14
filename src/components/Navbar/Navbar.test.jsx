import { render, screen } from "@/test-utils";
import Navbar from "./Navbar";

jest.mock("@/hooks/useIsMobile", () => ({
  __esModule: true,
  default: jest.fn(() => false)
}));

describe("Navbar", () => {
  it("renders the company logo", () => {
    render(<Navbar />);

    const logoLink = screen.getByRole("link", { name: /o desporto a formar para a vida/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("renders the mobile menu button", () => {
    render(<Navbar />);

    expect(screen.getByRole("button", { name: /open main menu/i })).toBeInTheDocument();
  });
});
