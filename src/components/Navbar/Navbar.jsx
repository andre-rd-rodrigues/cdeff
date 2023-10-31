"use client";
import { barlow } from "@/styles/fonts";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import enTranslations from "../../messages/en.json";
import ptTranslations from "../../messages/pt.json";
import Button from "../Button/Button";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Dropdown from "./Dropdown";
import styles from "./navbar.module.scss";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = useTranslations();
  const { locale } = useRouter();

  const translations = locale === "en" ? enTranslations : ptTranslations;
  const links = translations.components.navbar.links;

  const linksClasses = `text-l leading-6 text-dark font-normal uppercase ${barlow.className}`;

  // Components -----------------------------
  const CTAButton = (
    <Button label={t("common.buttons.registration")} className="text-sm" />
  );

  const CompanyLogo = (
    <Link href="/" className="flex items-center">
      <Image
        width={70}
        height={70}
        className=""
        src="/images/logo.png"
        alt=""
      />
      <p
        className={`${barlow.className} uppercase text-blue mx-5 font-semibold text-l`}
      >
        {t("components.navbar.title")}
      </p>
    </Link>
  );

  const CloseButton = (
    <button
      type="button"
      className="-m-2.5 rounded-md p-2.5 text-gray-700"
      onClick={() => setMobileMenuOpen(false)}
    >
      <span className="sr-only">Close menu</span>
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );

  //------------------------------------------

  return (
    <header className="fixed z-10 w-full">
      <nav
        className="mx-auto bg-white flex items-center justify-between p-6 lg:px-8 "
        aria-label="CDEFF"
      >
        <div className="flex lg:flex-1">{CompanyLogo}</div>

        {/* Large menu */}
        <div className="flex lg:hidden">
          {CTAButton}
          <button
            type="button"
            className="-m-2.5 ml-4 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8">
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LanguageSelector />
          {CTAButton}
        </div>
      </nav>
      {/* Mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {CompanyLogo}
            {CloseButton}
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-5 py-6">
                {links.map(({ href, name, subLinks }, i) =>
                  subLinks ? (
                    <Disclosure as="div" key={i}>
                      {({ open }) => (
                        <>
                          {/* Navbar link */}
                          <Disclosure.Button
                            className={`flex w-full items-center justify-between px-3 ${linksClasses}`}
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
                      >
                        {name}
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/* Sponsors */}
      <div className={styles.sponsors}>
        <div>
          <Image width={40} height={40} src="/images/sponsor.png" />
        </div>
        <div>
          <Image width={40} height={40} src="/images/sponsor.png" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}