import { render, screen } from "@/test-utils";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders copyright text", () => {
    render(<Footer />);

    expect(screen.getByText(/© 2023/)).toBeInTheDocument();
    expect(screen.getByText(/André Rodrigo/)).toBeInTheDocument();
  });

  it("renders social links section", () => {
    render(<Footer />);

    expect(screen.getAllByText("Futsal").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Basquetebol").length).toBeGreaterThan(0);
  });
});
