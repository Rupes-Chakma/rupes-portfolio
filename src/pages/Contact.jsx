import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

import Button from "../components/common/Button";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Contact <span className="text-blue-600">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Have a project in mind or want to work together? Feel free to get in
            touch with me.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-900">
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Let's Talk
            </h3>

            <p className="mb-8 leading-7 text-gray-600 dark:text-gray-400">
              I am always open to discussing new projects, creative ideas, or
              opportunities to be part of your team.
            </p>

            {/* Email */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                <FaEnvelope className="text-xl" />
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>

                <a
                  href="mailto:your@email.com"
                  className="font-medium text-gray-900 transition hover:text-blue-600 dark:text-white"
                >
                  your@email.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                <FaMapMarkerAlt className="text-xl" />
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </p>

                <p className="font-medium text-gray-900 dark:text-white">
                  Chattogram, Bangladesh
                </p>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                <FaGithub className="text-xl" />
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  GitHub
                </p>

                <a
                  href="https://github.com/rupes-chakma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-900 transition hover:text-blue-600 dark:text-white"
                >
                  github.com/rupes-chakma
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              ></textarea>
            </div>

            {/* Reusable Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
