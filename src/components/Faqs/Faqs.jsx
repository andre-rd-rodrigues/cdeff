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
              <Disclosure.Button className="flex items-center focus:outline-none">
                {open ? (
                  <MinusIcon className="text-blue w-7" />
                ) : (
                  <PlusIcon fontSize={50} className="text-blue w-7" />
                )}

                <h1
                  className={`${barlow.className} text-start mx-4 uppercase text-blue text-xl font-medium`}
                >
                  {question}
                </h1>
              </Disclosure.Button>

              <Transition
                as={React.Fragment}
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
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
