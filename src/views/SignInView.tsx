"use client";

import { Button, Container, Typography, Link } from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";


export default function SignInView() {
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
      }}>
      {/* Logo / Title */}
      <Typography
        variant="h5"
        sx={{ mb: 3 }}>
        Prihlásenie
      </Typography>

      {/* Don't have an account? Registration link */}
      <Typography variant="body1" sx={{ m: 2.5, mb: 5 }}>
        Ešte nemáte účet? <Link href="/auth/registracia" underline="hover" sx={{ fontStyle: "italic" }}> Registrujte sa </Link>
      </Typography>

      {/* Google and GitHub login buttons */}
        <Button
          variant="contained"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => signIn("google")}
          sx={{
             mb: 1,
             textTransform: "none",
             "&:hover": {
               bgcolor: "#4285F4",
               color: "white",
             },
            }}
        >
          Prihlásiť sa účtom Google
        </Button>

        <Button
           variant="contained"
           fullWidth
           startIcon={<GitHubIcon />}
           //onClick={() => signIn("github")}
           sx={{
            mb: 1,
            bgcolor: "#333",
            color: "white",
            '&:hover': {
              bgcolor: "#444",
            },
            textTransform: "none",
          }}
         >
           Prihlásiť sa účtom GitHub
        </Button>
    </Container>
  );
}
