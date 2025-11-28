import React from "react";
import { StoreBranding } from "./StoreBranding";
import { SearchBar } from "./SearchBar";
import { Cart } from "./Cart";
import { Footer } from "./Footer";

export interface HomePageLayoutProps {
  children?: React.ReactNode;
}

function HomePageLayout({ children }: HomePageLayoutProps) {
  return (
    <>
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
    </>
  );
}

export default HomePageLayout;
