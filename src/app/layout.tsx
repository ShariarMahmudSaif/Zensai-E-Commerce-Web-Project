import type { Metadata } from "next";
import { Bebas_Neue, Inter, Rubik_Spray_Paint } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AUTHOR_NAME, AUTHOR_ALIAS, AUTHOR_B64 } from "../lib/author";

const headingFont = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const accentFont = Rubik_Spray_Paint({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zensai Streetwear",
  description: "Bangladesh streetwear e-commerce by Zensai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable} antialiased bg-background text-foreground`}
        data-author={AUTHOR_NAME}
        data-alias={AUTHOR_ALIAS}
        data-author-b64={AUTHOR_B64}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
