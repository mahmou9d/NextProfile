"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useTranslation } from "@/components/Usetranslation";
import Link from "next/link";
import Title from "./Title";

const ContactUs = () => {
  const { t, isArabic, dir } = useTranslation();

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
      newErrors.from_name = t.contact.validation.nameRequired;
      valid = false;
    }

    if (!form.from_email.trim()) {
      newErrors.from_email = t.contact.validation.emailRequired;
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) {
      newErrors.from_email = t.contact.validation.emailInvalid;
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = t.contact.validation.messageRequired;
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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        setSubmitted(true);
        setForm({ from_name: "", from_email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      });
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: t.contact.info.phone,
      value: "01153032052",
      link: "tel:01153032052",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: t.contact.info.email,
      value: "contact@webvitas.com",
      link: "mailto:contact@webvitas.com",
    },
    {
      icon: <FaGlobe className="text-2xl" />,
      title: t.contact.info.website,
      value: "www.webvitas.com",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      Icon: FaGlobe,
      label: t.contact.social.website,
      link: "#",
    },
    {
      Icon: FaEnvelope,
      label: t.contact.social.email,
      link: "mailto:contact@webvitas.com",
    },
    {
      Icon: FaPhoneAlt,
      label: t.contact.social.phone,
      link: "tel:01153032052",
    },
  ];

  return (
    <section
      id="contact"
      dir={dir}
      className="relative w-full min-h-screen py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <Title
          subtitle={t.contact.subtitle}
          title1={t.contact.title1}
          title2={t.contact.title2}
          description={null}
          title3={null}
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Form Card */}
          <div className="group relative">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 border border-gray-700/50 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 p-8">
              {/* Top Glow Effect */}
              {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

              <div onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <FaUser
                    className={`absolute top-1/2 -translate-y-1/2 text-gray-400 z-10 ${isArabic ? "right-4" : "left-4"}`}
                  />
                  <input
                    type="text"
                    name="from_name"
                    placeholder={t.contact.form.namePlaceholder}
                    value={form.from_name}
                    onChange={handleChange}
                    className={`w-full py-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${
                      isArabic ? "pr-12 pl-4" : "pl-12 pr-4"
                    }`}
                  />
                  {errors.from_name && (
                    <p
                      className={`text-red-400 text-sm mt-2 ${isArabic ? "text-right" : "text-left"}`}
                    >
                      {errors.from_name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="relative">
                  <FaEnvelope
                    className={`absolute top-1/2 -translate-y-1/2 text-gray-400 z-10 ${isArabic ? "right-4" : "left-4"}`}
                  />
                  <input
                    type="email"
                    name="from_email"
                    placeholder={t.contact.form.emailPlaceholder}
                    value={form.from_email}
                    onChange={handleChange}
                    className={`w-full py-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${
                      isArabic ? "pr-12 pl-4" : "pl-12 pr-4"
                    }`}
                  />
                  {errors.from_email && (
                    <p
                      className={`text-red-400 text-sm mt-2 ${isArabic ? "text-right" : "text-left"}`}
                    >
                      {errors.from_email}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <FaComment
                    className={`absolute top-4 text-gray-400 z-10 ${isArabic ? "right-4" : "left-4"}`}
                  />
                  <textarea
                    name="message"
                    placeholder={t.contact.form.messagePlaceholder}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full py-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 resize-none h-40 transition-all duration-300 ${
                      isArabic ? "pr-12 pl-4" : "pl-12 pr-4"
                    }`}
                  />
                  {errors.message && (
                    <p
                      className={`text-red-400 text-sm mt-2 ${isArabic ? "text-right" : "text-left"}`}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div
                  onClick={handleSubmit}
                  className="group/btn relative w-full overflow-hidden cursor-pointer"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 " /> */}
                  <div className="relative flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                    <span>{t.contact.form.submitButton}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        isArabic
                          ? "rotate-180 group-hover/btn:-translate-x-1"
                          : "group-hover/btn:translate-x-1"
                      }`}
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
                      {t.contact.form.successMessage}
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom Corner Accent */}
              <div
                className={`absolute right-0 bottom-0 w-40 h-40 bg-gradient-to-tl from-blue-500/10 via-pink-500/5 to-transparent rounded-tl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="space-y-6">
            {/* Info Cards */}
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                className="group/info relative block"
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 border border-gray-700/50 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 p-6">
                  {/* Top Glow Effect */}
                  {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover/info:opacity-100 transition-opacity duration-500" /> */}

                  <div
                    className={`flex items-center gap-4 ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    {/* Icon */}
                    <div className="relative">
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl opacity-50 group-hover/info:opacity-75 transition-opacity " /> */}
                      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white shadow-2xl transform group-hover/info:scale-110 group-hover/info:rotate-6 transition-all duration-300">
                        {info.icon}
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={`flex-1 ${isArabic ? "text-right" : "text-left"}`}
                    >
                      <h4 className="text-gray-400 text-sm font-semibold mb-1">
                        {info.title}
                      </h4>
                      <p className="text-white text-lg font-bold">
                        {info.value}
                      </p>
                    </div>

                    {/* Arrow */}
                    <svg
                      className={`w-6 h-6 text-gray-400 group-hover/info:text-blue-400 transform transition-all duration-300 ${
                        isArabic
                          ? "rotate-180 group-hover/info:-translate-x-1"
                          : "group-hover/info:translate-x-1"
                      }`}
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
                  <div
                    className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 via-pink-500/5 to-transparent rounded-tl-[80px] opacity-0 group-hover/info:opacity-100 transition-opacity duration-500`}
                  />
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {socialLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="group/social relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl opacity-0 group-hover/social:opacity-75 transition-opacity " />
                  <div className="relative flex flex-col items-center gap-2 p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 border border-gray-700/50 hover:border-blue-500/60 transition-all duration-300 transform hover:scale-105">
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
