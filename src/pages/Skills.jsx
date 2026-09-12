import React from "react";
import { skillsData, toolsData } from "../data/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="bg-white px-6 py-24 text-gray-800">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            My Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">My Skills</h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold">
              My technical skills & experience
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              I work with modern frontend technologies and website development
              tools to create responsive, clean, and user-friendly web
              experiences.
            </p>

            {/* Tools */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {toolsData.map((tool) => (
                <div
                  key={tool}
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-center font-medium transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Progress Bars */}
          <div className="space-y-7">
            {skillsData.map((skill) => (
              <div key={skill.name}>
                {/* Skill Name */}
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold">{skill.name}</span>

                  <span className="text-sm font-medium text-gray-500">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-1000"
                    style={{
                      width: `${skill.percentage}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
