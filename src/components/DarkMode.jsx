import React, { useEffect, useState } from "react";
import Light from "../assets/light.png";
import Dark from "../assets/dark.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-white/20 dark:bg-slate-700/50 backdrop-blur-md shadow-lg hover:scale-110 transition-all duration-300"
    >
      <img
        src={theme === "light" ? Light : Dark}
        alt="Theme"
        className={`w-12 h-8 object-contain transition-all duration-500 ${
          theme === "dark"
            ? "rotate-180 scale-200"
            : "rotate-0 scale-200"
        }`}
      />
    </button>
  );
};

export default DarkMode;