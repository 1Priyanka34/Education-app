import React, {
  createContext,
  useState
} from "react";

export const ThemeContext =
  createContext();

const ThemeProvider = ({ children }) => {

  const [darkMode, setDarkMode] =
    useState(false);

  const theme = {

    backgroundColor:
      darkMode ? "#0f172a" : "#f8fafc",

    cardColor:
      darkMode ? "#1e293b" : "#ffffff",

    textColor:
      darkMode ? "#ffffff" : "#0f172a",

    subText:
      darkMode ? "#cbd5e1" : "#64748b",
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        theme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;