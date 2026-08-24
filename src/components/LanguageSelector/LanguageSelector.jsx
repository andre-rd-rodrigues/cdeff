"use client";

import { barlow } from "@/styles/fonts";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const linksClasses = `text-l leading-6 text-dark font-normal uppercase ${barlow.className}`;

function LanguageSelector({ mobile, handleCloseMenu }) {
  const t = useTranslations();
  const pathname = usePathname();

  const isDisabled =
    (pathname.includes("/blog/") && pathname !== "/blog") || (pathname.includes("/tournaments/") && pathname !== "/tournaments");

  if (isDisabled) return;

  const languages = [
    { locale: "en", label: "English" },
    { locale: "pt", label: "Português" }
  ];

  if (mobile) {
    return (
      <Disclosure as="div">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full text-xl text-l items-center justify-between px-3 ${linksClasses}`}
            >
              <div className="flex items-center gap-2 -ml-1">
                <Icon
                  icon="ph:globe-thin"
                  fontSize={28}
                  className="text-dark"
                />
                {t("components.languageSelector.title")}
              </div>
              <ChevronDownIcon
                className={`h-5 w-5 flex-none transition-transform duration-slow ease-smooth ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </Disclosure.Button>

            <div
              className="grid transition-[grid-template-rows] duration-slow ease-smooth"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <Disclosure.Panel static className="mt-2 space-y-2">
                  {languages.map(({ locale, label }, j) => (
                    <Disclosure.Button
                      key={locale}
                      as={Link}
                    href={pathname}
                    locale={locale}
                    className={`block py-2 pl-6 pr-3 transition-all duration-slow ease-smooth ${linksClasses} ${
                        open
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-1"
                      }`}
                      style={{ transitionDelay: open ? `${j * 50}ms` : "0ms" }}
                      onClick={() => handleCloseMenu(false)}
                    >
                      {label}
                    </Disclosure.Button>
                  ))}
                </Disclosure.Panel>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    );
  }

  return (
    <Popover className="relative ml-8">
      <Popover.Button
        className={`group flex outline-none items-center gap-x-1 ${linksClasses}`}
      >
        <Icon
          icon="ph:globe-thin"
          fontSize={28}
          className="text-dark group-hover:text-[var(--red)] transition-colors duration-normal ease-smooth"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1 scale-95"
        enterTo="opacity-100 translate-y-0 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0 scale-100"
        leaveTo="opacity-0 translate-y-1 scale-95"
      >
        <Popover.Panel className="absolute top-full right-0 z-10 mt-3 overflow-hidden bg-white shadow-lg rounded-lg border border-gray-100">
          <div>
            {languages.map(({ locale, label }) => (
              <Popover.Button
                key={locale}
                as={Link}
                href={pathname}
                locale={locale}
                className={`group relative whitespace-nowrap flex items-center px-9 py-4 text-m hover:bg-gray-50 hover:border-l-2 hover:border-red hover:pl-[34px] uppercase ${barlow.className} tracking-wide transition-all duration-fast ease-smooth`}
              >
                {label}
              </Popover.Button>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default LanguageSelector;
