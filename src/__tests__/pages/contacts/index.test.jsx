import { render, screen } from "@/test-utils";
import ContactsPage from "@/app/[locale]/contacts/ContactsPage";

describe("Contacts Page", () => {
  it("renders the page header with title", () => {
    render(<ContactsPage />);

    expect(screen.getByText("Contactos")).toBeInTheDocument();
  });

  it("renders the Google Maps iframe", () => {
    render(<ContactsPage />);

    const iframe = document.querySelector("iframe");
    expect(iframe).toBeInTheDocument();
    expect(iframe.src).toContain("google.com/maps");
  });

  it("renders contact items", () => {
    render(<ContactsPage />);

    const contactLinks = screen.getAllByRole("link");
    expect(contactLinks.length).toBeGreaterThan(0);
  });
});
