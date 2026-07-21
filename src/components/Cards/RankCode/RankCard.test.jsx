import { render, screen, fireEvent } from "@/test-utils";
import RankCard from "./RankCard";

describe("RankCard", () => {
  it("renders rank text", () => {
    render(<RankCard rank="1º Dan" onSelect={vi.fn()} isSelected={false} />);

    expect(screen.getByText("1º Dan")).toBeInTheDocument();
  });

  it("calls onSelect on click", () => {
    const onSelect = vi.fn();
    render(<RankCard rank="2º Dan" onSelect={onSelect} isSelected={false} />);

    fireEvent.click(screen.getByText("2º Dan"));

    expect(onSelect).toHaveBeenCalled();
  });
});
