"use client";

import React from "react";

import { Ubuntu } from "@next/font/google";
import { AnimatePresence } from "framer-motion";

import "../../styles/globals.scss";

import { CreateTaskMultiStepFormContainer } from "@/contexts/FormStateContext";

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
      <body className="h-[100vh]">
        <CreateTaskMultiStepFormContainer>
          <AnimatePresence>{children}</AnimatePresence>
        </CreateTaskMultiStepFormContainer>
      </body>
    </html>
  );
}
