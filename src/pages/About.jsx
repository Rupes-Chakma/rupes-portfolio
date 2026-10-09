import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownToLine,
  ArrowRight,
  Code2,
  GraduationCap,
  MapPin,
  Monitor,
  Sparkles,
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "Diploma in Computer Technology",
    },
    {
      icon: Code2,
      label: "Main Focus",
      value: "React & Frontend Development",
    },
    {
      icon: Monitor,
      label: "Technologies",
      value: "JavaScript, React & Tailwind CSS",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chattogram, Bangladesh",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#111827] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
            <Sparkles size={15} />
            Get to know me
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            About <span className="text-blue-400">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A little introduction about my background, interests, and journey in
            web development.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Profile image */}
          <div className="flex justify-center">
            <div className="group relative w-full max-w-[380px]">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-[2rem] border border-blue-500/30 transition-transform duration-500 group-hover:rotate-2" />

              <div className="absolute -inset-1 rounded-[1.8rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-sm" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gray-900 shadow-2xl shadow-black/30">
                <img
                  src="/profile.png"
                  alt="Rupes Chakma"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Image overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent p-6 pt-20">
                  <p className="text-xl font-bold">Rupes Chakma</p>
                  <p className="mt-1 text-sm text-blue-300">
                    Frontend Developer
                  </p>
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-5 -right-2 rounded-2xl border border-white/10 bg-gray-900/95 px-4 py-3 shadow-xl sm:-right-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                    <Code2 size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Web Development
                    </p>
                    <p className="text-xs text-gray-400">Learning & building</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About text */}
          <div className="mt-5 lg:mt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
              Who I Am
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Hello, I'm Rupes — a{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h3>

            <p className="mt-6 text-sm leading-8 text-gray-300 sm:text-base">
              I'm an entry-level Frontend Developer with a background in
              Computer Technology. I work with HTML, CSS, JavaScript, React.js,
              Tailwind CSS, WordPress, and Elementor.
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-400 sm:text-base">
              I enjoy building responsive websites with clean layouts and
              user-friendly interfaces. I'm continuously improving my coding
              skills, learning modern frontend practices, and building projects
              to gain practical experience.
            </p>

            {/* Highlight cards */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.06]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold leading-6 text-gray-200">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download="Rupes_Chakma_CV.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]"
              >
                <ArrowDownToLine size={18} />
                Download CV
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-blue-400/50 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Contact Me
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
