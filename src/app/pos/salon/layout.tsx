import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aura POS — The Operating System for Salons, Spas & Wellness",
  description:
    "Run your entire salon from one beautiful platform. Appointments, POS, clients, memberships, inventory, payroll, and reporting — everything your salon needs in one elegant operating system.",
  keywords: [
    "salon POS",
    "spa management software",
    "salon software",
    "wellness platform",
    "beauty clinic management",
    "barbershop POS",
    "salon booking system",
    "Aura POS",
  ],
  authors: [{ name: "Aura POS" }],
  openGraph: {
    title: "Aura POS — The Operating System for Salons, Spas & Wellness",
    description:
      "Everything your salon needs, beautifully connected in one intelligent platform.",
    siteName: "Aura POS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura POS — Salon, Spa & Wellness Platform",
    description:
      "Run your entire salon from one beautiful platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
