import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Admin Dashboard",
  description: "admin dashboard for analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
