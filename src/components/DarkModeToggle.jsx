import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { DarkModeContext } from "../contexts/DarkModeContextProvider";

function DarkModeToggle() {
  const theme = useContext(DarkModeContext).theme;
  const setTheme = useContext(DarkModeContext).themeToggle;

  return (
    <div>
      {theme === "dark" && (
        <button onClick={setTheme} className=" p-3 " type="button">
          <FiSun className="text-2xl text-[#00ff3770] " />
        </button>
      )}

      {theme === "light" && (
        <button
          onClick={setTheme}
          className=" p-3 text-ct-1F331F   transition-all duration-300"
          type="button"
        >
          <FiMoon className="text-2xl" />
        </button>
      )}
    </div>
  );
}

export default DarkModeToggle;
