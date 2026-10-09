import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  MonitorSmartphone,
  Palette,
  Sparkles,
  Terminal,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  const roles = [
    "Frontend Developer",
    "React Developer",
    "WordPress Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = isDeleting ? 45 : 90;

    if (!isDeleting && text === currentRole) {
      delay = 1500;
    }

    if (isDeleting && text === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text === currentRole) {
          setIsDeleting(true);
        } else {
          setText(currentRole.substring(0, text.length + 1));
        }
      } else {
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          setText(currentRole.substring(0, text.length - 1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

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
      name: "Email",
      href: "mailto:rupeschakma.dev@gmail.com",
      icon: Mail,
    },
  ];

  const focusStyle =
    "focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-blue-400 focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-gray-900";

  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden
        bg-[#111827] px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20"
      >
        {/* Background Effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20
          h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 right-0
          h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl"
        />

        <div
          className="relative mx-auto grid w-full max-w-7xl items-center
          gap-16 md:grid-cols-2 lg:gap-20"
        >
          {/* Left Content */}
          <div className="order-2 md:order-1">
            {/* Availability Badge */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full
              border border-blue-400/20 bg-blue-400/5 px-4 py-2
              text-sm text-blue-300"
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full
                  animate-ping rounded-full bg-blue-400 opacity-50"
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              Frontend Developer
            </div>

            <p className="text-lg font-medium text-gray-300 sm:text-xl">
              Hello, my name is
            </p>

            <h1
              className="mt-3 text-4xl font-extrabold leading-tight
              tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Rupes
              <span className="block text-blue-500 sm:inline"> Chakma</span>
            </h1>

            <h2
              className="mt-5 min-h-[3.5rem] text-xl font-semibold
              leading-relaxed text-gray-200 sm:text-2xl"
            >
              I'm a <span className="text-blue-400">{text}</span>
              <span
                aria-hidden="true"
                className="ml-0.5 animate-pulse text-blue-400"
              >
                |
              </span>
            </h2>

            <p
              className="mt-5 max-w-xl text-base leading-8 text-gray-400
              sm:text-lg"
            >
              I build modern, responsive, and user-friendly web applications
              using React.js, JavaScript, and Tailwind CSS. I enjoy learning new
              technologies and turning ideas into practical digital experiences.
            </p>

            {/* Highlights */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-400" />
                Responsive Design
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-400" />
                React.js Projects
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className={`group inline-flex items-center gap-2 rounded-full
                bg-blue-600 px-6 py-3.5 font-semibold text-white
                shadow-lg shadow-blue-600/20 transition-all duration-300
                hover:-translate-y-1 hover:bg-blue-500 ${focusStyle}`}
              >
                View My Projects
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300
                  group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 rounded-full
                border border-gray-600 px-6 py-3.5 font-semibold
                text-white transition-all duration-300
                hover:border-blue-400 hover:bg-blue-400/5
                hover:text-blue-300 ${focusStyle}`}
              >
                Contact Me
                <Mail size={18} />
              </Link>

              <a
                href="/resume.pdf"
                download
                className={`inline-flex items-center gap-2 rounded-full
                border border-gray-700 px-6 py-3.5 font-semibold
                text-gray-300 transition-all duration-300
                hover:border-blue-400 hover:text-white ${focusStyle}`}
              >
                Download CV
                <Download size={18} />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-9 flex items-center gap-3">
              <span className="mr-1 text-sm text-gray-500">Find me on</span>

              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isEmail = social.name === "Email";

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    aria-label={social.name}
                    title={social.name}
                    className={`flex h-10 w-10 items-center justify-center
                    rounded-full border border-gray-700 text-gray-400
                    transition-all duration-300 hover:-translate-y-1
                    hover:border-blue-500 hover:bg-blue-600
                    hover:text-white ${focusStyle}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Profile */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative">
              {/* Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 scale-90 rounded-full
                bg-blue-600/30 blur-3xl"
              />

              {/* Decorative Ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full
                border border-blue-400/20"
              />

              {/* Profile Image */}
              <div
                className="relative flex h-64 w-64 items-center justify-center
                overflow-hidden rounded-full border-4 border-blue-500/40
                bg-gray-800 shadow-2xl shadow-blue-900/30
                sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px]"
              >
                <img
                  src="/profile.png"
                  alt="Rupes Chakma, Frontend Developer"
                  className="h-full w-full object-cover object-top"
                  fetchPriority="high"
                />
              </div>

              {/* Floating Skill Card */}
              <div
                className="absolute -bottom-5 -left-3 flex items-center gap-3
                rounded-2xl border border-gray-200/70 bg-white
                px-4 py-3 shadow-xl sm:-left-8 sm:px-5 sm:py-4"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center
                  rounded-xl bg-blue-50 text-blue-600"
                >
                  <Code2 size={23} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">My Focus</p>
                  <p className="font-bold text-gray-900">React & Web Design</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div
                className="absolute -right-2 top-8 flex items-center gap-2
                rounded-full border border-gray-700 bg-gray-900/95
                px-4 py-2.5 shadow-lg sm:-right-5"
              >
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                <span className="text-xs font-medium text-gray-200 sm:text-sm">
                  Always Learning
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
          aria-label="Scroll down"
          className={`absolute bottom-5 left-1/2 hidden -translate-x-1/2
          flex-col items-center gap-1 text-gray-500 transition
          hover:text-blue-400 md:flex ${focusStyle}`}
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={18} className="animate-bounce" />
        </a>
      </section>
    </main>
  );
};

export default Home;
