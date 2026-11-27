
import type { Metadata } from "next";
import { Lato, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/components/cart/CartContext";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alpas | Where the Mind Wanders Free",
  description:
    "A cozy café, reading nook, and creative space. Find your little escape at Alpas.",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        lato.variable,
        cormorant.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

