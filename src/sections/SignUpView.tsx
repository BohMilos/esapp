// src/sections/SignUpView.tsx

"use client";

import {
  Button,
  Checkbox,
  Container,
  Link,
  //FormControlLabel,
  //TextField,
  Typography,
  //Divider,
  Alert,
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import React, { useState } from "react";

// This component renders the SignUp page
export default function SignUpView() {

  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSignUp = () => {
    if (!checked) {
      setError(true);
      return;
    }

    signIn("google");
  };

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

      {/* Content of the SignUp page */}
      <Typography variant="h5" sx={{ mb: 5 }}>
        Registrácia
      </Typography>

      {/* Already have an account? Login link */}
      <Typography variant="body1" sx={{ m: 1.5 }}>
        Už máte účet? <Link href="/auth/prihlasenie" color="primary" underline="hover" sx={{ fontStyle: "italic" }}>Prihláste sa</Link>
      </Typography>

      {error && (
        <Alert severity="error" sx={{ m: 2 }}>
          Musíte sa súhlasiť s podmienkami používania.
        </Alert>
      )}

      {/* GDPR and Terms and Conditions checkbox */}
      <Typography variant="body1" sx={{ m: 1.5, fontSize: 15, mb: 4 }}>
        <Checkbox checked={checked} onChange={handleCheckboxChange} /> Súhlasím s <Link href="/gdpr" underline="hover" sx={{ fontStyle: "italic" }}>GDPR</Link> a <Link href="/podmienky" underline="hover" sx={{ fontStyle: "italic" }}>podmienkami používania</Link>
      </Typography>

      {/* Google and GitHub registration buttons */}
      <Button
        variant="contained"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={handleSignUp}
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
    </Container>
  );
}

