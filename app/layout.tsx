import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DUOTECH GitHub Developer Hub",
  description: "A practical GitHub API integration built by DUOTECH."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
