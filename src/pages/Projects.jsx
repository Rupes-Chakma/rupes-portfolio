import React from "react";
import { projectsData } from "../data/projectsData";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  FolderCode,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#111827] px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <Sparkles size={16} />
            My Portfolio
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A selection of projects I have built while learning and practicing
            web development, focusing on responsive design and user-friendly
            experiences.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Projects Grid */}
        {projectsData.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {projectsData.map((project) => (
              <article
                key={project.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-blue-950/20"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-800">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-950 to-gray-900">
                      <FolderCode size={56} className="text-blue-400/70" />
                    </div>
                  )}

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Category */}
                  {project.category && (
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-white/15 bg-gray-950/70 px-3 py-1.5 text-xs font-semibold text-blue-200 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* Quick Links */}
                  <div className="absolute bottom-4 right-4 flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus-within:translate-y-0 focus-within:opacity-100">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-gray-900/90 text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-bold leading-snug transition-colors group-hover:text-blue-300">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-gray-900/80 px-2.5 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:border-blue-400/30 hover:text-blue-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Card Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs font-medium text-gray-500">
                      Project Details
                    </span>

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                      >
                        Live Preview
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    ) : project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                      >
                        View Code
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500">In Progress</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center">
            <FolderCode size={42} className="mx-auto text-gray-500" />
            <h3 className="mt-4 text-xl font-bold">Projects Coming Soon</h3>
            <p className="mt-2 text-sm text-gray-400">
              I am working on new projects. Please check back soon.
            </p>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <p className="mb-5 text-sm text-gray-400">
            Want to explore more of my work?
          </p>

          <a
            href="https://github.com/Rupes-Chakma"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/5 px-7 py-3.5 font-semibold text-blue-300 transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FaGithub size={19} />
            View More on GitHub
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
