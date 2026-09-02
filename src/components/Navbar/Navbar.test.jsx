import { render, screen } from "@/test-utils";
import Navbar from "./Navbar";

vi.mock("@/hooks/useIsMobile", () => ({
  __esModule: true,
  default: vi.fn(() => false)
}));

describe("Navbar", () => {
  it("renders the company logo", () => {
    render(<Navbar />);

    const logoLink = screen.getByRole("link", { name: /o desporto a formar para a vida/i });
    expect(logoLink).toBeInTheDocument();
    // next-intl localizes the home href (default locale prefix).
    expect(logoLink.getAttribute("href")).toMatch(/^\/(pt)?$/);
  });

  it("renders the mobile menu button", () => {
    render(<Navbar />);

    expect(screen.getByRole("button", { name: /open main menu/i })).toBeInTheDocument();
  });
});
