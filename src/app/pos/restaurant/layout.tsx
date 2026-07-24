import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mise — Restaurant POS Built for Modern Restaurants",
  description:
    "Everything from ordering, kitchen operations, inventory, waitlists, billing, analytics and customer management in one beautifully designed platform. Built for restaurants, cafes, cloud kitchens and franchises.",
  keywords: [
    "Restaurant POS",
    "Cafe POS",
    "Cloud Kitchen",
    "Kitchen Display System",
    "Waitlist Management",
    "Restaurant Software",
    "Billing",
    "Inventory",
  ],
  authors: [{ name: "Mise" }],
  openGraph: {
    title: "Mise — Restaurant POS Built for Modern Restaurants",
    description:
      "One platform for ordering, kitchen, inventory, billing, analytics and customer management. Beautifully designed. Built for real restaurants.",
    siteName: "Mise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mise — Restaurant POS Built for Modern Restaurants",
    description:
      "One platform for ordering, kitchen, inventory, billing, analytics and customer management.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
