// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import AuthProvider from "../components/AuthProvider";
import ThemeProvider from "../components/ThemeProvider";


export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <ThemeProvider>
      <body>
        <AuthProvider>
          {children}
          <Navbar />
        </AuthProvider>
      </body>
      </ThemeProvider>
    </html>
  );
}
