import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/60 bg-[#111827]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold tracking-tight text-white"
        >
          <span>Rupes</span>

          <span className="font-extrabold text-blue-500">.Dev</span>

          <span className="ml-1 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="group relative py-1 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.name}

              {/* Hover Line */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Download CV */}
        <div className="hidden items-center md:flex">
          <a
            href="/resume.pdf"
            download
            className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40 active:scale-95"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-white focus:outline-none md:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-b border-gray-800 bg-[#111827]/95 px-6 py-6 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-300 transition hover:text-blue-400"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              download
              className="mt-2 w-full rounded-full bg-blue-600 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
