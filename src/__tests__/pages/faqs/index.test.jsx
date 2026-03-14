import { render, screen } from "@/test-utils";
import FaqsPage from "@/pages/faqs";

describe("FAQs Page", () => {
  it("renders the page header with title", () => {
    render(<FaqsPage />);

    expect(screen.getByText("Perguntas Frequentes")).toBeInTheDocument();
  });

  it("renders FAQ questions from translations", () => {
    render(<FaqsPage />);

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });
});
