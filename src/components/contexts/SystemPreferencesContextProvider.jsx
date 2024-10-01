import React, { createContext, useEffect, useState } from "react";

export const SystemPreferencesContext = createContext([]);

function SystemPreferencesContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [isTouch, setIsTouch] = useState(false);

  const element = document.documentElement; //html element

  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
      element.classList.remove("dark"); //remove dark class from html element
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = () => {
      if (mediaQuery.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
    handleThemeChange(); // Call handleThemeChange when the component mounts
    mediaQuery.addEventListener("change", handleThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    console.log("touch enabled is " + isTouchDevice());
    setIsTouch(isTouchDevice());
  }, []);

  const isTouchDevice = () => {
    const prefixes = ["", "-webkit-", "-moz-", "-o-", "-ms-", ""];
    const mq = (query) => window.matchMedia(query).matches;

    if (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
      return true;
    }

    return mq(["(", prefixes.join("touch-enabled),("), ")"].join(""));
  };

  return (
    <SystemPreferencesContext.Provider value={{ theme, themeToggle, isTouch }}>
      {children}
    </SystemPreferencesContext.Provider>
  );
}

export default SystemPreferencesContextProvider;
