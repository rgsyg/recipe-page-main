import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Recipe page",
  description: "A recipe page for making a simple omelette",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-eggshell`}>
        {children}
      </body>
    </html>
  );
}
