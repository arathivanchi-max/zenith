import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { globalMeta } from '../config/portfolio';

export const metadata = {
  title: `${globalMeta.name} - ${globalMeta.title}`,
  description: globalMeta.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
