import { Disclosure } from "@headlessui/react";
import React, { useRef } from "react";

import useTranslationArray from "@/hooks/useTranslationsArray";
import { barlow } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import { renderAnswerWithLinks } from "./faqs.utils";

function ArrowIcon({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        open ? "rotate-180" : "rotate-0"
      }`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqItem({ question, answer, index, t }) {
  const panelRef = useRef(null);

  return (
    <Disclosure>
      {({ open }) => (
        <div
          className="group"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <Disclosure.Button
            className="flex w-full items-center justify-between py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/20 focus-visible:rounded-lg cursor-pointer"
          >
            <h3
              className={`${barlow.className} text-start text-lg md:text-xl font-medium tracking-wide text-[var(--blue)] transition-colors duration-300 group-hover:text-[var(--red)] pr-4`}
            >
              {question}
            </h3>

            <span
              className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open
                  ? "bg-[var(--blue)] text-white"
                  : "bg-[var(--blue)]/[0.06] text-[var(--blue)] group-hover:bg-[var(--blue)]/[0.12]"
              }`}
            >
              <ArrowIcon open={open} />
            </span>
          </Disclosure.Button>

          <div
            ref={panelRef}
            className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              gridTemplateRows: open ? "1fr" : "0fr"
            }}
          >
            <div className="overflow-hidden">
              <Disclosure.Panel
                static
                className="pb-6 pr-12"
              >
                <div
                  className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  {renderAnswerWithLinks(answer, t)}
                </div>
              </Disclosure.Panel>
            </div>
          </div>

          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(39,62,121,0.12) 20%, rgba(39,62,121,0.12) 80%, transparent)"
            }}
          />
        </div>
      )}
    </Disclosure>
  );
}

function Faqs() {
  const t = useTranslations();
  const faqs = useTranslationArray("pages.faqs.questions");

  return (
    <section className="space-y-0">
      {faqs.map(({ question, answer }, i) => (
        <FaqItem
          key={i}
          question={question}
          answer={answer}
          index={i}
          t={t}
        />
      ))}
    </section>
  );
}

export default Faqs;
