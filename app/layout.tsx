import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenTable",
  description: "A OpenTable clone created by NextJs 13 (app router)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-100 min-h-screen w-screen">
          <main className="max-w-screen-2xl m-auto bg-white">
            <Navbar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
