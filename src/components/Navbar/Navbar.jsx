import { barlow } from "@/styles/fonts";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import enTranslations from "../../messages/en.json";
import ptTranslations from "../../messages/pt.json";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Dropdown from "./Dropdown";

import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";
import { CTAButton, CloseButton, CompanyLogo, Sponsors } from "./NavbarWidgets";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const { locale } = useRouter();

  const translations = locale === "en" ? enTranslations : ptTranslations;
  const links = translations.components.navbar.links;

  const linksClasses = `text-l leading-6 text-dark font-normal uppercase ${barlow.className}`;

  return (
    <header className="fixed z-50 w-full">
      <nav
        className="mx-auto bg-white flex items-center justify-between p-6 lg:px-8"
        aria-label="CDEFF"
      >
        <div className="flex xl:flex-1">
          <CompanyLogo />
        </div>

        {/* Large menu */}
        <div className="flex xl:hidden">
          <CTAButton />
          <button
            type="button"
            className="-m-2.5 ml-4 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden xl:flex xl:gap-x-8">
          {links.map(({ href, name, subLinks }, i) =>
            subLinks ? (
              <Dropdown link={name} subLinks={subLinks} key={i} />
            ) : (
              <Link href={href} className={linksClasses} key={name}>
                {name}
              </Link>
            )
          )}
        </Popover.Group>
        <div className="hidden xl:flex xl:flex-1 xl:justify-end">
          <LanguageSelector />
          <CTAButton />
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-50 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm ring-1 ring-gray-900/10">
          <div className="flex items-center justify-between">
            <CompanyLogo isLargeMenu={false} />
            <CloseButton handleClose={() => setMobileMenuOpen(false)} />
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-5 py-6">
                {links.map(({ href, name, subLinks }, i) =>
                  subLinks ? (
                    <Disclosure as="div" key={i}>
                      {({ open, close }) => (
                        <>
                          {/* Navbar link */}
                          <Disclosure.Button
                            className={`flex w-full text-xl text-l items-center justify-between px-3 ${linksClasses}`}
                          >
                            {name}
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>

                          {/* Navbar sublinks */}
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {subLinks.map(({ name, href }) => (
                              <Disclosure.Button
                                key={name}
                                as="a"
                                href={href}
                                className={`block py-2 pl-6 pr-3 ${linksClasses}`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <div data-headlessui-state key={i}>
                      <Link
                        href={href}
                        className={`text-xl p-3 leading-6 text-dark font-normal uppercase ${barlow.className} tracking-wide`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {name}
                      </Link>
                    </div>
                  )
                )}
                <LanguageSelector
                  mobile
                  handleCloseMenu={() => setMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/* Sponsors */}
      {!isMobile && <Sponsors />}
    </header>
  );
};

export default Navbar;
