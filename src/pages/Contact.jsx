import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import {
  ArrowUpRight,
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_NUMBER = "8801648582639";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError("Please fill in all fields before sending your message.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const whatsappMessage = [
      "Hello Rupes!",
      "",
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Subject: ${subject.trim()}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n");

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const contactItems = [
    {
      title: "Email Me",
      value: "rupeschakma.dev@gmail.com",
      href: "mailto:rupeschakma.dev@gmail.com",
      icon: <FaEnvelope />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Location",
      value: "Chattogram, Bangladesh",
      href: null,
      icon: <FaMapMarkerAlt />,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      title: "GitHub",
      value: "github.com/Rupes-Chakma",
      href: "https://github.com/Rupes-Chakma",
      icon: <FaGithub />,
      color: "text-gray-200",
      bg: "bg-white/10",
    },
    {
      title: "LinkedIn",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/rupescse/",
      icon: <FaLinkedinIn />,
      color: "text-sky-400",
      bg: "bg-sky-500/10",
    },
  ];

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#111827]/80 px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#111827] px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <Sparkles size={16} />
            Get In Touch
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a project idea, a job opportunity, or just want to say hello? I
            would love to hear from you.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Main Content */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Information */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <MessageCircle size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  Contact Information
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Let's start a conversation.
                </p>
              </div>
            </div>

            <p className="mb-8 text-sm leading-7 text-gray-400">
              I am open to frontend development projects, collaboration, and
              opportunities to learn and grow professionally.
            </p>

            {/* Contact Items */}
            <div className="space-y-3">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl ${item.bg} ${item.color}`}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-gray-500">
                        {item.title}
                      </p>
                      <p className="mt-1 break-words text-sm font-medium text-gray-200 transition-colors group-hover:text-blue-300">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-gray-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                      />
                    )}
                  </>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-gray-900/50 p-4 transition hover:border-blue-400/30 hover:bg-white/[0.04]"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-gray-900/50 p-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-semibold text-white transition hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <div className="mb-7">
              <h3 className="text-xl font-bold sm:text-2xl">
                Send Me a Message
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Fill out the form below to prepare a message in WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Name <span className="text-blue-400">*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Email <span className="text-blue-400">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject <span className="text-blue-400">*</span>
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className={inputClass}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message <span className="text-blue-400">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`${inputClass} resize-y`}
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/20 transition hover:from-blue-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#111827]"
              >
                <Send size={17} />
                Prepare WhatsApp Message
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                Your message will open in WhatsApp for you to review and send.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center justify-center gap-2 text-sm text-gray-500">
            <CheckCircle2 size={16} className="text-blue-400" />
            Thanks for visiting my portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
