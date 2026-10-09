import React from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowUpRight, Heart, ArrowUp, Code2 } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/rupes-chakma",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rupescse/",
      icon: FaLinkedinIn,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/rupes.dev",
      icon: FaFacebookF,
    },
    {
      name: "Email",
      href: "mailto:YOUR_EMAIL@example.com",
      icon: Mail,
    },
  ];

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const focusStyle =
    "focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-blue-400 focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-gray-950";

  return (
    <footer className="border-t border-white/10 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link
              to="/"
              aria-label="Rupes home"
              className={`inline-flex items-center rounded-md ${focusStyle}`}
            >
              <img
                src="/logo.png"
                alt="Rupes Chakma"
                className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
              Frontend Developer passionate about creating modern, responsive,
              and user-friendly web applications using React.js, JavaScript, and
              Tailwind CSS.
            </p>

            <Link
              to="/contact"
              className={`mt-6 inline-flex items-center gap-2 rounded-lg
              bg-blue-600 px-5 py-3 text-sm font-semibold text-white
              shadow-lg shadow-blue-600/10 transition-all duration-300
              hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/20
              ${focusStyle}`}
            >
              Let's Work Together
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`inline-flex rounded-sm transition-colors duration-200
                    hover:text-blue-400 ${focusStyle}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Connect With Me
            </h3>

            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/rupes-chakma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 font-semibold transition hover:bg-blue-500 hover:text-white"
              >
                Git
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 font-semibold transition hover:bg-blue-500 hover:text-white"
              >
                in
              </a>

              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 font-semibold transition hover:bg-blue-500 hover:text-white"
              >
                f
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-500">
            © {currentYear}{" "}
            <span className="font-medium text-gray-300">Rupes.Dev</span>. All
            rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-gray-500">
            Designed & Built with
            <Heart
              size={14}
              className="fill-red-500 text-red-500"
              aria-label="love"
            />
            by
            <span className="font-semibold text-blue-400">Rupes Chakma</span>
          </p>

          <button
            type="button"
            onClick={handleBackToTop}
            className={`inline-flex items-center gap-2 rounded-lg border
            border-white/10 px-4 py-2.5 text-sm text-gray-300
            transition-all duration-300 hover:border-blue-500
            hover:bg-blue-600 hover:text-white ${focusStyle}`}
          >
            Back to top
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
