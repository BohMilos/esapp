// src/sections/SignInView.tsx

"use client";

import {
    Button,
    //Checkbox,
    Container,
    //FormControlLabel,
    //TextField,
    Typography,
    //Divider,
  } from "@mui/material";
  import { signIn } from "next-auth/react";
  import GoogleIcon from "@mui/icons-material/Google";
  import GitHubIcon from '@mui/icons-material/GitHub';


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