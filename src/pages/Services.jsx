import React from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Globe,
  PanelsTopLeft,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      number: "01",
      title: "Frontend Web Development",
      description:
        "I build responsive and modern websites using HTML, CSS, JavaScript, React.js, and Tailwind CSS, with a focus on clean and reusable code.",
      features: [
        "React.js UI development",
        "Responsive layouts",
        "Reusable components",
      ],
      accent: "from-blue-500 to-cyan-400",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
    },
    {
      icon: Globe,
      number: "02",
      title: "WordPress & Elementor",
      description:
        "I create and customize WordPress websites with Elementor, focusing on attractive layouts, responsive design, and easy content management.",
      features: [
        "WordPress website setup",
        "Elementor page design",
        "Theme customization",
      ],
      accent: "from-purple-500 to-pink-400",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
    },
    {
      icon: PanelsTopLeft,
      number: "03",
      title: "Responsive UI Development",
      description:
        "I turn design ideas into clean, user-friendly interfaces that adapt to different screen sizes and provide a consistent browsing experience.",
      features: [
        "Mobile-first design",
        "Clean UI layouts",
        "Cross-device testing",
      ],
      accent: "from-emerald-500 to-teal-400",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
    },
  ];

  return (
    <section
      id="services"
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
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
            <Sparkles size={15} />
            What I Can Do
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            My <span className="text-blue-400">Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            I focus on building modern websites and responsive interfaces while
            continuously improving my frontend development skills.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-blue-950/30 sm:p-8"
              >
                {/* Top accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-widest text-gray-500">
                    {service.number}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                </div>

                {/* Icon */}
                <div
                  className={`mt-7 flex h-16 w-16 items-center justify-center rounded-2xl ${service.iconBg} ${service.iconColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={30} strokeWidth={1.7} />
                </div>

                {/* Content */}
                <h3 className="mt-7 text-xl font-bold leading-snug text-white sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-blue-400"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#111827]"
                  >
                    Discuss a Project
                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/[0.08] to-purple-500/[0.08] px-6 py-8 text-center sm:px-10">
          <h3 className="text-xl font-bold sm:text-2xl">
            Have a project in mind?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400">
            Let's discuss your ideas and explore how I can help bring them to
            life.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]"
          >
            Let's Talk
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
