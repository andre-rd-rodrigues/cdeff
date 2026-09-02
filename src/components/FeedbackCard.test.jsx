import { render, screen } from "@/test-utils";
import FeedbackCard from "./FeedbackCard";

describe("FeedbackCard", () => {
  it("renders author and feedback text", () => {
    render(
      <FeedbackCard
        author="John Doe"
        feedback="Great experience!"
        image="/avatar.jpg"
      />
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Great experience!")).toBeInTheDocument();
  });
});
