import { SPORTS } from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function useSportSelect() {
  const { push, query } = useRouter();
  const { basketball } = query;

  const [isBasket, setIsBasket] = useState(
    basketball === "true" ? true : false
  );

  const updateSelectedSport = (sportSelected) => {
    const isBasketSelected = sportSelected === SPORTS.BASKETBALL;

    setIsBasket(isBasketSelected);

    push({ query: { [SPORTS.BASKETBALL]: isBasketSelected } }, undefined, {
      shallow: true
    });
  };

  useEffect(() => {
    setIsBasket(basketball === "true" ? true : false);
  }, [basketball]);

  return { isBasket, updateSelectedSport };
}

export default useSportSelect;
