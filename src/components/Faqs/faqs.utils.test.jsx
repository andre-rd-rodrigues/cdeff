import { render, screen } from "@/test-utils";
import { renderAnswerWithLinks } from "./faqs.utils";

const mockT = (key) => {
  if (key === "common.buttons.clickHere") return "Clica aqui";
  return key;
};

describe("renderAnswerWithLinks", () => {
  it("renders plain text without placeholders", () => {
    const answer = "This is plain text with no placeholders.";
    const { container } = render(renderAnswerWithLinks(answer, mockT));
    expect(container.textContent).toContain("This is plain text with no placeholders.");
  });

  it("replaces {phoneLink} with a link to the phone number", () => {
    const answer = "Call us at {phoneLink} for more info.";
    render(renderAnswerWithLinks(answer, mockT));
    const link = screen.getByRole("link", { name: "+351 291 615 579" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "tel:+291615579");
  });

  it("replaces {emailLink} with a link to the email", () => {
    const answer = "Email us at {emailLink}.";
    render(renderAnswerWithLinks(answer, mockT));
    const link = screen.getByRole("link", {
      name: "cdeff.madeira@esffranco.edu.pt"
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "mailto:cdeff.madeira@esffranco.edu.pt");
  });

  it("handles multiple placeholders in a single string", () => {
    const answer = "Call {phoneLink} or email {emailLink} for help.";
    const { container } = render(renderAnswerWithLinks(answer, mockT));
    expect(screen.getByRole("link", { name: "+351 291 615 579" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "cdeff.madeira@esffranco.edu.pt" })
    ).toBeInTheDocument();
    expect(container.textContent).toContain("Call");
    expect(container.textContent).toContain("or email");
    expect(container.textContent).toContain("for help.");
  });
});
