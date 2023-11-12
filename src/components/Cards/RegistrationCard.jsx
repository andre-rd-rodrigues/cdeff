import React, { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { barlow } from "@/styles/fonts";
import Link from "next/link";
import { LANGUAGE, languagesCodes } from "@/utils";
import { Popover, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";

const RegistrationCard = ({
  title,
  description,
  subTitle,
  imageSrc,
  className,
  links
}) => {
  const [selectedCountry, setSelectedCountry] = useState(LANGUAGE.PT);

  const t = useTranslations();

  return (
    <div
      className={`relative flex flex-col shadow-xl max-w-[320px] ${className}`}
    >
      <div className="relative h-[350px]">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          style={{
            objectFit: "cover"
          }}
        />
      </div>
      <div className="flex-grow p-6 pb-9 flex flex-col justify-between">
        <div>
          <h4
            className={`${barlow.className} text-blue text-center text-xl font-semibold uppercase break-words`}
          >
            {title}
          </h4>
          {subTitle && (
            <p className="text-center text-gray-500 text-sm font-medium mt-1 break-words">
              {subTitle}
            </p>
          )}
          <p className=" text-gray-700 text-justify text-sm break-words mt-4 mb-6">
            {description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <Link href={links[selectedCountry]} target="_blank">
            <Button
              label={t("common.buttons.registration")}
              onClick={() => null}
            />
          </Link>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className={`form-select py-2 block w-full px-2 ${barlow.className} text-lg tracking-wide`}
          >
            {languagesCodes.map(({ language, code }) => (
              <option key={code} value={code}>
                {language}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCard;
