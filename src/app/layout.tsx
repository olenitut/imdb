import type { Metadata } from "next";
import Header from "@/components/Header/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "IMBd Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="next.svg" />
      </head>
      <body>
        <Header />
        {/* NAV?  */}
        {/* SEARCH */}
        {children}
      </body>
    </html>
  );
}
