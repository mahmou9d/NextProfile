import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Webvitas | Modern Websites & E-commerce Solutions",
    template: "%s | Webvitas",
  },
  description:
    "We design and develop modern, fast, and scalable websites and online stores using cutting-edge technologies. Custom solutions for your digital success.",
  keywords: [
    "web development",
    "e-commerce",
    "website design",
    "online store",
    "Next.js",
    "React",
    "modern websites",
  ],
  authors: [{ name: "Webvitas" }],
  creator: "Webvitas",
  publisher: "Webvitas",
  metadataBase: new URL("https://webvitas.com"), // استبدل بالدومين الحقيقي
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webvitas.com",
    title: "Webvitas | Modern Websites & E-commerce Solutions",
    description:
      "We design and develop modern, fast, and scalable websites and online stores.",
    siteName: "Webvitas",
    images: [
      {
        url: "/og-image.jpg", // أضف صورة OG مناسبة
        width: 1200,
        height: 630,
        alt: "Webvitas - Modern Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webvitas | Modern Websites & E-commerce Solutions",
    description: "We design and develop modern, fast, and scalable websites.",
    images: ["/twitter-image.jpg"], // أضف صورة Twitter مناسبة
    creator: "@webvitas", // استبدل بحساب تويتر الحقيقي
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // أضف كود التحقق من Google
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
