"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import HeaderMobile from "./HeaderMobile";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/components/Usetranslation";
import { NavItem } from "../../types/type";

const Header = ({ navItems }: { navItems: NavItem[] }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { t, isArabic, dir } = useTranslation();
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const handleToggleLocale = () => {
    const newLocale = isArabic ? "en" : "ar";
    const currentPath = pathname.replace(/^\/(ar|en)/, "") || "/";
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .wv-header {
          --accent: #5b7fff;
          --accent2: #ff5c7c;
          --bg: #07080f;
          --border: rgba(255,255,255,0.07);
          --text-dim: rgba(255,255,255,0.38);
          --text-mid: rgba(255,255,255,0.65);
          --text-bright: rgba(255,255,255,0.95);
          font-family: 'DM Sans', sans-serif;
        }

        /* ─── ticker ─── */
        .wv-ticker {
          background: linear-gradient(90deg, #0d0f1c, #0a0c17, #0d0f1c);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          height: 32px;
          display: flex;
          align-items: center;
        }
        .wv-ticker-track {
          display: flex;
          gap: 0;
          animation: tickerMove 28s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }
        @keyframes tickerMove {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .wv-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0 32px;
          font-size: 11px;
          font-family: 'Syne', sans-serif;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-dim);
        }
        .wv-ticker-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        .wv-ticker-dot.pink { background: var(--accent2); }
        .wv-ticker-dot.green { background: #22d98a; }

        /* ─── main bar ─── */
        .wv-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
          padding: 0 28px;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .wv-bar::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--accent) 30%,
            var(--accent2) 60%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.4s;
        }
        .wv-header:hover .wv-bar::after { opacity: 0.5; }

        /* ─── logo ─── */
        .wv-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .wv-logo-mark {
          position: relative;
          width: 38px; height: 38px;
          flex-shrink: 0;
        }
        .wv-logo-mark svg {
          width: 38px; height: 38px;
        }
        .wv-logo-img {
          position: absolute;
          inset: 6px;
          border-radius: 4px;
          object-fit: contain;
        }
        .wv-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .wv-logo-name {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--text-bright);
          letter-spacing: -0.02em;
        }
        .wv-logo-sub {
          font-size: 10.5px;
          font-weight: 400;
          color: var(--text-dim);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ─── nav ─── */
        .wv-nav {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
        }
        .wv-nav-link {
          position: relative;
          padding: 7px 16px;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-mid);
          text-decoration: none;
          border-radius: 8px;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 5px;
          overflow: hidden;
        }
        .wv-nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(91,127,255,0.08);
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .wv-nav-link:hover { color: var(--text-bright); }
        .wv-nav-link:hover::before { opacity: 1; }

        .wv-nav-link-active {
          color: var(--text-bright);
          background: rgba(91,127,255,0.1);
        }

        .wv-new-pill {
          font-family: 'Syne', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(91,127,255,0.18);
          color: #7fa3ff;
          border: 1px solid rgba(91,127,255,0.25);
        }

        /* ─── right controls ─── */
        .wv-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* language */
        .wv-lang-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: var(--text-mid);
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .wv-lang-btn:hover {
          border-color: rgba(255,255,255,0.18);
          color: var(--text-bright);
          background: rgba(255,255,255,0.03);
        }
        .wv-lang-globe {
          width: 15px; height: 15px;
          opacity: 0.55;
        }

        /* CTA */
        .wv-cta {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          background: var(--accent);
          border: none;
          border-radius: 9px;
          cursor: pointer;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.01em;
          transition: transform 0.15s, box-shadow 0.15s;
          overflow: hidden;
          text-decoration: none;
        }
        .wv-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .wv-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(91,127,255,0.35);
        }
        .wv-cta:active { transform: translateY(0); }
        .wv-cta-arrow {
          font-size: 15px;
          transition: transform 0.2s;
        }
        .wv-cta:hover .wv-cta-arrow { transform: translateX(3px); }

        /* mobile burger */
        .wv-burger {
          display: none;
          width: 42px; height: 42px;
          align-items: center; justify-content: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: 9px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .wv-burger:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.14);
        }

        /* ─── responsive ─── */
        @media (max-width: 767px) {
          .wv-nav { display: none; }
          .wv-lang-btn { display: none; }
          .wv-cta-text { display: none; }
          .wv-burger { display: flex; }
          .wv-cta { padding: 9px 14px; }
        }
        @media (max-width: 480px) {
          .wv-bar { padding: 0 16px; }
        }
      `}</style>

      <header
        dir={dir}
        className="wv-header fixed top-0 z-[1000] w-full"
        style={{ background: "var(--bg)" }}
      >
        {/* ── Ticker strip ── */}
        <div className="wv-ticker">
          <div className="wv-ticker-track">
            {/* duplicated for seamless loop */}
            {[...Array(2)].map((_, di) => (
              <span key={di} style={{ display: "contents" }}>
                <span className="wv-ticker-item">
                  <span className="wv-ticker-dot green" />
                  200+ Projects Delivered
                </span>
                <span className="wv-ticker-item">
                  <span className="wv-ticker-dot" />
                  98% Client Satisfaction
                </span>
                <span className="wv-ticker-item">
                  <span className="wv-ticker-dot pink" />
                  Lightning-fast Delivery
                </span>
                <span className="wv-ticker-item">
                  <span className="wv-ticker-dot" />
                  MENA & Europe Clients
                </span>
                <span className="wv-ticker-item">
                  <span className="wv-ticker-dot green" />● Live Support
                </span>
                <span className="wv-ticker-item">
                  <span className="wv-ticker-dot pink" />
                  Next.js · React · Tailwind
                </span>
                <span className="wv-ticker-item">
                  <span className="wv-ticker-dot" />
                  SEO-optimised Builds
                </span>
                <span className="wv-ticker-item">
                  <span className="wv-ticker-dot green" />
                  99/100 PageSpeed
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Main bar ── */}
        <div className="wv-bar">
          {/* Logo */}
          <Link href={`/${isArabic ? "ar" : "en"}`} className="wv-logo">
            <div className="wv-logo-mark">
              <svg
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="38" height="38" rx="9" fill="url(#wv-grad)" />
                <defs>
                  <linearGradient
                    id="wv-grad"
                    x1="0"
                    y1="0"
                    x2="38"
                    y2="38"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#5b7fff" />
                    <stop offset="100%" stopColor="#ff5c7c" />
                  </linearGradient>
                </defs>
              </svg>
              <Image
                src="/Webvitas.png"
                alt="webvitas"
                width={26}
                height={26}
                className="wv-logo-img"
              />
            </div>
            <div className="wv-logo-text">
              <span className="wv-logo-name">Webvitas</span>
              <span className="wv-logo-sub">{t.header.webSolutions}</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation">
            <ul className="wv-nav">
              {navItems.map((item, idx) => {
                const href = item.link.startsWith("/")
                  ? `/${isArabic ? "ar" : "en"}${item.link}`
                  : item.link;
                const isActive = pathname === href;
                return (
                  <li key={idx}>
                    <Link
                      href={href}
                      className={`wv-nav-link ${isActive ? "wv-nav-link-active" : ""}`}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      {isArabic ? item.name.AR : item.name.EN}
                      {idx === 1 && <span className="wv-new-pill">New</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right controls */}
          <div className="wv-controls">
            {/* Language toggle */}
            <button
              className="wv-lang-btn"
              onClick={handleToggleLocale}
              aria-label="Switch language"
            >
              <svg
                className="wv-lang-globe"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M8 1C8 1 5.5 4 5.5 8C5.5 12 8 15 8 15"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M8 1C8 1 10.5 4 10.5 8C10.5 12 8 15 8 15"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M1.5 6h13M1.5 10h13"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              {isArabic ? "English" : "العربية"}
            </button>

            {/* CTA */}
            <Link
              href={`/${isArabic ? "ar" : "en"}/contact`}
              className="wv-cta"
            >
              <span className="wv-cta-text">
                {t.header.premium ?? "Start a Project"}
              </span>
              <span className="wv-cta-arrow">→</span>
            </Link>

            {/* Mobile burger */}
            <button
              className="wv-burger"
              onClick={toggleMobile}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <FaXmark size={18} color="rgba(255,255,255,0.7)" />
              ) : (
                <FaBars size={18} color="rgba(255,255,255,0.7)" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <HeaderMobile
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          navItems={navItems}
          locale={isArabic ? "AR" : "EN"}
          toggleLocale={handleToggleLocale}
        />
      </header>
    </>
  );
};

export default Header;
