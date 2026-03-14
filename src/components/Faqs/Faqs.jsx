import { Disclosure, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import React from "react";

import useTranslationArray from "@/hooks/useTranslationsArray";
import { barlow } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import { renderAnswerWithLinks } from "./faqs.utils";

function Faqs() {
  const t = useTranslations();
  const faqs = useTranslationArray("pages.faqs.questions");

  return (
    <section>
      {faqs.map(({ question, answer }, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center focus:outline-none group">
                <span
                  className={`text-blue w-7 flex-shrink-0 transition-transform duration-300 ${
                    open ? "rotate-45" : "rotate-0"
                  }`}
                  style={{ transformOrigin: "center" }}
                >
                  <PlusIcon className="w-7" />
                </span>

                <h1
                  className={`${barlow.className} text-start mx-4 uppercase text-blue text-xl font-medium group-hover:text-cyan transition-colors duration-200`}
                >
                  {question}
                </h1>
              </Disclosure.Button>

              <Transition
                as={React.Fragment}
                show={open}
                enter="transition-all ease-out duration-300 overflow-hidden"
                enterFrom="max-h-0 opacity-0"
                enterTo="max-h-96 opacity-100"
                leave="transition-all ease-in duration-200 overflow-hidden"
                leaveFrom="max-h-96 opacity-100"
                leaveTo="max-h-0 opacity-0"
              >
                <Disclosure.Panel className="flex mt-8 md:mx-10">
                  <p className="px-4 text-gray-700 ">
                    {renderAnswerWithLinks(answer, t)}
                  </p>
                </Disclosure.Panel>
              </Transition>

              <hr className="my-8 border-gray-300" />
            </>
          )}
        </Disclosure>
      ))}
    </section>
  );
}

export default Faqs;
