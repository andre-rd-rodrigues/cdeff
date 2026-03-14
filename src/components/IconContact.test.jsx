import { render, screen } from "@/test-utils";
import IconContact from "./IconContact";

describe("IconContact", () => {
  it("renders contact text", () => {
    render(<IconContact icon="mdi:email" contact="test@example.com" />);

    expect(screen.getByText("test@example.com")).toBeInTheDocument();
  });

  it("renders as link when href is provided", () => {
    render(
      <IconContact
        icon="mdi:email"
        contact="test@example.com"
        href="mailto:test@example.com"
      />
    );

    const link = screen.getByRole("link", { name: /test@example.com/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "mailto:test@example.com");
  });
});
