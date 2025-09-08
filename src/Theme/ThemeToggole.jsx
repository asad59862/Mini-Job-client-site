import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className=" flex items-center mx-3"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <>
          <FiMoon size={40} /> 
        </>
      ) : (
        <>
          <FiSun size={40} /> 
        </>
      )}
    </button>
  );
}
