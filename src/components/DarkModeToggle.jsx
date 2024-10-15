import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { SystemPreferencesContext } from "./contexts/SystemPreferencesContextProvider";

function DarkModeToggle() {
  const dark = useContext(SystemPreferencesContext).dark;
  const setTheme = useContext(SystemPreferencesContext).themeToggle;

  return (
    <div>
      {dark ? (
        <button onClick={setTheme} className=" p-3 " type="button">
          <FiSun className="text-2xl text-ct-base-67A770 transition-all duration-300" />
        </button>
      ) : (
        <button
          onClick={setTheme}
          className=" p-3 text-ct-191819  transition-all duration-300"
          type="button"
        >
          <FiMoon className="text-2xl" />
        </button>
      )}
    </div>
  );
}

export default DarkModeToggle;
