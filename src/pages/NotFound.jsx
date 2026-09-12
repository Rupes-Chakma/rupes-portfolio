import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#111827] px-6 pt-20 text-white">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-8xl font-extrabold tracking-tight text-blue-500 sm:text-9xl">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Page Not Found</h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md leading-7 text-gray-400">
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        {/* Back Home Button */}
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
