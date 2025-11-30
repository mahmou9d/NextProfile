"use client";
import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Script from "next/script";

import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

import { motion } from "framer-motion";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        "CHMiAlP4ZYX3hYJxw"
      )
      .then(() => {
        setSubmitted(true);
        setForm({ from_name: "", from_email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      });
  };

  return (
    <>
      {/* 🔥 SEO META TAGS */}
      <Head>
        <title>
          {locale === "AR" ? "تواصل معنا | ويب دابل" : "Contact Us | WebDouble"}
        </title>

        <meta
          name="description"
          content={
            locale === "AR"
              ? "تواصل معنا لأي استفسار أو مشروع. نحن جاهزون لمساعدتك في بناء موقع احترافي."
              : "Contact us for any inquiries or project needs. We're ready to help build your website."
          }
        />

        <link rel="canonical" href="https://yourdomain.com/contact" />

        {/* OG */}
        <meta property="og:title" content="Contact | WebDouble" />
        <meta
          property="og:description"
          content="Get in touch with us for web development services."
        />
        <meta property="og:image" content="/contact-og.png" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | WebDouble" />
        <meta
          name="twitter:description"
          content="Get in touch with WebDouble team."
        />
        <meta name="twitter:image" content="/contact-og.png" />
      </Head>

      {/* 📌 JSON-LD Structured Data */}
      <Script id="contact-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact WebDouble",
          description: "Contact WebDouble team for web development services.",
          url: "https://yourdomain.com/contact",
          mainEntity: {
            "@type": "Organization",
            name: "WebDouble",
            email: "mohnud0987@gmail.com",
            telephone: "+201153032052",
          },
        })}
      </Script>

      {/* ---------------- UI لم يتغير ---------------- */}
      <section
        id="contact"
        dir={locale === "AR" ? "rtl" : "ltr"}
        className="w-full mx-auto my-24 px-6 lg:px-12 py-16 relative overflow-hidden rounded-4xl bg-gray-50 dark:bg-transparent transition-colors duration-300"
      >
        {" "}
        {/* Particle Background */}{" "}
        <motion.span
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,#00C3FF_0%,#1E3A8A_100%)] opacity-30"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        />{" "}
        <motion.span
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,#4F8CFF_0%,#0F296B_100%)] opacity-20"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        />{" "}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 relative z-10 text-gray-900 dark:text-white">
          {" "}
          {locale === "AR"
            ? "دعنا نبني شيئًا رائعًا"
            : "Let’s Build Something Amazing"}{" "}
        </h2>{" "}
        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          {" "}
          {/* Form */}{" "}
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-6 bg-white dark:bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl relative overflow-hidden transition-colors duration-300"
          >
            {" "}
            <div className="relative">
              {" "}
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 dark:text-white" />{" "}
              <input
                type="text"
                name="from_name"
                placeholder={locale === "AR" ? "اسمك" : "Your Name"}
                value={form.from_name}
                onChange={handleChange}
                className="w-full pl-12 p-4 rounded-xl border border-blue-400 bg-white/50 dark:bg-black/50 placeholder-gray-700 dark:placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all duration-300 text-gray-900 dark:text-white"
              />{" "}
            </div>{" "}
            {errors.from_name && (
              <p className="text-red-500 text-sm mt-1">{errors.from_name}</p>
            )}{" "}
            <div className="relative">
              {" "}
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 dark:text-white" />{" "}
              <input
                type="email"
                name="from_email"
                placeholder={
                  locale === "AR" ? "بريدك الإلكتروني" : "Your Email"
                }
                value={form.from_email}
                onChange={handleChange}
                className="w-full pl-12 p-4 rounded-xl border border-blue-400 bg-white/50 dark:bg-black/50 placeholder-gray-700 dark:placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all duration-300 text-gray-900 dark:text-white"
              />{" "}
            </div>{" "}
            {errors.from_email && (
              <p className="text-red-500 text-sm mt-1">{errors.from_email}</p>
            )}{" "}
            <div className="relative">
              {" "}
              <FaComment className="absolute left-4 top-4 text-gray-700 dark:text-white" />{" "}
              <textarea
                name="message"
                placeholder={locale === "AR" ? "رسالتك" : "Your Message"}
                value={form.message}
                onChange={handleChange}
                className="w-full pl-12 pt-4 p-4 rounded-xl border border-blue-400 bg-white/50 dark:bg-black/50 placeholder-gray-700 dark:placeholder-gray-300 focus:outline-none focus:ring-4 resize-none h-36 transition-all duration-300 text-gray-900 dark:text-white"
              />{" "}
            </div>{" "}
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}{" "}
            <motion.button
              type="submit"
              className="relative overflow-hidden rounded-xl font-bold py-4 text-white shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              {" "}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-80 animate-gradient-x -z-10"></span>{" "}
              <span className="relative z-10">
                {" "}
                {locale === "AR" ? "أرسل الرسالة" : "Send Message"}{" "}
              </span>{" "}
            </motion.button>{" "}
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 font-semibold text-center animate-pulse"
              >
                {" "}
                {locale === "AR"
                  ? "تم إرسال رسالتك بنجاح!"
                  : "Your message has been sent successfully!"}{" "}
              </motion.p>
            )}{" "}
          </form>{" "}
          {/* Contact Info */}{" "}
          <div className="flex-1 flex flex-col gap-6">
            {" "}
            <h3 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">
              {" "}
              {locale === "AR" ? "معلومات الاتصال" : "Contact Info"}{" "}
            </h3>{" "}
            {/* Contact Cards */}{" "}
            {[
              {
                icon: <FaPhoneAlt className="text-cyan-400 text-2xl" />,
                title: locale === "AR" ? "الهاتف" : "Phone",
                value: "01153032052",
              },
              {
                icon: <FaEnvelope className="text-cyan-400 text-2xl" />,
                title: locale === "AR" ? "البريد الإلكتروني" : "Email",
                value: "mohnud0987@gmail.com",
              },
              {
                icon: <FaGlobe className="text-cyan-400 text-2xl" />,
                title: locale === "AR" ? "الموقع" : "Website",
                value: "www.webagency.com",
              },
            ].map((info, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-white dark:bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                {" "}
                {info.icon}{" "}
                <div className="flex flex-col">
                  {" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    {info.title}{" "}
                  </span>{" "}
                  <span className="text-gray-700 dark:text-blue-200">
                    {" "}
                    {info.value}{" "}
                  </span>{" "}
                </div>{" "}
              </div>
            ))}{" "}
            {/* Social Links */}{" "}
            <div className="mt-8 flex gap-6">
              {[
                {
                  Icon: FaGlobe,
                  label: locale === "AR" ? "الموقع" : "Website",
                  link: "#",
                },
                {
                  Icon: FaEnvelope,
                  label: locale === "AR" ? "البريد" : "Email",
                  link: "mailto: mohnud0987@gmail.com",
                },
                {
                  Icon: FaPhoneAlt,
                  label: locale === "AR" ? "الهاتف" : "Phone",
                  link: "tel: 01153032052",
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="flex flex-col items-center gap-2 bg-gradient-to-tr from-blue-400 to-cyan-400 p-3 rounded-full hover:scale-110 transition-transform shadow-lg w-14 h-14 justify-center"
                >
                  <item.Icon size={28} className="text-white" />
                </Link>
              ))}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
};

export default ContactUs;
