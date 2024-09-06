"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface NextThemeContextType {
  handleThemeChange: () => void;
  theme: string | undefined;
}

const NextThemeContext = createContext<NextThemeContextType | undefined>(
  undefined
);

export const NextThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const values = { handleThemeChange, theme };

  return (
    <NextThemeContext.Provider value={values}>
      {children}
    </NextThemeContext.Provider>
  );
};

export const useNextTheme = () => {
  const context = useContext(NextThemeContext);
  if (context === undefined) {
    throw new Error("useNextTheme must be used within a NextThemeProvider");
  }
  return context;
};
