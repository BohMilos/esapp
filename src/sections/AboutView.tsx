// src/sections/AboutView.tsx

"use client";

import { Container, Link, Typography } from "@mui/material";

// This component renders the about page
export default function AboutView() {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom sx={{ m: 3, ml: 0 }}>
        O nás
      </Typography>

      {/* Links to social media */}
      <Typography variant="body1" sx={{ m: 1.5, fontStyle: "italic" }}>
        <Link href="https://zochova.sk" target="_blank" underline="hover">
          Naša škola
        </Link>
      </Typography>
      <Typography variant="body1" sx={{ m: 1.5, fontStyle: "italic" }}>
        <Link href="https://www.facebook.com/spsezochova/" target="_blank" underline="hover">
          Facebook
        </Link>
      </Typography>
      <Typography variant="body1" sx={{ m: 1.5, fontStyle: "italic" }}>
        <Link href="https://www.instagram.com/spsezochova/" target="_blank" underline="hover">
          Instagram
        </Link>
      </Typography>
    </Container>
  );
}
