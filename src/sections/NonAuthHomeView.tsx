// src/sections/NonAuthHomeView.tsx
"use client";
import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { signIn } from "next-auth/react";

const NonAuthHomeView: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to SnapZoška!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please sign in to see your feed and connect with others.
      </Typography>
      
      {/* Google Sign-In Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => signIn("google")}
        style={{ marginBottom: "1rem" }}
      >
        Prihlásiť sa cez Google
      </Button>
    </Container>
  );
};

export default NonAuthHomeView;
