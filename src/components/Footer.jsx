import React from "react";
import Container from "./Container/Container";
import Link from "next/link";
import Image from "next/image";
import { barlow } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import { getTranslations } from "@/utils";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

const Footer = () => {
  const t = useTranslations();
  const { locale } = useRouter();

  const translations = getTranslations(locale);

  const footerLinks = translations.components.footer.links;

  const CompanyLogo = (
    <Link href="/" className="flex flex-col items-center gap-4">
      <Image
        width={100}
        height={100}
        className=""
        src="/images/logo.png"
        alt=""
      />
      <p
        className={`${barlow.className} uppercase text-white mx-5 font-semibold text-l`}
      >
        {t("components.navbar.title")}
      </p>
    </Link>
  );

  const FooterSection = ({ title, subLinks }) => (
    <div>
      <h2
        className={`mb-6 text-l font-medium tracking-wider text-white uppercase ${barlow.className}`}
      >
        {title}
      </h2>
      <ul className="text-white opacity-95 font-thin">
        {subLinks.map(({ name, href, icon }, i) =>
          title === "Contacts" ? (
            <li className="mb-4" key={i}>
              <Link
                href={href}
                className="hover:underline flex gap-1 items-center"
              >
                <Icon icon={icon} fontSize={15} />
                <p className="text-xs">{name}</p>
              </Link>
            </li>
          ) : (
            <li className="mb-4" key={i}>
              <Link href={href} className="hover:underline text-xs">
                {name}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );

  const FooterSocial = ({ sport }) => (
    <div className="text-white gap-3 flex items-center">
      <p className={`${barlow.className} uppercase tracking-wider mr-2`}>
        {sport}
      </p>
      <Link href="#">
        <Icon className="opacity-50 hover:opacity-100" icon="bi:instagram" />
      </Link>
      <Link href="#">
        <Icon
          className="opacity-50 hover:opacity-100"
          icon="ic:baseline-facebook"
        />
      </Link>
    </div>
  );

  return (
    <footer className="bg-blue">
      <Container className="py-7">
        <div className="flex gap-20 justify-center">
          <FooterSocial sport={t("common.sports.futsal")} />
          <FooterSocial sport={t("common.sports.basketball")} />
        </div>
        <hr className="my-6 border-gray-400 mx-auto opacity-50" />
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">{CompanyLogo}</div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {footerLinks.map(({ title, subLinks }, i) => (
              <FooterSection key={i} title={title} subLinks={subLinks} />
            ))}
          </div>
        </div>
        <div className="text-center">
          <span className="text-sm font-light text-gray-500 opacity-50">
            © 2023{" "}
            <a
              href="https://andrerodrigo.com"
              className="text-sm hover:text-white"
              target="_blank"
            >
              André Rodrigo
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0"></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
