import { render, screen } from "@/test-utils";
import DepartmentsSection from "./DepartmentsSection";
import { departments } from "@/data/company";

describe("DepartmentsSection", () => {
  it("renders all departments when knowMore is false", () => {
    render(<DepartmentsSection knowMore={false} />);

    expect(screen.getByText("Fernando Alves")).toBeInTheDocument();
    expect(screen.getByText("Joaquim Pereira")).toBeInTheDocument();
    expect(screen.getByText("Paulo Freitas")).toBeInTheDocument();
    expect(screen.getByText("Tiago Rosa")).toBeInTheDocument();
    expect(screen.getByText("Mauro Silva")).toBeInTheDocument();
    expect(screen.getByText("Ema Rodrigues")).toBeInTheDocument();
    expect(screen.getByText("Lilibeth Gonçalves")).toBeInTheDocument();
  });

  it("renders all departments when knowMore is not provided", () => {
    render(<DepartmentsSection />);

    expect(screen.getByText("Fernando Alves")).toBeInTheDocument();
    expect(screen.getByText("Lilibeth Gonçalves")).toBeInTheDocument();
  });

  it("renders only first 3 departments when knowMore is true", () => {
    render(<DepartmentsSection knowMore />);

    expect(screen.getByText("Fernando Alves")).toBeInTheDocument();
    expect(screen.getByText("Joaquim Pereira")).toBeInTheDocument();
    expect(screen.getByText("Paulo Freitas")).toBeInTheDocument();
    expect(screen.queryByText("Tiago Rosa")).not.toBeInTheDocument();
    expect(screen.queryByText("Mauro Silva")).not.toBeInTheDocument();
    expect(screen.queryByText("Lilibeth Gonçalves")).not.toBeInTheDocument();
  });

  it("shows See More button when knowMore is true", () => {
    render(<DepartmentsSection knowMore />);

    expect(screen.getByRole("link", { name: /ver mais/i })).toBeInTheDocument();
  });

  it("does not show See More button when knowMore is false", () => {
    render(<DepartmentsSection knowMore={false} />);

    expect(screen.queryByRole("link", { name: /ver mais/i })).not.toBeInTheDocument();
  });
});
