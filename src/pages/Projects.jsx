import React from "react";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#111827] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Work
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">My Projects</h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Here are some of the projects I have worked on using modern web
            technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-gray-700 bg-[#1f2937] transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 opacity-0 transition duration-300 group-hover:opacity-100">
                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
                  >
                    Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white px-5 py-2.5 font-semibold text-white hover:bg-white hover:text-gray-900"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-7">
                <p className="text-sm font-medium text-blue-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/rupes-chakma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-blue-500 px-7 py-3 font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white"
          >
            View More on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
