import React from "react";
import localFont from "next/font/local";

import { Ubuntu } from "@next/font/google";

import "../../styles/globals.scss";

// If loading a variable font, you don't need to specify the font weight
const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ubuntu.variable}`}>
      <head>
        <title>Multi Step Form</title>
      </head>
      <body className="bg-white">
        <div className="mx-auto max-w-screen-lg px-6 py-12">
          <div className="col-start-2">
            {/* Here you can place your Navigation */}
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
