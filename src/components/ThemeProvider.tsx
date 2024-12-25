"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "@/styles/theme";

// Context for the theme
const ThemeContext = createContext({
  toggleTheme: () => {},
  isDarkMode: false,
});

// Hook to use the theme
export const useTheme = () => useContext(ThemeContext);

// Main component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State for the theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On mount, check if the user has a saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      {/* Use the MUI ThemeProvider and CssBaseline to set the theme */}
      <MUIThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
