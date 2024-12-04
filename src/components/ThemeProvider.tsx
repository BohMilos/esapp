// src/components/ThemeProvider.tsx

"use client";
import { createTheme } from "@mui/material/styles";

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc0cb",
    },
    secondary: {
      main: "#dc004e", // Custom secondary color (pink)
    },
    background: {
      default: "#f4f6f8", // Light background color
    },
    text: {
      primary: "#333", // Dark text color for better readability
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", // Font family
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

// Google Material Design theme
const googleTheme = createTheme({
  palette: {
    primary: {
      main: "#4285F4", // Google's blue
    },
    secondary: {
      main: "#34A853", // Google's green
    },
    background: {
      default: "#f1f3f4", // Light background similar to Google's design
    },
    text: {
      primary: "#202124", // Google's dark text color
      secondary: "#5f6368", // Secondary text color
    },
    action: {
      active: "#4285F4", // Active color for buttons
      hover: "#555555", // Hover color
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", // Google's font
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none", // Do not uppercase button text
    },
  },
});

// GitHub theme
const githubTheme = createTheme({
  palette: {
    mode: "light", // Set to "dark" for dark mode
    primary: {
      main: "#0366d6", // GitHub's primary blue
    },
    secondary: {
      main: "#6a737d", // GitHub's secondary gray
    },
    background: {
      default: "#ffffff", // Light background for the light mode
      paper: "#f6f8fa", // Paper background color for cards, etc.
    },
    text: {
      primary: "#24292f", // Text color for normal text
      secondary: "#586069", // Lighter gray for secondary text
    },
    action: {
      active: "#0366d6", // Blue active color
      hover: "#f1f8ff", // Light blue hover background
    },
  },
  typography: {
    fontFamily: "'Helvetica Neue', Arial, sans-serif", // GitHub's font stack
    h1: {
      fontSize: "2.25rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none", // GitHub uses normal case for buttons
    },
  },
});

export { theme, googleTheme, githubTheme };
