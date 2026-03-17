import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "pt"],
  defaultLocale: "pt",
  pathnames: {
    "/": "/",
    "/about": { en: "/about", pt: "/sobre" },
    "/about/sponsors": { en: "/about/sponsors", pt: "/sobre/patrocinadores" },
    "/activities": { en: "/activities", pt: "/atividades" },
    "/basketball": { en: "/basketball", pt: "/basquetebol" },
    "/basketball/membership": {
      en: "/basketball/membership",
      pt: "/basquetebol/programa-de-socios"
    },
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
    "/contacts": { en: "/contacts", pt: "/contactos" },
    "/faqs": { en: "/faqs", pt: "/perguntas-frequentes" },
    "/futsal": "/futsal",
    "/registrations": { en: "/registrations", pt: "/inscricoes" },
    "/store": { en: "/store", pt: "/loja" },
    "/tournaments": { en: "/tournaments", pt: "/torneios" },
    "/tournaments/[slug]": {
      en: "/tournaments/[slug]",
      pt: "/torneios/[slug]"
    }
  }
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export function parseHref(href) {
  if (typeof href !== "string" || !href.includes("#")) return href;
  const [pathname, hash] = href.split("#");
  return { pathname: pathname || "/", hash };
}
