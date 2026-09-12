const Services = () => {
  const services = [
    {
      icon: "</>",
      title: "Web Development",
      description:
        "I build responsive and modern websites using HTML, CSS, JavaScript and React.js with clean and reusable code.",
    },
    {
      icon: "WP",
      title: "WordPress & Elementor",
      description:
        "I create professional WordPress websites using Elementor with responsive layouts and customized designs.",
    },
    {
      icon: "UI",
      title: "Responsive UI Design",
      description:
        "I create clean, modern and user-friendly interfaces that work smoothly across desktop, tablet and mobile devices.",
    },
  ];

  return (
    <section id="services" className="bg-[#111827] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            What I Do
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">My Services</h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        {/* Services */}
        <div className="grid gap-7 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-700 bg-[#1f2937] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Icon */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/10 text-2xl font-bold text-blue-400 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-7 text-2xl font-bold">{service.title}</h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>

              {/* Button */}
              <a
                href="#contact"
                className="mt-6 inline-block font-semibold text-blue-400 transition hover:text-white"
              >
                Get Started →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
