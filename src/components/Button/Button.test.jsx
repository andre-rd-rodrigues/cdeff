import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  const onClick = jest.fn();

  it("should render label correctly", () => {
    // ACT
    render(<Button label="Click me" />);

    // ARRANGE
    const buttonElement = screen.getByText("Click me");

    // ASSERT
    expect(buttonElement).toBeInTheDocument();
  });

  it("should trigger onClick successfully when user clicks on Button", () => {
    render(<Button label="Click me" onClick={onClick} />);

    // Assert that button is rendered
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();

    // Assert that button is sucessfully clicked
    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalled();
  });
});
