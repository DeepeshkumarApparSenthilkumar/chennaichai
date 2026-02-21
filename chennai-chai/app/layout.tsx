import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";

export const metadata: Metadata = {
  title: "Chennai Chai — Brewed in Chennai. Poured in Chicago.",
  description: "Authentic South Indian chai at IIT Chicago. Student-run, culturally rooted, boldly brewed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
