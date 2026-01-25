"use client";
import { useContext } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { LocaleContext } from "./LocaleContext";
import Image from "next/image";

const Footer = () => {
  const { locale } = useContext(LocaleContext);
  const linksEN = ["About", "Projects", "Testimonials", "Contact"];
  const linksAR = ["من نحن", "مشاريعنا", "آراء العملاء", "اتصل بنا"];

  return (
    <footer
      dir={locale === "AR" ? "rtl" : "ltr"}
      className="relative w-full overflow-hidden py-8 bg-gradient-to-b from-black via-gray-950 to-black border-t border-gray-800/50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className=" absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-500/10 rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="relative w-32 h-16">
              <Image
                src="/Webvitas.png"
                alt="Webvitas Logo"
                fill
                className="object-contain"
                loading="lazy"
                priority={false}
              />
            </div>

            <p className="text-gray-400 leading-relaxed">
              {locale === "AR"
                ? "نحن نصنع مواقع وتطبيقات مذهلة تنمي عملك وترتقي بعلامتك التجارية."
                : "We build stunning websites and apps that grow your business and elevate your brand."}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: FaFacebookF, link: "#" },
                { Icon: FaTwitter, link: "#" },
                { Icon: FaLinkedinIn, link: "#" },
                { Icon: FaGithub, link: "#" },
              ].map(({ Icon, link }, idx) => (
                <a key={idx} href={link} className="group relative w-11 h-11">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-75 transition-opacity" />
                  <div
                    className="relative w-full h-full rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 flex items-center justify-center hover:border-blue-500/60 transition-transform transition-opacity
 duration-300 transform hover:scale-110 hover:rotate-6"
                  >
                    <Icon
                      className="text-gray-400 group-hover:text-blue-400 transition-colors"
                      size={18}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
              {locale === "AR" ? "روابط سريعة" : "Quick Links"}
            </h3>
            <div className="space-y-3">
              {(locale === "AR" ? linksAR : linksEN).map((link, idx) => (
                <a
                  key={idx}
                  href={`#${linksEN[idx].toLowerCase()}`}
                  className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                  <span>{link}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
              {locale === "AR" ? "تواصل معنا" : "Contact"}
            </h3>
            <div className="space-y-3">
              {[
                {
                  label: locale === "AR" ? "الهاتف" : "Phone",
                  value: "01153032052",
                  link: "tel:01153032052",
                },
                {
                  label: locale === "AR" ? "البريد" : "Email",
                  value: "mohnud0987@gmail.com",
                  link: "mailto:mohnud0987@gmail.com",
                },
                {
                  label: locale === "AR" ? "الموقع" : "Website",
                  value: "www.Webvitas.com",
                  link: "#",
                },
              ].map((item, idx) => (
                <a key={idx} href={item.link} className="block group">
                  <p className="text-gray-500 text-sm">{item.label}</p>
                  <p className="text-gray-400 group-hover:text-blue-400 transition-colors">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
              {locale === "AR" ? "النشرة الإخبارية" : "Newsletter"}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {locale === "AR"
                ? "اشترك للحصول على آخر التحديثات والعروض"
                : "Subscribe to get latest updates and offers"}
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder={
                  locale === "AR" ? "بريدك الإلكتروني" : "Your email"
                }
                className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-transform transition-opacity
 duration-300"
              />
              <button
                className="absolute rounded-xl top-1/2 -translate-y-1/2 right-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white text-sm font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-transform transition-opacity
"
              >
                {locale === "AR" ? "اشترك" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            {locale === "AR"
              ? "© 2025 Webvitas. جميع الحقوق محفوظة."
              : "© 2025 Webvitas. All rights reserved."}
          </p>

          {/* Bottom Links */}
          <div className="flex items-center gap-6">
            {[
              { label: locale === "AR" ? "الخصوصية" : "Privacy", link: "#" },
              { label: locale === "AR" ? "الشروط" : "Terms", link: "#" },
              { label: locale === "AR" ? "الدعم" : "Support", link: "#" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-gray-500 text-sm hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
