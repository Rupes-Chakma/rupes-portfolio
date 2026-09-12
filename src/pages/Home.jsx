import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.substring(0, text.length + 1));

          if (text === currentRole) {
            setIsDeleting(true);
          }
        } else {
          setText(currentRole.substring(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 60 : text === currentRole ? 1500 : 100,
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-screen items-center bg-[#111827] px-6 pt-20"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="text-xl text-gray-300">Hello, my name is</p>

            <h1 className="mt-3 text-5xl font-bold text-white sm:text-6xl">
              Rupes <span className="text-blue-500">Chakma</span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-white">
              And I'm a <span className="text-blue-400">{text}</span>
              <span className="animate-pulse text-blue-400">|</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              I'm an entry-level Frontend Developer passionate about creating
              responsive, modern and user-friendly websites using modern web
              technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Hire Me */}
              <Link
                to="/contact"
                className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Hire Me
              </Link>

              {/* View Projects */}
              <Link
                to="/projects"
                className="rounded-full border border-gray-600 px-7 py-3 font-semibold text-white transition hover:border-blue-500 hover:text-blue-400"
              >
                View Projects
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-6">
              <a
                href="https://github.com/rupes-chakma"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="mailto:rupeschakma.dev@gmail.com"
                className="text-gray-400 transition hover:text-white"
              >
                Email ↗
              </a>
            </div>
          </div>

          {/* Right Profile */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-600/30 blur-3xl" />

              {/* Profile Circle */}
              <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border-8 border-blue-500/30 bg-gray-800 sm:h-96 sm:w-96">
                <img
                  src="/profile.jpg"
                  alt="Rupes Chakma"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Small Card */}
              <div className="absolute -bottom-5 -left-5 rounded-xl bg-white px-5 py-4 shadow-xl">
                <p className="text-xs text-gray-500">Specialization</p>

                <p className="font-bold text-gray-900">React + WordPress</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
