import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "projects", "contact"];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-gray-900/90 bg-white/90 backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500"
          >
            <img src="./logo.png" alt="logo" className="w-12, h-12" />
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative flex items-center gap-2 transition-colors duration-300"
              >
                <div
                  className={`flex items-center gap-2 ${
                    activeSection === item.href.substring(1)
                      ? "text-emerald-500 dark:text-emerald-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400"
                  }`}
                >
                  <span>{item.name}</span>
                </div>
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform origin-left transition-transform duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? (
                <Sun
                  className="text-gray-300 hover:text-emerald-400"
                  size={20}
                />
              ) : (
                <Moon
                  className="text-gray-700 hover:text-emerald-500"
                  size={20}
                />
              )}
            </button>
          </div>

          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900/95 backdrop-blur-md py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative flex items-center gap-2 px-4 py-3 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div
                  className={`flex items-center gap-2 ${
                    activeSection === item.href.substring(1)
                      ? "text-emerald-500 dark:text-emerald-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>{item.name}</span>
                </div>
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform origin-left transition-transform duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </a>
            ))}

            <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-full flex items-center gap-2 px-4 py-3 text-gray-700 dark:text-gray-300"
            >
              {isDarkMode ? (
                <>
                  <Sun size={18} /> Light Mode
                </>
              ) : (
                <>
                  <Moon size={18} /> Dark Mode
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
