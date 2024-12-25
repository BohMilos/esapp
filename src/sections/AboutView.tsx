// src/sections/AboutView.tsx

"use client";

import { Container, Link, Typography } from "@mui/material";

// This component renders the about page
export default function AboutView(){
    return (
        <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          O nás!
        </Typography>

        <Typography variant="body1" gutterBottom>
          Vitajte na stránke SnapZoška!
        </Typography>

        {/* Links to social media */}
        <Typography variant="body1" sx={{ m: 1.5, fontStyle: "italic" }}>
            <Link href="#" underline="hover">Naša škola</Link>
        </Typography>

        <Typography variant="body1" sx={{ m: 1.5, fontStyle: "italic" }}>
            <Link href="#" underline="hover">Facebook</Link>
        </Typography>

        <Typography variant="body1" sx={{ m: 1.5, fontStyle: "italic" }}>
            <Link href="#" underline="hover">Instagram</Link>
        </Typography>

      </Container>
    )
}