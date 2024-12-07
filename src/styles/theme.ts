import { createTheme } from '@mui/material/styles';
// Define the light theme palette
const lightPalette = {
    primary: {
        main: "#add8e6",
      },
      secondary: {
        main: "#dc004e",
      },
      background: {
        default: "#f4f6f8",
      },
      text: {
        primary: "#333",
      },

    typography: {
        fontFamily: "'Roboto', sans-serif",
        h1: {
          fontSize: "2rem",
          fontWeight: 700,
        },
        body1: {
          fontSize: "1rem",
        },
        button: {
            textTransform: "none",
        },
    },
};
// Define the dark theme palette (slightly lighter dark colors)
const darkPalette = {
  primary: {
    main: "#ffc0cb",
  },
  secondary: {
    main: "#dc004e",
  },
  background: {
    default: '#1a1a1a',
    paper: '#2c2c2c',
  },
  text: {
    primary: '#e0e0e0',
    secondary: '#a0a0a0',
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
    button: {
        textTransform: "none",
    },
},
};
// Create the theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...lightPalette,
  },
});
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...darkPalette,
  },
});