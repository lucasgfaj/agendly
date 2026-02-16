import { useState, useEffect } from "react";
import AgendlyLanding from "./pages/AgendlyLanding";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");         // para Tailwind
      root.setAttribute("data-theme", "dark"); // para DaisyUI
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  }, [theme]);

  return <AgendlyLanding theme={theme} setTheme={setTheme} />;
}