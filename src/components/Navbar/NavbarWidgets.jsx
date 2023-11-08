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
    <Button label={t("common.buttons.registration")} className="text-sm" />
  );
};

const CompanyLogo = ({ isLargeMenu = true }) => {
  const t = useTranslations();
  return (
    <Link href="/" className="flex items-center">
      <Image
        width={70}
        height={70}
        className=""
        src="/images/logo.png"
        alt=""
      />
      <p
        className={`${barlow.className} uppercase ${
          isLargeMenu && "hidden sm:block"
        } text-blue mx-5 font-semibold text-l`}
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
    "/images/navbar/company/cmff.png",
    "/images/navbar/company/educação.png",
    "/images/navbar/company/escola.png",
    "/images/navbar/company/madeira.png"
  ];
  const IMAGE_SIZE = 77;

  return (
    <div className={`${styles.sponsors} items-center`}>
      {/* Basket */}
      <div>
        <Image
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          src="/images/navbar/basket/hospital.png"
          alt="Hospital Particular da Madeira"
        />
      </div>

      {/* Company */}
      <div className="flex gap-5">
        {companyImages?.map((image, index) => (
          <Image
            key={index}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
            src={image}
            alt="CDEFF - Patrocinadores"
          />
        ))}
      </div>

      {/* Futsal */}
      <div>
        <Image
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          src="/images/navbar/futsal/tourigalo.png"
          alt="Tourigalo"
        />
      </div>
    </div>
  );
};

export { CTAButton, CompanyLogo, CloseButton, Sponsors };
