import { render, screen, fireEvent } from "@/test-utils";
import IconCard from "./IconCard";

describe("IconCard", () => {
  it("renders title and description", () => {
    render(
      <IconCard title="Test Title" description="Test description" />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("renders icon when iconName is provided", () => {
    render(
      <IconCard title="Title" iconName="mdi:basketball" />
    );

    expect(document.querySelector('[data-icon="mdi:basketball"]')).toBeInTheDocument();
  });

  it("applies selected styles when isSelected is true", () => {
    const { container } = render(
      <IconCard title="Title" isSelected={true} />
    );

    const card = container.firstChild;
    // With styleMock, selected state adds both container and containerSelected classes
    expect(card.className).toContain("undefined undefined");
  });

  it("fires onClick when clicked", () => {
    const onClick = jest.fn();
    render(
      <IconCard title="Title" onClick={onClick} />
    );

    fireEvent.click(screen.getByText("Title"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not render description when not provided", () => {
    render(<IconCard title="Title" />);

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.queryByText("Test description")).not.toBeInTheDocument();
  });
});
