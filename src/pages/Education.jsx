import React from "react";
import { educationData } from "../data/educationData";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
            My Background
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Education & <span className="text-blue-600">Certification</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            My academic journey, professional training, and certifications that
            helped me build my technical skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform md:-translate-x-1/2"></div>

          {educationData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 border-4 border-white dark:border-gray-900 rounded-full transform -translate-x-1/2 z-10"></div>

              {/* Card */}
              <div
                className={`w-full md:w-[45%] ml-10 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700">
                  {/* Year & Type */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-sm font-semibold text-blue-600">
                      {item.year}
                    </span>

                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      {item.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Institute */}
                  <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                    {item.institute}
                  </h4>

                  {/* Description */}
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
