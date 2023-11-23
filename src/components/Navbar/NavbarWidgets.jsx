import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { barlow } from "@/styles/fonts";
import styles from "./navbar.module.scss";

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
      <Image width={70} height={70} src="/images/logo.png" alt="" />
      <p
        className={`${barlow.className} uppercase -translate-y-2 ${
          isLargeMenu && "hidden sm:block"
        } text-blue mx-2 mr-5 font-semibold text-l`}
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

const Sponsors = () => {
  const companyImages = [
    "/images/navbar/company/cmf.png",
    "/images/navbar/company/educação.png",
    "/images/navbar/company/escola.png",
    "/images/navbar/company/madeira.png"
  ];
  const IMAGE_STYLE = "w-[80px] h-[50px] relative";

  return (
    <div
      className={`${styles.sponsors} py-2 flex items-center justify-center gap-6`}
    >
      {/* Basket */}
      <div className={IMAGE_STYLE}>
        <Image
          fill
          style={{ objectFit: "contain" }}
          src="/images/navbar/basket/hospital.png"
          alt="Hospital Particular da Madeira"
        />
      </div>

      {/* Company */}
      {companyImages?.map((image, index) => (
        <div
          key={index}
          className={`${
            image.includes("educação")
              ? "w-[230px] h-[70px] relative"
              : IMAGE_STYLE
          }`}
        >
          <Image
            fill
            style={{ objectFit: "contain" }}
            src={image}
            alt="CDEFF - Patrocinadores"
          />
        </div>
      ))}

      {/* Futsal */}
      <div className={IMAGE_STYLE}>
        <Image
          fill
          style={{ objectFit: "contain" }}
          src="/images/navbar/futsal/tourigalo.png"
          alt="Tourigalo"
        />
      </div>
    </div>
  );
};

export { CTAButton, CompanyLogo, CloseButton, Sponsors };
