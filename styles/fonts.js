import { Barlow_Condensed, DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"] });
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export { dm_sans, barlow };
