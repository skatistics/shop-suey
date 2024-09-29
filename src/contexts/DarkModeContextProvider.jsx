import React, { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext([]);

function DarkModeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; //html element

  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <DarkModeContext.Provider value={{ theme, themeToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContextProvider;
