import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Smith Landscaping",
  description: "Smith Landscaping is the nation's leading commercial landscape company.",
  icons: {
    icon: '/Logos/logo-green-va.png',
  },
};

import Footer from "@/components/navigation/Footer";
import MobileNav from "@/components/navigation/MobileNav";
import GlobalCTA from "@/components/ui/GlobalCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${openSans.variable}`}>
      <body className="font-sans">
        <MobileNav />
        {children}
        <GlobalCTA />
        <Footer />
      </body>
    </html>
  );
}
