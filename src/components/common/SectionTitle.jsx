import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-sm md:text-base">{subtitle}</p>
      )}
      <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
