import { render, screen } from "@/test-utils";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  it("renders product title and price", () => {
    render(
      <ProductCard
        title="Test Product"
        price="25€"
        sizes={["S", "M", "L"]}
        image="/images/product.png"
      />
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("25€")).toBeInTheDocument();
  });

  it("renders sizes joined with |", () => {
    render(
      <ProductCard
        title="Test Product"
        sizes={["S", "M", "L"]}
        image="/images/product.png"
      />
    );

    expect(screen.getByText("S | M | L")).toBeInTheDocument();
  });

  it("renders Book button", () => {
    render(
      <ProductCard
        title="Test Product"
        image="/images/product.png"
      />
    );

    expect(screen.getByRole("button", { name: /reservar/i })).toBeInTheDocument();
  });

  it("with single image prop, renders that image", () => {
    render(
      <ProductCard
        title="Test Product"
        image="/images/single-product.png"
      />
    );

    const img = screen.getByRole("img", { name: "Test Product" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", expect.stringContaining("/images/single-product.png"));
  });
});
