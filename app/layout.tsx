import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./_components/Footer";
import "./globals.css";
import { StoreBranding } from "./_components/StoreBranding";
import { SearchBar } from "./_components/SearchBar";
import { Cart } from "./_components/Cart";
import { CategoryFilter } from "./_components/CategoryFilter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FreshCart - Fresh Groceries Delivered",
  description:
    "Shop from our wide selection of fresh produce, dairy, meat, and more. Quality ingredients for your everyday cooking needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="bg-white border-b shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <StoreBranding />
              <div className="flex-1 max-w-2xl mx-8">
                <SearchBar />
              </div>
              <Cart />
            </div>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
