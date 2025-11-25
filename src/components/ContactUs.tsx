"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPhone,
  FaGlobe,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="w-full mx-auto my-24 px-6 lg:px-12 py-16 relative overflow-hidden rounded-4xl">
      {/* Particle Background */}
      <motion.span
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,#00C3FF_0%,#1E3A8A_100%)] opacity-30"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />
      <motion.span
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,#4F8CFF_0%,#0F296B_100%)] opacity-20"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />

      <h2 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-12 relative z-10">
        Let’s Build Something Amazing
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        {/* Left: Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6 bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl relative overflow-hidden"
        >
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 font-semibold text-center animate-pulse"
            >
              Your message has been sent successfully!
            </motion.p>
          )}

          {/** Inputs with animated gradient focus */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-black" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full pl-12 p-4 rounded-xl border border-blue-400 bg-[#ffffff52] placeholder:text-black focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300"
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-black" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full pl-12 p-4 rounded-xl border border-blue-400 bg-[#ffffff52] placeholder:text-black focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50 transition-all duration-300"
              required
            />
          </div>

          <div className="relative">
            <FaComment className="absolute left-4 top-4 text-black" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full pl-12 pt-4 p-4 rounded-xl border border-blue-400 bg-[#ffffff52] placeholder:text-black focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 resize-none h-36 transition-all duration-300"
              required
            />
          </div>

          {/* Neon Gradient Button */}
          <motion.button
            type="submit"
            className="relative overflow-hidden rounded-xl font-bold py-4 text-white shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-80 animate-gradient-x -z-10"></span>
            <span className="relative z-10">Send Message</span>
          </motion.button>
        </form>

        {/* Right: Contact Info */}
        <div className="flex-1 flex flex-col gap-6 text-white">
          <h3 className="text-3xl font-extrabold mb-6">Contact Info</h3>

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FaPhoneAlt className="text-cyan-400 text-2xl" />
            <div className="flex flex-col">
              <span className="text-white font-semibold">Phone</span>
              <span className="text-blue-200">01009014597</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FaEnvelope className="text-cyan-400 text-2xl" />
            <div className="flex flex-col">
              <span className="text-white font-semibold">Email</span>
              <span className="text-blue-200">mohnud0987@gmail.com</span>
            </div>
          </div>

          {/* Website */}
          <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FaGlobe className="text-cyan-400 text-2xl" />
            <div className="flex flex-col">
              <span className="text-white font-semibold">Website</span>
              <span className="text-blue-200">www.webagency.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6">
            <a
              href="#"
              className="bg-gradient-to-tr from-blue-400 to-cyan-400 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <FaGlobe size={24} className="text-white" />
            </a>
            <a
              href="mailto:mohnud0987@gmail.com"
              className="bg-gradient-to-tr from-blue-400 to-cyan-400 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <FaEnvelope size={24} className="text-white" />
            </a>
            <a
              href="tel:01009014597"
              className="bg-gradient-to-tr from-blue-400 to-cyan-400 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <FaPhone size={24} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
