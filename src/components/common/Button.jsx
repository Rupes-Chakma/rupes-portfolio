import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition duration-300 hover:bg-blue-700 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
