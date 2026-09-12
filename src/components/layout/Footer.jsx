import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Footer Top */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight">
              Rupes
              <span className="text-blue-500">.Dev</span>
            </Link>

            <p className="mt-4 leading-7 text-gray-400">
              Frontend Developer passionate about building modern, responsive
              and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="transition hover:text-blue-500">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="transition hover:text-blue-500">
                  About
                </Link>
              </li>

              <li>
                <Link to="/services" className="transition hover:text-blue-500">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/skills" className="transition hover:text-blue-500">
                  Skills
                </Link>
              </li>

              <li>
                <Link to="/projects" className="transition hover:text-blue-500">
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/education"
                  className="transition hover:text-blue-500"
                >
                  Education
                </Link>
              </li>

              <li>
                <Link to="/contact" className="transition hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Me</h3>

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
                href="https://www.linkedin.com/in/rupescse/"
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
        <div className="my-8 border-t border-gray-800"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© {currentYear} Rupes.Dev. All rights reserved.</p>

          <p>
            Designed & Built with ❤️ by{" "}
            <span className="font-medium text-blue-500">Rupes Chakma</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
