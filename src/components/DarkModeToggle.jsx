import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function DarkModeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

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

  const element = document.documentElement; //html element

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  if (!darkModePopUp) {
    return null;
  } else {
    return (
      <div className="fixed right-4 bottom-20 z-50">
        {theme === "dark" && (
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className=" p-3 text-ct-1F331F bg-ct-F2F7F2 rounded-full "
            type="button"
          >
            <FiSun className="text-2xl" />
          </button>
        )}

        {theme === "light" && (
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className=" p-3 text-ct-1F331F  bg-ct-F2F7F2 rounded-full transition-all duration-300"
            type="button"
          >
            <FiMoon className="text-2xl" />
          </button>
        )}
      </div>
    );
  }
}

export default DarkModeToggle;
