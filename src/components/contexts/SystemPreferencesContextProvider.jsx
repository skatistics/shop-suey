import React, { useContext, createContext, useEffect, useState } from "react";

const SystemPreferencesContext = createContext([]);

export function useSystemPreferencesContext() {
  const context = useContext(SystemPreferencesContext);

  if (context === undefined) {
    throw new Error(
      "useSystemPreferencesContext must be used within a useSystemPreferencesContext"
    );
  }
  return context;
}

function SystemPreferencesContextProvider({ children }) {
  const [isTouch, setIsTouch] = useState(false);

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
    const tempTouch = isTouchDevice();
    console.log("touch enabled is " + tempTouch);
    setIsTouch(tempTouch);
  }, []);

  return (
    <SystemPreferencesContext.Provider value={{ isTouch }}>
      {children}
    </SystemPreferencesContext.Provider>
  );
}

export default SystemPreferencesContextProvider;
