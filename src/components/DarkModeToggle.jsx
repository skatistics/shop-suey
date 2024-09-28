import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function DarkModeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

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

  return (
    <div className="fixed right-4 bottom-20">
      {theme === "dark" && (
        <FiSun
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`text-4xl w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.)] transition-all duration-300 right-0 z-10 `}
        />
      )}

      {theme === "light" && (
        <FiMoon
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="text-4xl w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.)] transition-all duration-300"
        />
      )}
    </div>
  );
}

export default DarkModeToggle;
