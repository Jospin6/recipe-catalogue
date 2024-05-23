import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from '@/components/Navbar';
import { ReduxProvider } from "@/features/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe-catalogue",
  description: "Application to get recipes informations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <header>
            <Navbar/>
          </header>
          <div className='md:w-[80%] md:m-[auto] px-2'>
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
