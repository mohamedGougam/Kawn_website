import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const kawnSans = Plus_Jakarta_Sans({
  variable: "--font-kawn",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kawn — Social, reimagined",
  description:
    "Share moments, join conversations, and stay close to your communities with the Kawn social app.",
  openGraph: {
    title: "Kawn — Social, reimagined",
    description:
      "Download Kawn for iOS and Android. A modern space to connect without the noise.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kawnSans.variable} h-full scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/Logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/Logo.jpeg" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
