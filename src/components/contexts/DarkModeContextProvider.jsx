import { useContext, createContext, useState, useEffect } from "react";

const DarkModeContext = createContext(null);

export function useDarkModeContext() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error(
      "useDarkModeContext must be used within a DarkModeContextProvider"
    );
  }
  return context;
}

function DarkModeContextProvider({ children }) {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : false
  );

  const element = document.documentElement; //html element

  function themeToggle() {
    setDark(!dark);
  }

  useEffect(() => {
    if (dark) {
      element.classList.add("dark");
      localStorage.setItem("theme", true);
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", false);
    }
  }, [dark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = () => {
      setDark(mediaQuery.matches);
    };
    handleThemeChange();
    mediaQuery.addEventListener("change", handleThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <DarkModeContext.Provider value={{ dark, themeToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContextProvider;
