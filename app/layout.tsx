import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anshul Chimnani - Data Scientist & ML Engineer",
  description:
    "Data scientist specializing in machine learning, data engineering, and ISO 27001 security. Based in Dublin, Ireland.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "Data Engineering",
    "ISO 27001",
    "Python",
    "Dublin",
    "Ireland",
  ],
  authors: [{ name: "Anshul Chimnani" }],
  openGraph: {
    title: "Anshul Chimnani - Data Scientist & ML Engineer",
    description:
      "Data scientist specializing in machine learning, data engineering, and ISO 27001 security.",
    url: "https://anshulchimnani.vercel.app",
    siteName: "Anshul Chimnani Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshul Chimnani - Data Scientist & ML Engineer",
    description:
      "Data scientist specializing in machine learning, data engineering, and ISO 27001 security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
