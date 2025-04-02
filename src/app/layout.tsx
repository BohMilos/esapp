// src/app/layout.tsx

import { Metadata } from "next";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import AuthProvider from "../components/AuthProvider";
import Navbar from "../components/NavBar";
import ThemeProvider from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <ThemeProvider>
            <Box
              sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}>
              <Container
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}>
                {children}
              </Container>
              <Navbar />
            </Box>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
