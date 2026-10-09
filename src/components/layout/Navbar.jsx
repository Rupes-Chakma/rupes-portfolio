import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";

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

  // Close mobile menu when Escape is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const getLinkClass = ({ isActive }) =>
    `group relative py-2 text-sm font-medium transition-colors duration-200
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
    focus-visible:ring-offset-4 focus-visible:ring-offset-[#111827]
    ${isActive ? "text-blue-400" : "text-gray-300 hover:text-white"}`;

  return (
    <header className=" container fixed inset-x-0 top-0 z-50 border-b border-gray-800/70 bg-[#111827]/90 shadow-lg shadow-black/5 backdrop-blur-xl">
      <div className=" mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Official RUPES Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Rupes Home"
          className="group flex shrink-0 items-center"
        >
          <img
            src="/logo.png"
            alt="RUPES Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12 lg:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.end}
              className={getLinkClass}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
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
          className="hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-blue-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827] active:translate-y-0 lg:inline-flex"
        >
          <Download size={17} aria-hidden="true" />
          <span>Download CV</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:hidden"
        >
          {isOpen ? (
            <X size={26} aria-hidden="true" />
          ) : (
            <Menu size={26} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`overflow-hidden border-t border-gray-800/70 bg-[#111827] transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
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
                `rounded-lg border-l-2 px-4 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  isActive
                    ? "border-blue-500 bg-blue-500/10 text-blue-400"
                    : "border-transparent text-gray-300 hover:bg-gray-800/70 hover:text-white"
                }`
              }
            >
              {link.name}
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
