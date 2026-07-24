import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0F2A26" },
  ],
};

export const metadata: Metadata = {
  title: "Clinic OS — The Modern Operating System for Clinics",
  description:
    "Appointments, patients, consultations, billing, pharmacy, follow-ups and analytics — all in one beautifully designed platform that keeps your clinic running smoothly.",
  keywords: [
    "clinic management system",
    "hospital management software",
    "HMS",
    "EMR",
    "EHR",
    "clinic POS",
    "medical software",
    "practice management",
  ],
  authors: [{ name: "Clinic OS" }],
  openGraph: {
    title: "Clinic OS — The Modern Operating System for Clinics",
    description:
      "One intelligent platform to run your entire clinic. Appointments, EMR, billing, pharmacy, follow-ups and analytics.",
    siteName: "Clinic OS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic OS — The Modern Operating System for Clinics",
    description:
      "One intelligent platform to run your entire clinic. Appointments, EMR, billing, pharmacy, follow-ups and analytics.",
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
        className={`${inter.variable} ${jetBrainsMono.variable} font-sans antialiased bg-background text-foreground selection:bg-emerald-500/15 selection:text-emerald-900`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
