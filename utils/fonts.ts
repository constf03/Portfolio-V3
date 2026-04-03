import { Bebas_Neue, Lato } from "next/font/google";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
