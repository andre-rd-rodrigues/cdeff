import React from "react";
import Container from "./Container/Container";
import Link from "next/link";
import Image from "next/image";
import { barlow } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import { getTranslations } from "@/utils";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { Sponsors } from "./Navbar/NavbarWidgets";
import useIsMobile from "@/hooks/useIsMobile";

const Footer = () => {
  const t = useTranslations();
  const { locale } = useRouter();
  const isMobile = useIsMobile();

  const translations = getTranslations(locale);
  const isContactSections = (title) =>
    title === "Contacts" || title === "Contactos";

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

  const FooterSection = ({ title, sectionHref, subLinks }) => (
    <div>
      <h2
        className={`text-m font-medium mb-2 tracking-wider text-white uppercase ${barlow.className}`}
      >
        {title}
      </h2>
      <ul className="text-white opacity-95 font-thin">
        {subLinks?.map(({ name, href, icon }, i) =>
          isContactSections(title) ? (
            <li key={i}>
              <Link
                href={href}
                className="hover:underline flex gap-1 items-center mb-2 mt-1"
              >
                <Icon icon={icon} fontSize={15} />
                <p className="text-xs">{name}</p>
              </Link>
            </li>
          ) : (
            <li key={i}>
              <Link href={href} className="hover:underline text-xs">
                {name}
              </Link>
            </li>
          )
        )}

        {/* When no sub links are provided */}
        {!subLinks && !isContactSections(title) && (
          <li>
            <Link href={sectionHref} className="hover:underline text-xs">
              {title}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );

  const FooterSocial = ({ sport, hrefs }) => (
    <div className="text-white gap-3 flex items-center">
      <p className={`${barlow.className} uppercase tracking-wider mr-2`}>
        {sport}
      </p>
      <Link href={hrefs.insta} target="_blank">
        <Icon className="opacity-50 hover:opacity-100" icon="bi:instagram" />
      </Link>
      <Link href={hrefs.facebook} target="_blank">
        <Icon
          className="opacity-50 hover:opacity-100"
          icon="ic:baseline-facebook"
        />
      </Link>
    </div>
  );

  return (
    <>
      {isMobile && (
        <div className="bg-white bg-opacity-50">
          <Sponsors />
        </div>
      )}
      <footer className="bg-blue">
        <Container className="py-7">
          <div className="flex gap-20 justify-center">
            <FooterSocial
              sport={t("common.sports.futsal")}
              hrefs={{
                insta: "https://www.instagram.com/cde.francisco.franco.futsal/",
                facebook: "https://www.facebook.com/futsaltotal/"
              }}
            />
            <FooterSocial
              sport={t("common.sports.basketball")}
              hrefs={{
                facebook:
                  "https://www.facebook.com/profile.php?id=100057176091745",
                insta: "https://www.instagram.com/francisco_franco_basket/"
              }}
            />
          </div>
          <hr className="my-6 border-gray-400 mx-auto opacity-50" />
          <div className="md:flex md:justify-between ">
            <div className="mb-6 md:mb-0">{CompanyLogo}</div>
            <div className="flex flex-wrap gap-5 justify-between sm:justify-normal">
              {footerLinks.map(({ name, href, subLinks }, i) => (
                <FooterSection
                  key={i}
                  title={name}
                  subLinks={subLinks}
                  sectionHref={href}
                />
              ))}
            </div>
          </div>
          <div className="text-center">
            <span className="text-sm font-light text-gray-400">
              © 2023{" "}
              <a
                href="https://andrerodrigo.com"
                className="text-sm text-white hover:underline"
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
    </>
  );
};

export default Footer;
