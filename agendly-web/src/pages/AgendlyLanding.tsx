import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import About from "../components/About";
import CTA from "../components/CTA";

type AgendlyLandingProps = {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
};

export default function AgendlyLanding({ theme, setTheme }: AgendlyLandingProps) {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-black dark:text-white transition-colors">
      {/* Passe theme e setTheme para o Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Stats />
      <Features />
      <Showcase />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}