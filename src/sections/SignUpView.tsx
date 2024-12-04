// src/sections/SignUpView.tsx

"use client";

import {
  Button,
  //Checkbox,
  Container,
  Link,
  ThemeProvider,
  //FormControlLabel,
  //TextField,
  Typography,
  //Divider,
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { githubTheme, googleTheme, theme } from "../components/ThemeProvider";

export default function SignUpView() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 35,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
        textUnderline: "none"
      }}
    >
      <Typography variant="h5" sx={{ mb: 5 }}>
        Registrácia
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
          Registrovať sa účtom Google
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
           Registrovať sa účtom GitHub
        </Button>
      </ThemeProvider>

      <Typography variant="body1" sx={{ m: 1.5 }}>
        Už máte účet? <ThemeProvider theme = {theme}><Link href="/auth/prihlasenie" color="primary" underline="none">Prihláste sa</Link></ThemeProvider>
      </Typography>

    </Container>
  );
}