import { SPORTS } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/i18n/routing";
import { useState, useEffect } from "react";

function useSportSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const basketball = searchParams.get(SPORTS.BASKETBALL);

  const [isBasket, setIsBasket] = useState(basketball === "true");

  const updateSelectedSport = (sportSelected) => {
    const isBasketSelected = sportSelected === SPORTS.BASKETBALL;
    setIsBasket(isBasketSelected);

    const params = new URLSearchParams(searchParams.toString());
    params.set(SPORTS.BASKETBALL, String(isBasketSelected));
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    setIsBasket(basketball === "true");
  }, [basketball]);

  return { isBasket, updateSelectedSport };
}

export default useSportSelect;
