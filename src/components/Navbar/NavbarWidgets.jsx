"use client";

import React from "react";
import Button from "../Button/Button";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { barlow } from "@/styles/fonts";
const CTAButton = () => {
  const t = useTranslations();
  return (
    <Link href="/registrations">
      <Button label={t("common.buttons.registrations")} className="text-sm" />
    </Link>
  );
};

const CompanyLogo = ({ isLargeMenu = true }) => {
  const t = useTranslations();
  return (
    <Link href="/" className="flex items-center">
      <Image width={46} height={46} src="https://i.ibb.co/Nd2xSDcm/logo.webp" alt="" />
      <p
        className={`${barlow.className} uppercase -translate-y-2 ${
          isLargeMenu && "hidden sm:block"
        } text-blue mx-2 mt-4 mr-5 font-semibold text-l`}
      >
        {t("components.navbar.title")}
      </p>
    </Link>
  );
};

const CloseButton = ({ handleClose }) => {
  return (
    <button
      type="button"
      className="-m-2.5 rounded-md p-2.5 text-gray-700"
      onClick={handleClose}
    >
      <span className="sr-only">Close menu</span>
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

const sponsorImages = [
  {
    src: "https://i.ibb.co/TqWPVWbP/hospital.webp",
    alt: "Hospital Particular da Madeira"
  },
  { src: "https://i.ibb.co/84BGm0cr/cmf.webp", alt: "CMF" },
  { src: "https://i.ibb.co/PZppG4Sz/educac-a-o.webp", alt: "Educação", wide: true },
  { src: "https://i.ibb.co/4Z6Z3fxw/escola.webp", alt: "Escola Francisco Franco" },
  { src: "https://i.ibb.co/hJLcSPsW/madeira.webp", alt: "Madeira" },
  { src: "https://i.ibb.co/4nQ0JLdD/tourigalo.webp", alt: "Tourigalo" }
];

const Sponsors = () => (
  <div className="w-full px-5 [&_img]:opacity-70 py-3 flex items-center justify-center gap-6 bg-blue/10 backdrop-blur-md border-y border-white/10 shadow-sm">
    {sponsorImages.map(({ src, alt, wide }) => (
      <div
        key={src}
        className={
          wide ? "w-[230px] h-[70px] relative" : "w-[80px] h-[50px] relative"
        }
      >
        <Image
          fill
          sizes={wide ? "230px" : "80px"}
          style={{ objectFit: "contain" }}
          src={src}
          alt={alt}
        />
      </div>
    ))}
  </div>
);

export { CTAButton, CompanyLogo, CloseButton, Sponsors };
