import { barlow } from "@/styles/fonts";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const linksClasses = `text-l leading-6 text-dark font-normal uppercase ${barlow.className}`;

function LanguageSelector({ mobile, handleCloseMenu }) {
  const t = useTranslations();
  const { route } = useRouter();

  if (mobile) {
    return (
      <Disclosure as="div">
        {({ open }) => (
          <>
            {/* Navbar link */}
            <Disclosure.Button
              className={`flex w-full text-xl text-l items-center justify-between px-3 ${linksClasses}`}
            >
              <div className="flex items-center gap-2 -ml-1">
                <Icon
                  icon="ph:globe-thin"
                  fontSize={33}
                  className="text-dark"
                />
                {t("components.languageSelector.title")}
              </div>
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
              <Disclosure.Button
                as={Link}
                href={route}
                locale={"en"}
                className={`block py-2 pl-6 pr-3 ${linksClasses}`}
                onClick={() => handleCloseMenu(false)}
              >
                English
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href={route}
                locale={"pt"}
                className={`block py-2 pl-6 pr-3 ${linksClasses}`}
                onClick={() => handleCloseMenu(false)}
              >
                Português
              </Disclosure.Button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }
  return (
    <Popover className="relative mx-10 ">
      {/* Icon Button */}
      <Popover.Button className="h-full flex items-center justify-center focus:outline-none">
        <Icon icon="ph:globe-thin" fontSize={33} className="text-dark" />
      </Popover.Button>

      {/* Dropdown */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute top-full z-10 mt-2 overflow-hidden bg-white shadow-lg text-dark">
          <Popover.Button
            as={Link}
            href={route}
            locale={"en"}
            className={`group relative flex items-center px-9 py-4 text-m  hover:bg-gray-50 uppercase ${barlow.className} tracking-wide`}
          >
            English
          </Popover.Button>
          <Popover.Button
            as={Link}
            href={route}
            locale={"pt"}
            className={`group relative flex items-center px-9 py-4 text-m  hover:bg-gray-50 uppercase ${barlow.className} tracking-wide`}
          >
            Português
          </Popover.Button>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default LanguageSelector;
