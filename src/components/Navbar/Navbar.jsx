"use client";

import { barlow } from "@/styles/fonts";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import enTranslations from "../../messages/en.json";
import ptTranslations from "../../messages/pt.json";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Dropdown from "./Dropdown";

import { useLocale } from "next-intl";
import { CloseButton, CompanyLogo } from "./NavbarWidgets";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = useLocale();

  const translations = locale === "en" ? enTranslations : ptTranslations;
  const links = translations.components.navbar.links;

  const linksClasses = `text-l leading-6 text-dark font-normal uppercase ${barlow.className} nav-link`;
  const mobileLinksClasses = `text-l leading-6 text-dark font-normal uppercase ${barlow.className}`;

  return (
    <header className="fixed z-50 w-full px-3 pt-3">
      <nav
        className="mx-auto bg-white/75 backdrop-blur-xl border border-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.06)] rounded-2xl flex items-center justify-between p-6 lg:px-8"
        aria-label="CDEFF"
      >
        <div className="flex xl:flex-1">
          <CompanyLogo />
        </div>

        {/* Large menu */}
        <div className="flex xl:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
        <div className="hidden xl:flex">
          <LanguageSelector />
        </div>
      </nav>

      {/* Mobile menu */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="xl:hidden relative z-50"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
          >
            <Dialog.Panel className="fixed inset-y-3 right-3 z-50 w-50 overflow-y-auto bg-white/75 backdrop-blur-xl border border-white/60 px-6 py-6 sm:max-w-sm rounded-2xl shadow-2xl">
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
                              <Disclosure.Button
                                className={`flex w-full text-xl text-l items-center justify-between px-3 ${mobileLinksClasses}`}
                              >
                                {name}
                                <ChevronDownIcon
                                  className={`h-5 w-5 flex-none transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                    open ? "rotate-180" : ""
                                  }`}
                                  aria-hidden="true"
                                />
                              </Disclosure.Button>

                              <div
                                className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                style={{
                                  gridTemplateRows: open ? "1fr" : "0fr"
                                }}
                              >
                                <div className="overflow-hidden">
                                  <Disclosure.Panel
                                    static
                                    className="mt-2 space-y-2"
                                  >
                                    {subLinks.map(({ name, href }, j) => (
                                      <Disclosure.Button
                                        key={name}
                                        as="a"
                                        href={href}
                                        className={`block py-2 pl-6 pr-3 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileLinksClasses} ${
                                          open
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 -translate-y-1"
                                        }`}
                                        style={{
                                          transitionDelay: open
                                            ? `${j * 50}ms`
                                            : "0ms"
                                        }}
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {name}
                                      </Disclosure.Button>
                                    ))}
                                  </Disclosure.Panel>
                                </div>
                              </div>
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
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Navbar;
