import React from "react";
import Card from "./Cards/Card";

function RankSection({ team }) {
  return (
    <div className="my-12 flex flex-wrap gap-10 md:justify-between justify-center">
      {team.map(({ name, image }, i) => (
        <Card
          imgContain
          className={"w-[220px] h-[300px]"}
          key={i}
          imageSrc={image}
          title={name}
        />
      ))}
    </div>
  );
}

export default RankSection;
