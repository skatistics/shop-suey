import { FiSun, FiMoon } from "react-icons/fi";
import { useDarkModeContext } from "../contexts/DarkModeContextProvider";

function DarkModeToggle() {
  const { dark, themeToggle } = useDarkModeContext();

  return (
    <div>
      {dark ? (
        <button onClick={themeToggle} className=" p-3 " type="button">
          <FiSun className="text-2xl text-ct-base-67A770 transition-all duration-300" />
        </button>
      ) : (
        <button
          onClick={themeToggle}
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
