// src/sections/SignInView.tsx

"use client";

import {
    Button,
    //Checkbox,
    Container,
    ThemeProvider,
    //FormControlLabel,
    //TextField,
    Typography,
    //Divider,
  } from "@mui/material";
  import { signIn } from "next-auth/react";
  import GoogleIcon from "@mui/icons-material/Google";
  import GitHubIcon from '@mui/icons-material/GitHub';
import { githubTheme, googleTheme } from "../components/ThemeProvider";

export default function SignInView() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 40,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Prihlásenie
      </Typography>

      <ThemeProvider theme = {googleTheme}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => signIn("google")}
          sx={{ mb: 1 }}
          color = "primary"
        >
          Prihlásiť sa účtom Google
        </Button>
      </ThemeProvider>

      <ThemeProvider theme = {githubTheme}>
        <Button
           variant="contained"
           fullWidth
           startIcon={<GitHubIcon />}
           //onClick={() => signIn("github")}
           sx={{ mb: 4 }}
           color = "secondary"
         >
           Prihlásiť sa účtom GitHub
        </Button>
      </ThemeProvider>
    </Container>
  );
}