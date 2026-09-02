import { render, screen } from "@/test-utils";
import EmptyState from "./EmptyState";

describe("EmptyState", () => {
  it("renders the title, description and icon", () => {
    render(
      <EmptyState
        icon="ph:hoop"
        title="No fixtures yet"
        description="Check back soon."
      />
    );

    expect(screen.getByText("No fixtures yet")).toBeInTheDocument();
    expect(screen.getByText("Check back soon.")).toBeInTheDocument();
    expect(
      document.querySelector('[data-icon="ph:hoop"]')
    ).toBeInTheDocument();
  });

  it("renders a CTA link when cta is provided", () => {
    render(
      <EmptyState
        title="No fixtures yet"
        cta={{ href: "/registrations", label: "See registrations" }}
      />
    );

    const link = screen.getByRole("link", { name: /see registrations/i });
    expect(link).toBeInTheDocument();
    // next-intl localizes the pathname (e.g. /pt/inscricoes for the pt locale).
    expect(link.getAttribute("href")).toMatch(/registrations|inscricoes/);
  });

  it("does not render a CTA link when cta is omitted", () => {
    render(<EmptyState title="No fixtures yet" description="Nothing here." />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
