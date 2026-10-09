import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Download, Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", end: true },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  // Close mobile menu when Escape is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close mobile menu when the screen becomes desktop-sized
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = (event) => {
      if (event.matches) {
        closeMenu();
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const navLinkClass = ({ isActive }) =>
    `group relative inline-flex items-center py-2 text-sm font-medium
    transition-colors duration-200
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-blue-400 focus-visible:ring-offset-4
    focus-visible:ring-offset-[#111827]
    ${isActive ? "text-blue-400" : "text-gray-300 hover:text-white"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111827]/90 shadow-lg shadow-black/5 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Rupes.Dev Home"
          className="group flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          <img
            src="/logo.png"
            alt="Rupes.Dev"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 lg:flex xl:gap-6"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.end}
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Download CV */}
        <a
          href="/resume.pdf"
          download="Rupes_Chakma_CV.pdf"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-400 hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827] active:translate-y-0 xl:inline-flex"
        >
          <Download size={17} aria-hidden="true" />
          <span>Download CV</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2.5 text-gray-200 transition-colors hover:border-blue-500/40 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:hidden"
        >
          {isOpen ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`overflow-hidden border-t border-white/10 bg-[#111827] transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "max-h-[85vh] overflow-y-auto opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.end}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-lg border-l-2 px-4 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  isActive
                    ? "border-blue-500 bg-blue-500/10 text-blue-400"
                    : "border-transparent text-gray-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.name}
              <ChevronRight
                size={16}
                aria-hidden="true"
                className="opacity-50"
              />
            </NavLink>
          ))}

          {/* Mobile Download CV */}
          <a
            href="/resume.pdf"
            download="Rupes_Chakma_CV.pdf"
            tabIndex={isOpen ? 0 : -1}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:from-blue-500 hover:to-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 active:scale-[0.98]"
          >
            <Download size={17} aria-hidden="true" />
            <span>Download CV</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
