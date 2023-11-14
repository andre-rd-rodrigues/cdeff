import React from "react";
import Card from "./Cards/Card";

function RankSection({ team }) {
  return (
    <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {team.map(({ name, image }, i) => (
        <Card
          imgContain
          className="w-full h-[300px]"
          key={i}
          imageSrc={image}
          title={name}
        />
      ))}
    </div>
  );
}

export default RankSection;
