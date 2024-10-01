import { useEffect, useState, useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { SystemPreferencesContext } from "../contexts/SystemPreferencesContextProvider";

function FloatingDarkModeToggle() {
  const theme = useContext(SystemPreferencesContext).theme;
  const setTheme = useContext(SystemPreferencesContext).themeToggle;

  const [darkModePopUp, setDarkModePopUp] = useState(false);
  useEffect(() => {
    if (window.addEventListener) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          setDarkModePopUp(true);
        } else {
          setDarkModePopUp(false);
        }
      });
    }
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (!darkModePopUp) {
    ("");
  } else {
    return (
      <div className="fixed top-6 right-[124px]">
        {theme === "dark" && (
          <button
            onClick={setTheme}
            className=" p-3 text-ct-1F331F dark:text-ct-D9E8D9 bg-[#00ff3770] rounded-full "
            type="button"
          >
            <FiSun className="text-2xl" />
          </button>
        )}

        {theme === "light" && (
          <button
            onClick={setTheme}
            className=" p-3 text-ct-1F331F bg-ct-F2F7F2 rounded-full transition-all duration-300"
            type="button"
          >
            <FiMoon className="text-2xl" />
          </button>
        )}
      </div>
    );
  }
}

export default FloatingDarkModeToggle;
