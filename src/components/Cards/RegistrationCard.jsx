import Button from "@/components/Button/Button";
import { barlow } from "@/styles/fonts";
import { LANGUAGE, languagesCodes } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RegistrationCard = ({
  title,
  description,
  subTitle,
  imageSrc,
  className,
  links,
  href
}) => {
  const [selectedCountry, setSelectedCountry] = useState(LANGUAGE.PT);

  const t = useTranslations();

  return (
    <div className={`relative flex flex-col shadow-xl w-[320px] ${className}`}>
      <div className="relative h-[350px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
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

        {!links && href && (
          <div className="w-full text-center">
            <Link href={href} target="_blank">
              <Button label={t("common.buttons.registration")} />
            </Link>
          </div>
        )}

        {links && (
          <div className="flex justify-between items-center">
            <Link href={links[selectedCountry]} target="_blank">
              <Button label={t("common.buttons.registration")} />
            </Link>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className={`form-select py-[5.7px] block w-full px-2 ${barlow.className} text-lg tracking-wide`}
            >
              {languagesCodes.map(({ language, code }) => (
                <option key={code} value={code}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationCard;
