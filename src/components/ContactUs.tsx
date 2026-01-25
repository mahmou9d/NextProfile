"use client";
import React, { useState, useContext } from "react";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { LocaleContext } from "./LocaleContext";
import Link from "next/link";

const ContactUs = () => {
  const { locale } = useContext(LocaleContext);

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    let valid = true;
    let newErrors = { from_name: "", from_email: "", message: "" };

    if (!form.from_name.trim()) {
      newErrors.from_name =
        locale === "AR" ? "الاسم مطلوب" : "Name is required";
      valid = false;
    }

    if (!form.from_email.trim()) {
      newErrors.from_email =
        locale === "AR" ? "البريد الإلكتروني مطلوب" : "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) {
      newErrors.from_email =
        locale === "AR" ? "البريد غير صحيح" : "Invalid email format";
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message =
        locale === "AR" ? "الرسالة مطلوبة" : "Message cannot be empty";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .send(
        "service_qy4efie",
        "template_0vh2uys",
        {
          from_name: form.from_name,
          from_email: form.from_email,
          message: form.message,
        },
        "CHMiAlP4ZYX3hYJxw",
      )
      .then(() => {
        setSubmitted(true);
        setForm({ from_name: "", from_email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      });
  };

  return (
    <section
      id="contact"
      dir={locale === "AR" ? "rtl" : "ltr"}
      className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20 md:mb-28 space-y-6">
          {/* Subtitle with Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-pink-500/10 border border-blue-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {locale === "AR" ? "تواصل معنا" : "Get in Touch"}
              </span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500" />
          </div>

          {/* Main Title */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            <span className="gradient-text inline-block bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent">
              {locale === "AR" ? "دعنا نبني" : "Let's Build"}
            </span>
            <br />
            <span className="gradient-text-x inline-block bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {locale === "AR" ? "شيئًا رائعًا" : "Something Amazing"}
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <div className="pulse-line h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="relative">
              <div className="absolute inset-0 animate-ping">
                <div className="w-4 h-4 rounded-full bg-blue-500/50" />
              </div>
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500" />
            </div>
            <div className="pulse-line h-1 w-20 rounded-full bg-gradient-to-l from-transparent via-pink-500 to-transparent" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Form Card */}
          <div className="group relative">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-2xl border border-gray-700/50 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 p-8">
              {/* Top Glow Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                  <input
                    type="text"
                    name="from_name"
                    placeholder={locale === "AR" ? "اسمك" : "Your Name"}
                    value={form.from_name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  {errors.from_name && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.from_name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                  <input
                    type="email"
                    name="from_email"
                    placeholder={
                      locale === "AR" ? "بريدك الإلكتروني" : "Your Email"
                    }
                    value={form.from_email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  {errors.from_email && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.from_email}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <FaComment className="absolute left-4 top-4 text-gray-400 z-10" />
                  <textarea
                    name="message"
                    placeholder={locale === "AR" ? "رسالتك" : "Your Message"}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 resize-none h-40 transition-all duration-300"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div
                  onClick={handleSubmit}
                  className="group/btn relative w-full overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 rounded-xl opacity-0 group-hover/btn:opacity-100 blur transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                    <span>
                      {locale === "AR" ? "أرسل الرسالة" : "Send Message"}
                    </span>
                    <svg
                      className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/50">
                    <span className="text-green-400 font-semibold">
                      {locale === "AR"
                        ? "تم إرسال رسالتك بنجاح!"
                        : "Your message has been sent successfully!"}
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom Corner Accent */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-500/10 via-pink-500/5 to-transparent rounded-tl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="space-y-6">
            {/* Info Cards */}
            {[
              {
                icon: <FaPhoneAlt className="text-2xl" />,
                title: locale === "AR" ? "الهاتف" : "Phone",
                value: "01153032052",
                link: "tel:01153032052",
              },
              {
                icon: <FaEnvelope className="text-2xl" />,
                title: locale === "AR" ? "البريد الإلكتروني" : "Email",
                value: "mohnud0987@gmail.com",
                link: "mailto:mohnud0987@gmail.com",
              },
              {
                icon: <FaGlobe className="text-2xl" />,
                title: locale === "AR" ? "الموقع" : "Website",
                value: "www.webagency.com",
                link: "#",
              },
            ].map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                className="group/info relative block"
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-2xl border border-gray-700/50 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 p-6">
                  {/* Top Glow Effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover/info:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover/info:opacity-75 transition-opacity" />
                      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white shadow-2xl transform group-hover/info:scale-110 group-hover/info:rotate-6 transition-all duration-300">
                        {info.icon}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h4 className="text-gray-400 text-sm font-semibold mb-1">
                        {info.title}
                      </h4>
                      <p className="text-white text-lg font-bold">
                        {info.value}
                      </p>
                    </div>

                    {/* Arrow */}
                    <svg
                      className="w-6 h-6 text-gray-400 group-hover/info:text-blue-400 transform group-hover/info:translate-x-1 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>

                  {/* Bottom Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 via-pink-500/5 to-transparent rounded-tl-[80px] opacity-0 group-hover/info:opacity-100 transition-opacity duration-500" />
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                {
                  Icon: FaGlobe,
                  label: locale === "AR" ? "الموقع" : "Website",
                  link: "#",
                },
                {
                  Icon: FaEnvelope,
                  label: locale === "AR" ? "البريد" : "Email",
                  link: "mailto:mohnud0987@gmail.com",
                },
                {
                  Icon: FaPhoneAlt,
                  label: locale === "AR" ? "الهاتف" : "Phone",
                  link: "tel:01153032052",
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="group/social relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover/social:opacity-75 transition-opacity" />
                  <div className="relative flex flex-col items-center gap-2 p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-2xl border border-gray-700/50 hover:border-blue-500/60 transition-all duration-300 transform hover:scale-110">
                    <item.Icon className="text-3xl text-blue-400 group-hover/social:text-pink-400 transition-colors" />
                    <span className="text-xs text-gray-400 font-semibold">
                      {item.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
};

export default ContactUs;
