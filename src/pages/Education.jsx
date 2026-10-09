import React from "react";
import { educationData } from "../data/educationData";
import {
  GraduationCap,
  Award,
  CalendarDays,
  BookOpen,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#111827] px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <Sparkles size={16} />
            My Background
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Education &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            My academic journey and professional training that continue to shape
            my technical knowledge and development skills.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Timeline */}
        {educationData.length > 0 ? (
          <div className="relative mx-auto max-w-5xl">
            {/* Timeline Line */}
            <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-blue-500/70 via-purple-500/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {educationData.map((item, index) => {
                const isEducation =
                  item.type?.toLowerCase().includes("education") ||
                  item.type?.toLowerCase().includes("academic") ||
                  item.type?.toLowerCase().includes("diploma") ||
                  item.type?.toLowerCase().includes("ssc");

                const Icon = isEducation ? GraduationCap : Award;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={`${item.title}-${item.year}-${index}`}
                    className="relative grid grid-cols-[40px_minmax(0,1fr)] items-start gap-4 md:grid-cols-[1fr_64px_1fr] md:gap-5"
                  >
                    {/* Timeline Icon */}
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/30 bg-[#172238] text-blue-300 shadow-lg shadow-blue-950/30 md:col-start-2 md:row-start-1 md:mx-auto">
                      <Icon size={19} />
                    </div>

                    {/* Card */}
                    <article
                      className={`group min-w-0 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.055] hover:shadow-xl hover:shadow-blue-950/20 sm:p-6 ${
                        isLeft
                          ? "md:col-start-1 md:row-start-1"
                          : "md:col-start-3 md:row-start-1"
                      }`}
                    >
                      {/* Year & Type */}
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
                          <CalendarDays size={14} />
                          {item.year}
                        </span>

                        {item.type && (
                          <span className="rounded-lg border border-white/10 bg-gray-900/60 px-3 py-1.5 text-xs font-medium text-gray-300">
                            {item.type}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-blue-300 sm:text-xl">
                        {item.title}
                      </h3>

                      {/* Institute */}
                      <div className="mt-3 flex items-start gap-2.5">
                        <BookOpen
                          size={17}
                          className="mt-0.5 shrink-0 text-purple-400"
                        />
                        <h4 className="text-sm font-medium leading-6 text-gray-300">
                          {item.institute}
                        </h4>
                      </div>

                      {/* Description */}
                      {item.description && (
                        <p className="mt-4 text-sm leading-7 text-gray-400">
                          {item.description}
                        </p>
                      )}

                      {/* Bottom Accent */}
                      <div className="mt-5 h-px w-full bg-gradient-to-r from-blue-500/40 via-purple-500/20 to-transparent" />

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {isEducation
                            ? "Academic Background"
                            : "Learning & Development"}
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="text-gray-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                        />
                      </div>
                    </article>

                    {/* Empty side for alternating desktop layout */}
                    <div
                      className={`hidden md:block ${
                        isLeft ? "md:col-start-3" : "md:col-start-1"
                      } md:row-start-1`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <GraduationCap size={42} className="mx-auto text-blue-400" />
            <h3 className="mt-4 text-xl font-bold">
              Education Details Coming Soon
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Education and training details will be added here.
            </p>
          </div>
        )}

        {/* Bottom Note */}
        <div className="mt-14 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-gray-400">
            <GraduationCap size={18} className="text-blue-400" />
            Learning is a continuous journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
