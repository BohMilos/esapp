// src/sections/AuthHomeView.tsx
"use client";
import React from "react";
import { Session } from "next-auth";
import { Typography, Container} from "@mui/material";

interface AuthHomeViewProps {
  session: Session;
}

// This component renders the home page for authenticated users
const AuthHomeView: React.FC<AuthHomeViewProps> = ({ session }) => {
  return (
    <Container>
      {/* Content of the home page */}
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome back, {session.user?.name}!
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is your feed. Check out the latest posts from your connections.
      </Typography>
    </Container>
  );
};

export default AuthHomeView;
