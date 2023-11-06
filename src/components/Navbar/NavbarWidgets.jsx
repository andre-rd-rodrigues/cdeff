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
          isLargeMenu && "invisible sm:visible"
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
  return (
    <div className={styles.sponsors}>
      <div>
        <Image
          width={40}
          height={40}
          src="/images/sponsor.png"
          alt="sponsor-name"
        />
      </div>
      <div>
        <Image
          width={40}
          height={40}
          src="/images/sponsor.png"
          alt="sponsor-name"
        />
      </div>
    </div>
  );
};

export { CTAButton, CompanyLogo, CloseButton, Sponsors };
