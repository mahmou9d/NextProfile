import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://webvitas.com"),

  title: {
    default: "Webvitas | Modern Websites & E-commerce Solutions",
    template: "%s | Webvitas",
  },

  description:
    "Professional web development and e-commerce solutions. We build fast, SEO-optimized websites and online stores using Next.js and React. Custom solutions designed to scale your business.",

  keywords: [
    "web development",
    "e-commerce development",
    "website design",
    "online store development",
    "Next.js development",
    "React development",
    "SEO optimization",
    "custom website",
    "web design agency",
    "responsive web design",
    "modern web platforms",
    "scalable platforms",
  ],

  authors: [{ name: "Webvitas" }],
  creator: "Webvitas",
  publisher: "Webvitas",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webvitas.com",
    title: "Webvitas | Modern Websites & E-commerce Solutions",
    description:
      "Professional web development agency specializing in modern, fast, and SEO-optimized websites and e-commerce stores.",
    siteName: "Webvitas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webvitas - Professional Web Development Solutions",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Webvitas | Modern Websites & E-commerce Solutions",
    description:
      "Professional web development and e-commerce solutions built with Next.js and React.",
    images: ["/og-image.jpg"],
    creator: "@webvitas",
    site: "@webvitas",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-verification-code",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
