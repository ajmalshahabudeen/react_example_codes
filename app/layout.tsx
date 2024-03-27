import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationComponent } from "@/components/Header/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Samples",
  description: "react example code for reference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationComponent />
        {children}
        </body>
    </html>
  );
}
