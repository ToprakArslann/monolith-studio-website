import type { Metadata } from "next";
import localFont from "next/font/local"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const monumentExtended = localFont({
  variable: "--font-monument",
  src: "/fonts/MonumentExtended-Regular.otf",
})
const monumentExtendedBold = localFont({
  variable: "--font-monument-bold",
  src: "/fonts/MonumentExtended-Ultrabold.otf",
})
const ronzino = localFont({
  variable: "--font-ronzino",
  src: [
    {
      path: "/fonts/Ronzino-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Ronzino-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/Ronzino-Oblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/Ronzino-MediumOblique.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "/fonts/Ronzino-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Ronzino-Bold.otf",
      weight: "700",
      style: "normal",
    }
  ],
})

export const metadata: Metadata = {
  title: "MONOLITH STUDIO",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monumentExtended.variable} ${monumentExtendedBold.variable} ${ronzino.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
