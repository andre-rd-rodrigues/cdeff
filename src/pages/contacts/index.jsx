import IconContact from "@/components/IconContact";
import PageHeader from "@/components/PageHeader/PageHeader";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { getTranslations } from "@/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React from "react";

const Contacts = () => {
  const t = useTranslations();
  const { locale } = useRouter();

  const translations = getTranslations(locale);
  const contactItems = translations.pages.contacts.contactItems;

  return (
    <main>
      <PageHeader
        title={t("pages.contacts.title")}
        image={"https://i.postimg.cc/J0qZK4n5/contactos.jpg"}
      />
      <Section>
        <SectionTitle
          title={t("pages.contacts.subtitle")}
          className={"text-center"}
        />
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4 flex justify-center">
            <div className="max-w-md">
              <p>{t("pages.contacts.description")}</p>
              <div className="flex flex-col items-start mt-7 gap-4">
                {contactItems.map(({ description, icon, href }, i) => (
                  <IconContact
                    className="font-semibold"
                    icon={icon}
                    contact={description}
                    key={i}
                    href={href}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:w-1/2">
            <div className="relative w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.2652195880873!2d-16.905528999999998!3d32.652385699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc60600ec8462981%3A0x462e99880fa45fe8!2sFrancisco%20Franco%20High%20School!5e0!3m2!1sen!2spt!4v1698970763138!5m2!1sen!2spt"
                className="absolute top-0 left-0 w-full h-full border-none"
                loading="lazy"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Contacts;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
