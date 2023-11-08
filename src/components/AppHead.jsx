import { headConfig } from "@/utils";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

const AppHead = (props) => {
  const router = useRouter();
  const t = useTranslations();
  const { pathname } = router;
  const { title: titleTranslation } = headConfig[pathname] || {};

  const { openGraph } = props;

  const title = t(`common.metadata.${titleTranslation}`);
  const description = t("common.description.metadata");

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
              images: [
                {
                  url: "/images/meta-image.png",
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
