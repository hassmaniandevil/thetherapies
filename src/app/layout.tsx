import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Self-hosted fonts via Next.js (no external requests at runtime)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#5f7250",
};

export const metadata: Metadata = {
  title: {
    default: "TheTherapies — Evidence-Based Therapy Knowledge",
    template: "%s | TheTherapies",
  },
  description:
    "Educational resource about evidence-based psychological therapies. Information only — not medical advice. For educational purposes for those seeking to understand therapy approaches.",
  keywords: [
    "therapy education", "psychological therapy information", "CBT", "DBT", "EMDR", "CAT",
    "mental health education", "evidence-based", "educational resources",
  ],
  category: "education",
  classification: "Educational Resource",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "TheTherapies",
  },
  other: {
    "rating": "General",
    "distribution": "Global",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
