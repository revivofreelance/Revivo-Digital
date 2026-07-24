import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Revivo",
  description:
    "I build high-performance websites and web applications that help local businesses generate more leads, bookings, and customers. Dental clinics, restaurants, gyms, salons, law firms, and more.",
  keywords: [
    "freelance web developer",
    "web designer for local business",
    "dental website design",
    "restaurant website",
    "gym website",
    "small business website",
    "premium web design",
    "website for local business",
    "SEO services",
    "lead generation website",
  ],
  authors: [{ name: "Revivo" }],
  openGraph: {
    title: "Revivo — Premium Web Design & Development",
    description:
      "Helping local businesses grow with high-performance websites that convert visitors into customers.",
    siteName: "Revivo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revivo — Premium Web Design & Development",
    description:
      "Helping local businesses grow with high-performance websites that convert visitors into customers.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a1628",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="top-center" richColors />
      </body>
    </html>
  );
}
