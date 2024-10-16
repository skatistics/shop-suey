import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useDarkModeContext } from "../contexts/DarkModeContextProvider";

function FloatingDarkModeToggle() {
  const { dark, themeToggle } = useDarkModeContext();

  const [darkModePopUp, setDarkModePopUp] = useState(false);

  function scrollHandler() {
    if (window.scrollY > 300) {
      setDarkModePopUp(true);
    } else {
      setDarkModePopUp(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  if (!darkModePopUp) {
    ("");
  } else {
    return (
      <div className="fixed top-6 right-[124px] z-10">
        {dark ? (
          <button
            onClick={themeToggle}
            className=" p-3 text-ct-D9E8D9 bg-ct-222824 rounded-full dark:border-ct-0B0D0C dark:border-2"
            type="button"
          >
            <FiSun className="text-2xl" />
          </button>
        ) : (
          <button
            onClick={themeToggle}
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
