import { render, screen, fireEvent } from "@/test-utils";
import Tabs from "./Tabs";

describe("Tabs", () => {
  const tabs = [
    { name: "common.buttons.registration", content: <div>Registration content</div> },
    { name: "common.buttons.seeMore", content: <div>See more content</div> },
    { name: "common.buttons.learnMore", content: <div>Learn more content</div> }
  ];

  it("renders all tab buttons", () => {
    render(<Tabs tabs={tabs} />);

    expect(screen.getByText("Inscrição")).toBeInTheDocument();
    expect(screen.getByText("Ver mais")).toBeInTheDocument();
    expect(screen.getByText("Saber mais")).toBeInTheDocument();
  });

  it("first tab content is visible by default", () => {
    render(<Tabs tabs={tabs} />);

    expect(screen.getByText("Registration content")).toBeInTheDocument();
    expect(screen.queryByText("See more content")).not.toBeInTheDocument();
    expect(screen.queryByText("Learn more content")).not.toBeInTheDocument();
  });

  it("clicking a different tab shows its content and hides the previous one", () => {
    render(<Tabs tabs={tabs} />);

    expect(screen.getByText("Registration content")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Ver mais"));

    expect(screen.getByText("See more content")).toBeInTheDocument();
    expect(screen.queryByText("Registration content")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Saber mais"));

    expect(screen.getByText("Learn more content")).toBeInTheDocument();
    expect(screen.queryByText("See more content")).not.toBeInTheDocument();
  });
});
