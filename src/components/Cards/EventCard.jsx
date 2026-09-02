"use client";

import { barlow } from "@/styles/fonts";
import { DATE_FORMAT, DATE_FORMAT_HOURS } from "@/constants";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Button from "../Button/Button";

function formatEventDate(dateStart, dateEnd, locale) {
  return `${dayjs(dateStart).locale(locale).format(DATE_FORMAT)} ${
    dateEnd ? `- ${dayjs(dateEnd).locale(locale).format(DATE_FORMAT)}` : ""
  }`;
}

function EventCard({ event, href }) {
  const t = useTranslations();
  const locale = useLocale();
  const { title, description, dateStart, dateEnd, image, location } = event;
  const formattedDate = formatEventDate(dateStart, dateEnd, locale);

  return (
    <Link href={href} className="relative flex flex-col max-w-xs card-lift bg-white">
      <div className="h-[3px] bg-red w-full" />
      <div className="relative h-[450px]">
        <Image
          src={image || "/images/metadata.png"}
          alt={title}
          fill
          sizes="(max-width: 640px) 90vw, 320px"
          style={{
            objectFit: "cover"
          }}
        />
      </div>
      <h2
        className={`${barlow.className} text-blue uppercase font-semibold text-2xl pt-7 px-7`}
      >
        {title}
      </h2>
      <div className="px-7 py-3">
        <div className="flex gap-2 items-center py-2">
          <Icon
            icon="solar:calendar-outline"
            className="text-red"
            fontSize={20}
          />
          <p className="text-sm font-light text-gray-400" suppressHydrationWarning>
            {formattedDate}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Icon
            icon="fluent:location-48-regular"
            className="text-red"
            fontSize={20}
          />
          <p className="text-sm font-light text-gray-400">{location}</p>
        </div>
      </div>

      <div className="px-7 pb-8">
        <p className="text-gray-700 mb-4 text-sm leading-7">{description}</p>
        <div className="text-center mb-1">
          <Button label={t("common.buttons.seeMore")} />
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
