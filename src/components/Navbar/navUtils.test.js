import { getNavLinkState } from "./navUtils";

const tournaments = { href: "/tournaments", subLinks: null };
const about = {
  href: "/about",
  subLinks: [
    { name: "About", href: "/about" },
    { name: "Departments", href: "/about#departments" },
    { name: "Sponsors", href: "/about/sponsors" }
  ]
};
const modalidades = {
  href: null,
  subLinks: [
    { name: "Basketball", href: "/basketball" },
    { name: "Futsal", href: "/futsal" }
  ]
};

describe("getNavLinkState", () => {
  describe("simple link", () => {
    it("is active (underline) on an exact match", () => {
      expect(getNavLinkState("/tournaments", tournaments)).toEqual({
        isActive: true,
        hasActiveChild: false
      });
    });

    it("flags a sub-section (red dot) on a child route", () => {
      expect(getNavLinkState("/tournaments/summer-cup", tournaments)).toEqual({
        isActive: false,
        hasActiveChild: true
      });
    });

    it("ignores trailing slashes", () => {
      expect(getNavLinkState("/tournaments/", tournaments)).toEqual({
        isActive: true,
        hasActiveChild: false
      });
    });

    it("is neither active nor a child for unrelated routes", () => {
      expect(getNavLinkState("/store", tournaments)).toEqual({
        isActive: false,
        hasActiveChild: false
      });
    });
  });

  describe("dropdown with an own page", () => {
    it("underlines the parent when on its own page", () => {
      expect(getNavLinkState("/about", about)).toEqual({
        isActive: true,
        hasActiveChild: false
      });
    });

    it("shows the red dot when on a sub-link page", () => {
      expect(getNavLinkState("/about/sponsors", about)).toEqual({
        isActive: false,
        hasActiveChild: true
      });
    });

    it("treats a hash-only sub-link as the own page", () => {
      expect(getNavLinkState("/about", about)).toEqual({
        isActive: true,
        hasActiveChild: false
      });
    });
  });

  describe("dropdown without an own page", () => {
    it("never underlines but shows the red dot for a sub-link", () => {
      expect(getNavLinkState("/basketball", modalidades)).toEqual({
        isActive: false,
        hasActiveChild: true
      });
    });

    it("shows the red dot for a nested sub-link route", () => {
      expect(getNavLinkState("/basketball/membership", modalidades)).toEqual({
        isActive: false,
        hasActiveChild: true
      });
    });
  });
});
