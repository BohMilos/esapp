// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import AuthProvider from "../components/AuthProvider";
import ThemeProvider from "../components/ThemeProvider";

// Metadata for the page
export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This component provides the layout for all pages, including Navbar, ThemeProvider and AuthProvider
  return (
    <html lang="sk">
      <ThemeProvider>
      <body>
        {/* The AuthProvider component wraps all pages to provide authentication */}
        <AuthProvider>
          {children}
          {/* The Navbar component is rendered at the bottom of the page */}
          <Navbar />
        </AuthProvider>
      </body>
      </ThemeProvider>
    </html>
  );
}