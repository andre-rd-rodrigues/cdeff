function cleanPath(path) {
  const withoutHash = (path || "").split("#")[0];
  const trimmed = withoutHash.replace(/\/+$/, "");
  return trimmed || "/";
}

function isChildPath(current, base) {
  return base !== "/" && current.startsWith(`${base}/`);
}

/**
 * Resolves how a top-level nav link should react to the current route.
 *
 * - `isActive`: the current page IS this link's page -> show the underline.
 * - `hasActiveChild`: the current page is a sub-section of this link (a child
 *   route or one of its dropdown sub-links) -> show the red notification dot on
 *   the parent link.
 */
export function getNavLinkState(pathname, { href, subLinks } = {}) {
  const current = cleanPath(pathname);
  const ownHref = href ? cleanPath(href) : null;

  const isActive = ownHref !== null && current === ownHref;

  const matchesSubLink =
    subLinks?.some((sub) => {
      const subHref = cleanPath(sub.href);
      return current === subHref || isChildPath(current, subHref);
    }) ?? false;

  const hasActiveChild =
    !isActive &&
    ((ownHref !== null && isChildPath(current, ownHref)) || matchesSubLink);

  return { isActive, hasActiveChild };
}
