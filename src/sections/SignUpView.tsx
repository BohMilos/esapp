// src/sections/SignUpView.tsx

"use client";

import {
  Button,
  //Checkbox,
  Container,
  Link,
  //FormControlLabel,
  //TextField,
  Typography,
  //Divider,
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

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
          Registrovať sa účtom Google
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
           Registrovať sa účtom GitHub
        </Button>

      <Typography variant="body1" sx={{ m: 1.5 }}>
        Už máte účet? <Link href="/auth/prihlasenie" color="primary" underline="none">Prihláste sa</Link>
      </Typography>
    </Container>
  );
}