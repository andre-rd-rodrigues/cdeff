import { barlow } from "@/styles/fonts";
import { useState } from "react";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <>
      <div className="flex mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-4 py-2 uppercase ${
              barlow.className
            } tracking-wider font-medium text-xl text-blue  ${
              activeTab === tab.name ? "border-b-4 border-blue" : "opacity-50"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
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
