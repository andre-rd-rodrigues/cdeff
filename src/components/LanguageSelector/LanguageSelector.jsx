import { barlow } from "@/styles/fonts";
import { Popover, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

function LanguageSelector() {
  const { locale, route } = useRouter();

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
          <Link
            href={route}
            locale={"en"}
            className={`group relative flex items-center px-9 py-4 text-m  hover:bg-gray-50 uppercase ${barlow.className} tracking-wide`}
          >
            English
          </Link>
          <Link
            href={route}
            locale={"pt"}
            className={`group relative flex items-center px-9 py-4 text-m  hover:bg-gray-50 uppercase ${barlow.className} tracking-wide`}
          >
            Português
          </Link>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default LanguageSelector;
