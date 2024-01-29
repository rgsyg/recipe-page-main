import type { Metadata } from "next";
import { Young_Serif, Outfit } from "next/font/google"
import "./globals.css";

const youngSerif = Young_Serif({
  weight: '400',
  subsets: ['latin']
})

const outfit = Outfit({
  weight: ['400', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${youngSerif.className} bg-eggshell`}>
        {children}
      </body>
    </html>
  );
}
