import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CVS GFX | Graphic Designer",
  description:
    "Graphic Designer crafting visuals that command attention. Branding, posters, thumbnails, social media creatives and visual storytelling.",
  openGraph: {
    title: "CVS GFX | Graphic Designer",
    description: "Creating visuals that command attention.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable)}
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className="
        bg-[#050505]
        text-white
        overflow-x-hidden
        "
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}