import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Anshul Chimnani | Data Analyst & ML Engineer",
  description: "Portfolio of Anshul Chimnani - Data Analyst specializing in Machine Learning, Data Engineering, and ISO 27001 Standards. Based in Dublin, Ireland.",
  keywords: ["Data Analysis", "Machine Learning", "Data Engineering", "ISO 27001", "Python", "Portfolio"],
  authors: [{ name: "Anshul Chimnani" }],
  openGraph: {
    title: "Anshul Chimnani | Data Analyst & ML Engineer",
    description: "Portfolio showcasing expertise in Data Analysis, Machine Learning, and Data Engineering",
    url: "https://www.anshul.clepto.io",
    siteName: "Anshul Chimnani Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshul Chimnani | Data Analyst & ML Engineer",
    description: "Portfolio showcasing expertise in Data Analysis, Machine Learning, and Data Engineering",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
