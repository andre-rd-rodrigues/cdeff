import { headConfig } from "@/constants";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const AppHead = (props) => {
  const router = useRouter();
  const t = useTranslations();
  const { pathname, locale } = router;
  const { title: titleTranslation } = headConfig[pathname] || {
    title: "notFoundTitle"
  };

  const { openGraph } = props;

  const title = t(`common.metadata.${titleTranslation}`);
  const description = t("common.metadata.description");

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={
        openGraph
          ? openGraph
          : {
              url: `https://www.cdeff.com`,
              title,
              description,
              locale,
              images: [
                {
                  url:
                    locale === "pt"
                      ? "/images/meta/meta-pt.webp"
                      : "/images/meta/meta-en.webp",
                  alt: title
                }
              ]
            }
      }
      {...props}
    />
  );
};

export default AppHead;
