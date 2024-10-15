import React, { createContext, useEffect, useState } from "react";

export const SystemPreferencesContext = createContext([]);

function SystemPreferencesContextProvider({ children }) {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : false
  );
  const [isTouch, setIsTouch] = useState(false);

  const element = document.documentElement; //html element

  const themeToggle = () => {
    setDark(!dark);
    if (dark) {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = () => {
      setDark(mediaQuery.matches);
    };
    handleThemeChange();
    mediaQuery.addEventListener("change", handleThemeChange);

    const tempTouch = isTouchDevice();
    console.log("touch enabled is " + tempTouch);
    setIsTouch(tempTouch);
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <SystemPreferencesContext.Provider value={{ dark, themeToggle, isTouch }}>
      {children}
    </SystemPreferencesContext.Provider>
  );
}

export default SystemPreferencesContextProvider;
