// src/sections/NonAuthHomeView.tsx
"use client";
import React from "react";
import { Typography, Container, Link } from "@mui/material";

// This component renders the home page for non-authenticated users
const NonAuthHomeView: React.FC = () => {
  return (
    <Container>
      {/* Content of the home page */}
      <Typography variant="h2" component="h1" gutterBottom sx={{ m: 3, ml: 0 }}>
        SnapZoška Vás víta!
      </Typography>
      
      <Typography variant="body1" gutterBottom sx={{ m: 3, ml: 0 }}>
        Chcete vidieť zaujímavé príspevky? <Link href="/auth/prihlasenie" underline="hover" sx={{ fontStyle: "italic" }}>Prihláste sa</Link>
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ m: 3, ml: 0 }}>
        Nemáte účet? <Link href="/auth/registracia" underline="hover" sx={{ fontStyle: "italic" }}>Registrujte sa</Link>
      </Typography>
    </Container>
  );
};

export default NonAuthHomeView;
