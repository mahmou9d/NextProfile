"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
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
    // {
    //   label: t.footer.contactInfo.website,
    //   value: "www.webvitas.com",
    //   link: "#",
    // },
  ];

  const socialLinks = [
    {
      Icon: FaFacebookF,
      link: "https://www.facebook.com/profile.php?id=61587885578661",
    },
    { Icon: FaInstagram, link: "https://www.instagram.com/webvitas0/" },
    {
      Icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/webvitas/",
    },
    // { Icon: FaGithub, link: "https://github.com/mahmou9d" },
  ];

  const bottomLinks = [
    { label: t.footer.links.privacy, link: "#" },
    { label: t.footer.links.terms, link: "#" },
    { label: t.footer.links.support, link: "#" },
  ];

  return (
    <>
      <style>{`
        @keyframes footer-orb-move-1 {
          0%, 100% { transform: translate(0, 0) scale(1); background-color: rgba(124, 58, 237, 0.05); }
          33% { transform: translate(60px, 40px) scale(1.1); background-color: rgba(219, 39, 119, 0.05); }
          66% { transform: translate(-40px, 80px) scale(0.9); background-color: rgba(91, 127, 255, 0.05); }
        }
        @keyframes footer-orb-move-2 {
          0%, 100% { transform: translate(0, 0) scale(1); background-color: rgba(219, 39, 119, 0.05); }
          50% { transform: translate(-80px, -40px) scale(1.2); background-color: rgba(124, 58, 237, 0.05); }
        }
      `}</style>
      <footer
        dir={dir}
        className="relative w-full overflow-hidden pt-24 pb-12 bg-[#080810] border-t border-gray-400/5"
      >
        {/* Background Decorative Orbs - Animated & Color Changing */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none"
          style={{ animation: "footer-orb-move-1 20s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] blur-[100px] rounded-full pointer-events-none"
          style={{ animation: "footer-orb-move-2 25s ease-in-out infinite" }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
            {/* Company Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="relative w-40 h-12">
                <Image
                  src="/Webvitas.png"
                  alt="webvitas Logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                  priority={false}
                />
              </div>

              <p className="text-gray-400 text-base -relaxed max-w-sm">
                {t.footer.description}
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, link }, idx) => (
                  <a key={idx} href={link} className="group relative w-12 h-12">
                    <div className="relative w-full h-full rounded-2xl bg-gray-400/[0.03] border border-gray-400/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#a78bfa]/10 group-hover:border-[#a78bfa]/50 group-hover:shadow-[0_0_20px_-5px_rgba(167,139,250,0.4)] group-hover:-translate-y-1">
                      <Icon
                        className="text-gray-400 group-hover:text-[#a78bfa] transition-colors"
                        size={20}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-8">
              <h3 className="font-syne text-lg font-bold text-white -wider uppercase">
                {t.footer.quickLinks.title}
              </h3>
              <div className="space-y-4">
                {quickLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-base font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#a78bfa] opacity-0 group-hover:opacity-100 transition-all group-hover:scale-150" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <h3 className="font-syne text-lg font-bold text-white -wider uppercase">
                {t.footer.contactInfo.title}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <a key={idx} href={item.link} className="block group">
                    <p className="text-white text-[14px] font-bold uppercase -widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-gray-400 group-hover:text-[#a78bfa] transition-colors text-base">
                      {item.value}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-4 space-y-8">
              <h3 className="font-syne text-lg font-bold text-white -wider uppercase">
                {t.footer.newsletter.title}
              </h3>
              <p className="text-gray-400 text-base -relaxed">
                {t.footer.newsletter.description}
              </p>

              <div className="relative group/input">
                <input
                  type="email"
                  placeholder={t.footer.newsletter.placeholder}
                  className={`w-full px-6 py-4 rounded-2xl bg-gray-400/[0.02] border border-gray-400/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#a78bfa]/50 focus:bg-gray-400/[0.05] focus:ring-4 focus:ring-[#a78bfa]/10 transition-all duration-300 ${
                    isArabic ? "pl-28" : "pr-28"
                  }`}
                />
                <button
                  className={`absolute top-2 bottom-2 px-6 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#db2777] text-white text-sm font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all active:scale-95 ${
                    isArabic ? "left-2" : "right-2"
                  }`}
                >
                  {t.footer.newsletter.button}
                </button>
              </div>
            </div>
          </div>

          {/* Creative Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400/10 to-transparent mb-12" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-white text-sm font-medium -wide">
              {t.footer.copyright}
            </p>

            {/* Bottom Links */}
            <div className="flex items-center gap-8">
              {bottomLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="text-white text-sm font-medium hover:text-[#a78bfa] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
