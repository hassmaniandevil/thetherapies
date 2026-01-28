import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "TheTherapies — Evidence-Based Therapy Knowledge",
    template: "%s | TheTherapies",
  },
  description:
    "A comprehensive, evidence-based resource for understanding psychological therapies. For everyone — from those seeking help to practising clinicians.",
  keywords: [
    "therapy", "psychological therapy", "CBT", "DBT", "EMDR", "CAT",
    "mental health", "evidence-based", "worksheets", "printables",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "TheTherapies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
