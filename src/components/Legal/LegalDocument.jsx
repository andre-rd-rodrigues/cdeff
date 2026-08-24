"use client";

import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import useTranslationArray from "@/hooks/useTranslationsArray";
import { useTranslations } from "next-intl";

const LegalDocument = ({ translationKey, image }) => {
  const t = useTranslations();
  const sections = useTranslationArray(`${translationKey}.sections`);

  const toParagraphs = (body) => (Array.isArray(body) ? body : [body]);

  return (
    <main>
      <PageHeader title={t(`${translationKey}.title`)} image={image} />
      <Section containerClassName={"m-auto max-w-4xl"} variant="pattern-dots">
        <p className="text-sm text-gray-500 mb-4">
          {t(`${translationKey}.lastUpdated`)}
        </p>
        <p className="mb-10 text-gray-700 leading-relaxed">
          {t(`${translationKey}.intro`)}
        </p>

        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <SectionTitle
              title={section.heading}
              isSubSectionTitle
              hideAccent
            />
            {toParagraphs(section.body).map((paragraph, i) => (
              <p key={i} className="mb-3 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </Section>
    </main>
  );
};

export default LegalDocument;
