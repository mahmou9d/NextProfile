"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "./Usetranslation";

const Footer = () => {
  const { t, isArabic, dir } = useTranslation();

  const quickLinks = [
    { label: t.footer.quickLinks.about, href: "#about" },
    { label: t.footer.quickLinks.projects, href: "#projects" },
    { label: t.footer.quickLinks.testimonials, href: "#testimonials" },
    { label: t.footer.quickLinks.contact, href: "#contact" },
  ];

  const contactInfo = [
    {
      label: t.footer.contactInfo.phone,
      value: "01153032052",
      link: "tel:01153032052",
    },
    {
      label: t.footer.contactInfo.email,
      value: "contact@webvitas.com",
      link: "mailto:contact@webvitas.com",
    },
    {
      label: t.footer.contactInfo.website,
      value: "www.webvitas.com",
      link: "#",
    },
  ];

  const socialLinks = [
    { Icon: FaFacebookF, link: "#" },
    { Icon: FaTwitter, link: "#" },
    {
      Icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/fo2sh1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    { Icon: FaGithub, link: "https://github.com/mahmou9d" },
  ];

  const bottomLinks = [
    { label: t.footer.links.privacy, link: "#" },
    { label: t.footer.links.terms, link: "#" },
    { label: t.footer.links.support, link: "#" },
  ];

  return (
    <footer
      dir={dir}
      className="relative w-full overflow-hidden py-8 bg-gradient-to-b from-black via-gray-950 to-black border-t border-gray-800/50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full " />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-500/10 rounded-full " />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="relative w-32 h-16">
              <Image
                src="/Webvitas.png"
                alt="webvitas Logo"
                fill
                className="object-contain"
                loading="lazy"
                priority={false}
              />
            </div>

            <p className="text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, link }, idx) => (
                <a key={idx} href={link} className="group relative w-11 h-11">
                  <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 flex items-center justify-center hover:border-blue-500/60 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
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
              {t.footer.quickLinks.title}
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
              {t.footer.contactInfo.title}
            </h3>
            <div className="space-y-3">
              {contactInfo.map((item, idx) => (
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
              {t.footer.newsletter.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.newsletter.description}
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className={`w-full py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${
                  isArabic ? "pr-4 pl-24" : "pl-4 pr-24"
                }`}
              />
              <button
                className={`absolute rounded-xl top-1/2 -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white text-sm font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all ${
                  isArabic ? "left-2" : "right-2"
                }`}
              >
                {t.footer.newsletter.button}
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">{t.footer.copyright}</p>

          {/* Bottom Links */}
          <div className="flex items-center gap-6">
            {bottomLinks.map((item, idx) => (
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
