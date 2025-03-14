import type { Metadata } from "next";
import React from "react";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/context/ViewContext";

export const metadata: Metadata = {
  title: "Nick Lamparelli — Full Stack Engineer",
  description:
    "An aspiring full stack engineer with a passion for creating and building web applications. I am a creative problem solver with a keen eye for detail and a strong desire to learn and grow. I am always looking for new opportunities to collaborate and create with fellow developers.",
  keywords: [
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "web developer",
    "web development",
    "Boston",
    "Massachusetts",
    "React developer",
    "Next.js developer",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
