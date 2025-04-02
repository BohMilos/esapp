"use client";

import { useState } from "react";
import { Button, Container, Typography, Checkbox, Link, Snackbar, Alert} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SignUpView() {
  // State to manage checkbox checked state
  const [isChecked, setIsChecked] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state for error message

  // Function to handle checkbox change
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  // Function to handle Google sign-up
  const handleGoogleSignUp = () => {
    if (!isChecked) {
      setOpenSnackbar(true); // Show error message if checkbox is not checked
    } else {
      signIn("google");
    }
  };

  // Function to handle GitHub sign-up
  const handleGitHubSignUp = () => {
    if (!isChecked) {
      setOpenSnackbar(true); // Show error message if checkbox is not checked
    } else {
      console.log("GitHub sign-up clicked");
    }
  };

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

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
        Registrácia
      </Typography>

      {/* Already have an account? Login link */}
      <Typography variant="body1" sx={{ m: 1.5 }}>
        Už máte účet? <Link href="/auth/prihlasenie" color="primary" underline="hover" sx={{ fontStyle: "italic" }}>Prihláste sa</Link>
      </Typography>

      {/* GDPR and Terms and Conditions checkbox */}
      <Typography variant="body1" sx={{ m: 1.5, fontSize: 15, mb: 4 }}>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} /> Súhlasím s <Link href="/gdpr" underline="hover" sx={{ fontStyle: "italic" }}>GDPR</Link> a <Link href="/podmienky" underline="hover" sx={{ fontStyle: "italic" }}>podmienkami používania</Link>
      </Typography>


      {/* Google and GitHub registration buttons */}
      <Button
        variant="contained"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={handleGoogleSignUp}
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
         onClick={handleGitHubSignUp}
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

      {/* Snackbar for error message */}
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        autoHideDuration={4000} // The Snackbar will automatically disappear after 4 seconds
        anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{
            backgroundColor: "#d32f2f", // Red background color for the error
            color: "white", // White text color
            "& .MuiAlert-icon": {
              color: "white", // White icon color
            },
            "& .MuiAlert-message": {
              fontSize: "1rem", // Adjust message font size for better readability
            },
          }}>
          Musíte sa súhlasiť s podmienkami používania.
        </Alert>
      </Snackbar>
    </Container>
  );
}
