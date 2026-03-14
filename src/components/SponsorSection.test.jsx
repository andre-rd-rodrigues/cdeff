import { render, screen } from "@/test-utils";
import SponsorSection from "./SponsorSection";

describe("SponsorSection", () => {
  it("renders images", () => {
    const images = ["/sponsor1.png", "/sponsor2.png"];

    render(<SponsorSection images={images} />);

    const imgs = screen.getAllByRole("img", { name: "CDEFF Patrocinadores" });
    expect(imgs).toHaveLength(2);
  });
});
