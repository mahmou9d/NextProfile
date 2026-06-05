"use client";
import React, { useState, useEffect, useRef, MouseEvent } from "react";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPhoneAlt,
  FaGlobe,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "@/components/Usetranslation";
import Link from "next/link";
import Title from "./Title";

const ContactUs = () => {
  const { t, isArabic, dir } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    file: null as File | null,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    file: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const processFile = (file: File | null) => {
    setErrors((prev) => ({ ...prev, file: "" }));

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: isArabic
            ? "حجم الملف كبير جداً (الحد الأقصى 5 ميجابايت)"
            : "File size too large (Max 5MB)",
        }));
        setForm((prev) => ({ ...prev, file: null }));
        return false;
      }

      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/webp",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          file: isArabic
            ? "نوع الملف غير مدعوم (فقط صور و PDF)"
            : "Unsupported file type (Images & PDF only)",
        }));
        setForm((prev) => ({ ...prev, file: null }));
        return false;
      }
    }
    setForm((prev) => ({ ...prev, file }));
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!processFile(file)) {
      e.target.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files ? e.dataTransfer.files[0] : null;
    processFile(file);
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "", file: errors.file };

    if (!form.name.trim()) {
      newErrors.name = t.contact.validation.nameRequired;
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = t.contact.validation.emailRequired;
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t.contact.validation.emailInvalid;
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = t.contact.validation.messageRequired;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      if (form.file) {
        formData.append("file", form.file);
      }

      const response = await fetch("https://formspree.io/f/mjgopynd", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "", file: null });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
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
      link: "https://www.webvitas.com",
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
    <>
      <style>{`
        @keyframes circular-orbit {
          0% { transform: rotate(0deg) translateX(6px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(6px) rotate(-360deg); }
        }
      `}</style>
      <section
        id="contact"
        ref={sectionRef}
        dir={dir}
        className="relative w-full py-32 overflow-hidden bg-[#080810]"
      >
        {/* Background Decorative Orbs */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#7c3aed]/10 blur-[120px] rounded-full pointer-events-none animate-[pulse_12s_infinite]" />
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-[#db2777]/10 blur-[100px] rounded-full pointer-events-none animate-[pulse_10s_infinite_1s]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Title
            subtitle={t.contact.subtitle}
            title1={t.contact.title1}
            title2={t.contact.title2}
            description={
              isArabic
                ? "نحن هنا لتحويل أفكارك إلى واقع رقمي مذهل. ابدأ رحلتك معنا اليوم."
                : "We are here to turn your ideas into a stunning digital reality. Start your journey with us today."
            }
            title3={null}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            {/* Glass Form Side */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`lg:col-span-7 group relative p-[1px] rounded-[2.5rem] overflow-hidden transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 group-hover:from-[#a78bfa]/50 group-hover:to-[#f472b6]/50 transition-colors duration-500" />

              <div
                className="relative h-full p-8 md:p-12 rounded-[2.5rem] bg-[#0c0c14]/90 backdrop-blur-3xl flex flex-col"
                style={{
                  transform: `perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                {/* Spotlight Overlay */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(167, 139, 250, 0.08), transparent 40%)`,
                  }}
                />

                {/* Noise Effect */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/75 uppercase tracking-[0.2em] px-1">
                        {t.contact.form.namePlaceholder}
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white/75 focus:outline-none focus:border-[#a78bfa]/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-[#a78bfa]/10 focus:shadow-[0_0_25px_-5px_rgba(167,139,250,0.3)] transition-all"
                        />
                        {errors.name && (
                          <p className="text-[#f472b6] text-sm font-bold mt-2 animate-pulse">
                            {errors.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/75 uppercase tracking-[0.2em] px-1">
                        {t.contact.form.emailPlaceholder}
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white/75 focus:outline-none focus:border-[#a78bfa]/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-[#a78bfa]/10 focus:shadow-[0_0_25px_-5px_rgba(167,139,250,0.3)] transition-all"
                        />
                        {errors.email && (
                          <p className="text-[#f472b6] text-sm font-bold mt-2 animate-pulse">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/75 uppercase tracking-[0.2em] px-1">
                      {isArabic
                        ? "المرفقات ( اختياريه )"
                        :"Attachments (optional)"}
                    </label>
                    <div
                      className="relative group/file"
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        id="file-upload"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="file-upload"
                        className={`flex items-center justify-between w-full px-6 py-4 rounded-2xl border backdrop-blur-3xl transition-all cursor-pointer ${
                          isDragging
                            ? "border-[#a78bfa] bg-white/[0.08] shadow-[0_0_30px_rgba(167,139,250,0.1)]"
                            : "border-white/10 bg-white/[0.03] text-white/75 group-hover/file:border-[#a78bfa]/30 group-hover/file:bg-white/[0.05]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <FaCloudUploadAlt
                            className={`text-xl ${isDragging ? "text-[#a78bfa] animate-bounce" : "text-[#a78bfa]"}`}
                          />
                          <span className="text-sm font-medium">
                            {form.file
                              ? form.file.name
                              : isDragging
                                ? isArabic
                                  ? "اترك الملف هنا..."
                                  : "Drop file here..."
                                : isArabic
                                  ? "اسحب وارفق ملف المشروع..."
                                  : "Drag & drop project file..."}
                          </span>
                        </div>
                        <span className="text-sm font-black uppercase tracking-widest text-white/75 bg-white/5 px-2 py-1 rounded-lg">
                          {isArabic ? "تصفح" : "Browse"}
                        </span>
                      </label>
                      {errors.file && (
                        <p className="text-[#f472b6] text-sm font-bold mt-2 animate-pulse">
                          {errors.file}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/75 uppercase tracking-[0.2em] px-1">
                      {t.contact.form.messagePlaceholder}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white/75 focus:outline-none focus:border-[#a78bfa]/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-[#a78bfa]/10 focus:shadow-[0_0_25px_-5px_rgba(167,139,250,0.3)] transition-all min-h-[160px] resize-none"
                    />
                    {errors.message && (
                      <p className="text-[#f472b6] text-sm font-bold mt-2 animate-pulse">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative py-5 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#db2777] text-white/75 font-syne font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)] transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t.contact.form.submittingButton}</span>
                      </div>
                    ) : (
                      <>
                        {t.contact.form.submitButton}
                        <FaArrowRight
                          className={`${isArabic ? "rotate-180" : ""}`}
                        />
                      </>
                    )}
                  </button>

                  {submitted && (
                    <div className="p-4 rounded-xl bg-[#22d98a]/10 border border-[#22d98a]/20 text-[#22d98a] text-center font-bold text-sm animate-fade-in">
                      {t.contact.form.successMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Glass Info Side */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
              {contactInfo.map((info, idx) => (
                <Link
                  key={idx}
                  href={info.link}
                  className={`group relative p-[1px] rounded-[2rem] overflow-hidden transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
                  style={{ transitionDelay: `${(idx + 3) * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 group-hover:from-[#a78bfa]/40 transition-colors duration-500" />
                  <div
                    className="relative p-8 rounded-[2rem] bg-[#0c0c14]/90 backdrop-blur-3xl flex items-center gap-6"
                    style={{
                      transform: `perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))`,
                      transition: "transform 0.3s ease-out",
                    }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a78bfa]/10 border border-[#a78bfa]/20 text-[#a78bfa] group-hover:scale-110 group-hover:bg-[#a78bfa] group-hover:text-white/75 transition-all duration-500">
                      {info.icon}
                    </div>
                    <div className={isArabic ? "text-right" : "text-left"}>
                      <h4 className="text-sm font-bold text-white/75 uppercase tracking-[0.2em] mb-1">
                        {info.title}
                      </h4>
                      <p className="text-lg font-bold text-white/75 tracking-tight">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

              <div
                className={`grid grid-cols-3 gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: "1000ms" }}
              >
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="group relative p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center gap-3 hover:bg-[#a78bfa]/5 hover:border-[#a78bfa]/30 transition-all duration-500"
                  >
                    <item.Icon className="text-2xl text-white/75 group-hover:text-[#a78bfa] group-hover:scale-110 transition-all duration-500" />
                    <span className="text-sm font-bold text-white/75 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>
    </>
  );
};

export default ContactUs;
