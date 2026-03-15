"use client";

import { barlow } from "@/styles/fonts";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "@/i18n/routing";
import { Fragment } from "react";

function Dropdown({ subLinks, link }) {
  const linksClasses = `text-l leading-6 text-dark font-normal uppercase ${barlow.className}`;

  return (
    <Popover className="relative">
      <Popover.Button
        className={`flex outline-none items-center gap-x-1 ${linksClasses}`}
      >
        {link}
        <ChevronDownIcon
          className="h-5 w-5 flex-none text-gray-400"
          aria-hidden="true"
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
        <Popover.Panel className="absolute top-full z-10 mt-3 overflow-hidden bg-white shadow-lg rounded-lg border border-gray-100">
          <div>
            {subLinks.map(({ name, href }) => (
              <Popover.Button
                as={Link}
                href={href}
                key={name}
                className={`group relative whitespace-nowrap flex items-center px-9 py-4 text-m hover:bg-gray-50 hover:border-l-2 hover:border-red hover:pl-[34px] uppercase ${barlow.className} tracking-wide transition-all duration-150`}
              >
                {name}
              </Popover.Button>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Dropdown;
