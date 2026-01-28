import { Jost, Montserrat, Geist, Geist_Mono } from "next/font/google";
export const montserrat = Montserrat({
  options: { weight: ["400", "500", "700", "900"] },
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const jost = Jost({
  options: { weight: ["400", "500", "700", "900"] },
  variable: "--font-Jost",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
