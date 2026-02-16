import { Moon, Sun } from "lucide-react";
import Logo from "./Logo";
type NavbarProps = {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
};

export default function Navbar({ theme, setTheme }: NavbarProps) {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 backdrop-blur bg-white/80 dark:bg-black/70 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-green-500 transition">Recursos</a>
          <a href="#showcase" className="hover:text-green-500 transition">Plataforma</a>
          <a href="#about" className="hover:text-green-500 transition">Sobre</a>
        </div>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}