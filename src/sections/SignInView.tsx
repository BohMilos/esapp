// src/sections/SignInView.tsx

"use client";

import {
    Button,
    //Checkbox,
    Container,
    //FormControlLabel,
    Link,
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
        mt: 35,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
        textUnderline: "none"
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Prihlásenie
      </Typography>

      <Typography variant="body1" sx={{ m: 2.5 }}>
        Ešte nemáte účet? <Link href="/auth/registracia" underline="hover"> Registrujte sa </Link>
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