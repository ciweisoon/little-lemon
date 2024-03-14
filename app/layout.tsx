import type { Metadata } from "next";
import { playfair_display } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import Navbar from "@/app/ui/navbar";

export const metadata: Metadata = {
  title: "Little Lemon Restaurant",
  description: "An italian restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair_display.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
