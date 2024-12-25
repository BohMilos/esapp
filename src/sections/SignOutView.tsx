// src/sections/SignOutView.tsx

"use client";

import { signOut } from "next-auth/react";
import { Button, Container, Typography } from "@mui/material";

// This component renders the SignOut page
export default function SignOutView() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Content of the SignOut page */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Naozaj sa chcete odhlásiť?
      </Typography>

      {/* Button to sign out */}
      <Button variant="contained" onClick={() => signOut()}>
        Odhlásiť sa
      </Button>
    </Container>
  );
}