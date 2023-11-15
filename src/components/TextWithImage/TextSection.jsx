import { barlow } from "@/styles/fonts";
import Button from "../Button/Button";
import Link from "next/link";
import { use } from "react";
import { useTranslations } from "next-intl";

const TextSection = ({
  subtitle,
  title,
  description,
  labelOptions,
  location,
  schedule,
  contact
}) => {
  const t = useTranslations();
  const { href, label } = labelOptions || {};

  return (
    <div className="w-full md:w-1/2 flex p-0 sm:p-4 justify-center items-center">
      <div>
        <h3 className="subtitle uppercase font-semibold tracking-wide mt-5 sm:mt-0">
          {subtitle}
        </h3>
        <h2 className={`${barlow.className} section-header`}>{title}</h2>
        <p className="text-justify">{description}</p>
        {location && (
          <p className="my-3">
            <span className="text-blue font-medium">
              {t("common.pages.location")}:{" "}
            </span>
            {location}
          </p>
        )}
        {schedule && (
          <div className="mb-3">
            <p className="text-blue font-medium">
              {t("common.pages.schedule")}:
            </p>
            <ul className="font-extralight">
              {schedule?.map((item, index) => (
                <li key={index} className="list-inside list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {contact && <p className="mb-6">{contact}</p>}
        {labelOptions && (
          <div className="text-right md:text-left">
            <Link href={href} className="w-full">
              <Button label={label} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextSection;
