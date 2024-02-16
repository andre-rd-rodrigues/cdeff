import { barlow } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const t = useTranslations();

  return (
    <>
      <div className="flex mb-4 overflow-scroll sm:overflow-auto">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-4 py-2 uppercase ${
              barlow.className
            } tracking-wider font-medium text-blue md:text-xl  ${
              activeTab === tab.name ? "border-b-4 border-blue" : "opacity-50"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {t(tab.name)}
          </button>
        ))}
      </div>
      {tabs.map(
        (tab) =>
          activeTab === tab.name && <div key={tab.name}>{tab.content}</div>
      )}
    </>
  );
}
