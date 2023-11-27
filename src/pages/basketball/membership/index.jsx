import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import useTranslationArray from "@/hooks/useTranslationsArray";
import Image from "next/image";

const { default: PageHeader } = require("@/components/PageHeader/PageHeader");
const { useTranslations } = require("next-intl");

function MembershipPage() {
  const t = useTranslations();

  const memberships = useTranslationArray("pages.membership.promotions");

  const DiscountComponent = ({ discounts }) => {
    return (
      <div className="mb-6">
        {discounts.map((discount, i) => (
          <div key={i} className="mb-4">
            {Object.keys(discount).map((percentage) => (
              <div key={percentage}>
                <h3 className="text-l font-normal text-dark">
                  {discount[percentage].title}:
                </h3>
                {discount[percentage].products &&
                  discount[percentage].products.length > 0 && (
                    <ul className="list-disc pl-5 ">
                      {discount[percentage].products.map((product, j) => (
                        <li
                          key={j}
                          className="text-xs text-dark font-light py-1"
                        >
                          {product}
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <main>
      <PageHeader
        title={t("pages.membership.title")}
        image={
          "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      {memberships.map(({ title, companies }, i) => (
        <Section key={i} containerClassName="-mb-12">
          <SectionTitle title={title} />
          {companies.map((company, i) => (
            <div key={i} className="mb-6">
              <div className="flex items-center gap-4">
                <div className={`relative overflow-hidden w-16 h-16`}>
                  <Image
                    src={company.image}
                    alt={company.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3 className="text-xl font-medium text-blue">
                  {company.businessName}
                </h3>
              </div>
              <div className="md:ml-20">
                {company.hasSubDiscounts ? (
                  <DiscountComponent discounts={company.discounts} />
                ) : (
                  <ul className="list-disc pl-5">
                    {company.discounts.map((discount, j) => (
                      <li key={j} className="text-s font-light py-1 text-dark">
                        {discount}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Notes */}
              {company.notes && (
                <ul className="pl-5 my-5">
                  {company.notes.map((note, i) => (
                    <li key={i} className="text-xs font-light py-1 text-dark">
                      {note}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>
      ))}
    </main>
  );
}

export default MembershipPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default
    }
  };
}
