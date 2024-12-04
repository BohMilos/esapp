// src/sections/AuthHomeView.tsx
"use client";
import React from "react";
import { Session } from "next-auth";
import { Typography, Container} from "@mui/material";

interface AuthHomeViewProps {
  session: Session;
}

const AuthHomeView: React.FC<AuthHomeViewProps> = ({ session }) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome back, {session.user?.name}!
      </Typography>
      {/* Display personalized content like feed, posts, etc. */}
      <Typography variant="body1" gutterBottom>
        This is your feed. Check out the latest posts from your connections.
      </Typography>
      {/* Additional UI components like feed, stories, etc., can go here */}
    </Container>
  );
};

export default AuthHomeView;
