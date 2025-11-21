import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trippy Go Sri Lanka",
  description: "Unforgettable journeys in Sri Lanka, curated for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
