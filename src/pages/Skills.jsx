import React from "react";
import { skillsData, toolsData } from "../data/skillsData";
import { Code2, Layers3, Sparkles, Wrench, ArrowUpRight } from "lucide-react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#111827] px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <Sparkles size={16} />
            What I Know
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to build responsive websites, create
            user-friendly interfaces, and continue growing as a frontend
            developer.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left: Tools & Technologies */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/10 sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <Wrench size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  Tools & Technologies
                </h3>
                <p className="mt-1 text-sm text-gray-400">Tools I work with</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {toolsData.map((tool, index) => (
                <div
                  key={tool}
                  className="group flex min-h-20 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-gray-900/70 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10"
                >
                  <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                    {tool}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 text-gray-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                  />
                </div>
              ))}
            </div>

            {/* Small Note */}
            <div className="mt-7 flex gap-3 rounded-2xl border border-blue-400/10 bg-blue-500/5 p-4">
              <Code2 className="mt-0.5 shrink-0 text-blue-400" size={20} />
              <p className="text-sm leading-6 text-gray-400">
                I focus on writing clean code, building responsive layouts, and
                improving my development skills through practice.
              </p>
            </div>
          </div>

          {/* Right: Skills */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/10 sm:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                <Layers3 size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  Technical Skills
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  My current learning journey
                </p>
              </div>
            </div>

            <div className="space-y-7">
              {skillsData.map((skill, index) => {
                const percentage = Math.min(
                  100,
                  Math.max(0, Number(skill.percentage) || 0),
                );

                return (
                  <div key={skill.name}>
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <span className="font-semibold text-gray-200">
                        {skill.name}
                      </span>

                      <span className="rounded-lg border border-blue-400/10 bg-blue-500/10 px-2.5 py-1 text-xs font-bold tabular-nums text-blue-300">
                        {percentage}%
                      </span>
                    </div>

                    <div
                      className="h-2.5 overflow-hidden rounded-full bg-gray-700/70"
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={percentage}
                    >
                      <div
                        className={`h-full rounded-full ${
                          index % 2 === 0
                            ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                            : "bg-gradient-to-r from-purple-500 to-pink-400"
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-6 text-gray-500">
              Skill levels are approximate self-assessments. Update them based
              on your actual knowledge and practical experience.
            </p>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 px-6 py-7 text-center sm:px-10">
          <h3 className="text-lg font-bold sm:text-xl">
            Always Learning, Always Building
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-gray-400">
            I am continuously learning new technologies and building projects to
            strengthen my frontend development skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
