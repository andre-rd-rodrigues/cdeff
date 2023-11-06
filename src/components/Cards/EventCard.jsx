import { barlow } from "@/styles/fonts";
import { DATE_FORMAT_HOURS } from "@/utils";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";

function EventCard({ event }) {
  const t = useTranslations();

  const { locale } = useRouter();

  const { title, description, date, image, slug, location } = event;

  return (
    <Link
      href={`/blog/${slug}`}
      className="relative flex flex-col shadow-xl max-w-sm"
    >
      <div className="relative h-[450px]">
        <Image
          src={image}
          alt={title}
          layout="fill"
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
          <p className="text-sm font-light text-gray-400">
            {dayjs(date).locale(locale).format(DATE_FORMAT_HOURS)}
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
