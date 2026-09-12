import React from "react";
import Button from "../components/common/Button";

const About = () => {
  return (
    <section id="about" className="bg-white px-6 py-24 text-gray-800">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">About Me</h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        {/* Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-4 border-blue-600" />

              {/* Image */}
              <div className="relative h-80 w-80 overflow-hidden rounded-3xl bg-gray-100 sm:h-96 sm:w-96">
                <img
                  src="/profile.jpg"
                  alt="Rupes Chakma"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-3xl font-bold leading-tight">
              I'm Rupes and I'm a{" "}
              <span className="text-blue-600">Frontend Developer</span>
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              I'm an entry-level Front-End Developer with a Diploma in Computer
              Technology and hands-on experience in HTML, CSS, JavaScript,
              React.js, WordPress, and Elementor.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              I enjoy creating responsive, clean, and user-friendly websites. My
              main goal is to continuously improve my development skills and
              build modern web experiences.
            </p>

            {/* Information */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-4 transition hover:shadow-md">
                <p className="text-sm text-gray-500">Education</p>

                <p className="mt-1 font-semibold">
                  Diploma in Computer Technology
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4 transition hover:shadow-md">
                <p className="text-sm text-gray-500">Main Focus</p>

                <p className="mt-1 font-semibold">React Frontend Development</p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4 transition hover:shadow-md">
                <p className="text-sm text-gray-500">Experience</p>

                <p className="mt-1 font-semibold">
                  Web Development & WordPress
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4 transition hover:shadow-md">
                <p className="text-sm text-gray-500">Location</p>

                <p className="mt-1 font-semibold">Chattogram, Bangladesh</p>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="mt-9">
              <a href="/Rupes-Chakma-CV.pdf" download>
                <Button className="rounded-full px-7 py-3.5">
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
