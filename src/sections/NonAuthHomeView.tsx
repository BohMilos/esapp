// src/sections/NonAuthHomeView.tsx
"use client";
import React from "react";
import { Typography, Container } from "@mui/material";

// This component renders the home page for non-authenticated users
const NonAuthHomeView: React.FC = () => {
  return (
    <Container>
      {/* Content of the home page */}
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to SnapZoška!
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        Please sign in to see your feed and connect with others.
      </Typography>
    </Container>
  );
};

export default NonAuthHomeView;
