// src/sections/NonAuthHomeView.tsx
"use client";
import React from "react";
import { Typography, Container } from "@mui/material";

const NonAuthHomeView: React.FC = () => {
  return (
    <Container>
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
