"use client";
import { useEffect, useRef } from "react";
import { useTranslation } from "./Usetranslation";

const HeroROI = () => {
  const { isArabic, dir } = useTranslation();
  const localePrefix = isArabic ? "/ar" : "/en";

  const revenueRef = useRef<HTMLInputElement>(null);
  const visitorsRef = useRef<HTMLInputElement>(null);
  const convRef = useRef<HTMLInputElement>(null);
  const aovRef = useRef<HTMLInputElement>(null);

  const fmt = (n: number) =>
    new Intl.NumberFormat("ar-EG").format(Math.round(n));

  const calc = () => {
    const visitors = parseFloat(visitorsRef.current?.value || "0") || 0;
    const conv = parseFloat(convRef.current?.value || "1.5") || 1.5;
    const aov = parseFloat(aovRef.current?.value || "500") || 500;

    const convDisplay = document.getElementById("conv-display");
    const aovDisplay = document.getElementById("aov-display");
    if (convDisplay) convDisplay.textContent = conv.toFixed(1) + "%";
    if (aovDisplay) aovDisplay.textContent = fmt(aov) + " EGP";

    const newConv = Math.min(conv * 2.4, 6.5);
    const cur = visitors * (conv / 100) * aov;
    const next = visitors * (newConv / 100) * aov * 1.35;
    const yearly = (next - cur) * 12;

    const set = (id: string, val: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    set("current-monthly", fmt(cur) + " EGP");
    set("new-monthly", fmt(next) + " EGP");
    set("yearly-gain", fmt(yearly) + " EGP");
    set("bar-cur-num", fmt(cur) + " EGP");
    set("bar-new-num", fmt(next) + " EGP");

    const mx = Math.max(cur, next, 1);
    const barCur = document.getElementById("bar-cur") as HTMLElement | null;
    const barNew = document.getElementById("bar-new") as HTMLElement | null;
    if (barCur) barCur.style.width = Math.round((cur / mx) * 88) + "%";
    if (barNew)
      barNew.style.width = Math.min(Math.round((next / mx) * 88), 90) + "%";
  };

  useEffect(() => {
    calc();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Cairo:wght@400;600;700;900&display=swap');

        @keyframes fadeUp { from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:none;} }
        @keyframes pulse2 { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.7;transform:scale(1.04);} }
        @keyframes orb { 0%,100%{transform:translate(-50%,-50%) scale(1);}50%{transform:translate(-50%,-52%) scale(1.08);} }

        .roi-page { min-height:100svh; background:#080810; position:relative; overflow:hidden; padding:120px 40px 80px; }
        .roi-orb1 { position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(124,58,237,0.14) 0%,transparent 70%);top:10%;left:5%;transform:translate(-50%,-50%);filter:blur(70px);animation:orb 9s ease-in-out infinite;pointer-events:none; }
        .roi-orb2 { position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(219,39,119,0.11) 0%,transparent 70%);top:65%;right:-5%;transform:translate(50%,-50%);filter:blur(80px);animation:orb 12s ease-in-out 1.5s infinite;pointer-events:none; }
        .roi-orb3 { position:absolute;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,0.08) 0%,transparent 70%);top:40%;left:55%;transform:translate(-50%,-50%);filter:blur(60px);animation:orb 7s ease-in-out 3s infinite;pointer-events:none; }

        .roi-inner { position:relative;z-index:2;max-width:900px;margin:0 auto; }

        .roi-badge { display:inline-flex;align-items:center;gap:10px;padding:6px 16px;border-radius:99px;background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.28);margin-bottom:28px;animation:fadeUp 0.5s 0.1s both; }
        .roi-badge-dot { width:7px;height:7px;border-radius:50%;background:#a78bfa;box-shadow:0 0 8px rgba(167,139,250,0.8);animation:pulse2 2s infinite; }
        .roi-badge-txt { font-size:11px;font-weight:700;letter-spacing:0.12em;color:rgba(167,139,250,0.95);text-transform:uppercase; }

        .roi-h1 { font-family:'Syne',sans-serif;font-size:clamp(32px,5vw,58px);font-weight:800;line-height:1.05;letter-spacing:-0.025em;color:#fff;margin-bottom:8px;animation:fadeUp 0.6s 0.18s both; }
        .roi-h1-grad { background:linear-gradient(90deg,#a78bfa 0%,#f472b6 55%,#fb923c 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
        .roi-sub { font-size:15px;font-weight:400;line-height:1.7;color:rgba(255,255,255,0.38);margin-bottom:40px;animation:fadeUp 0.6s 0.26s both;max-width:580px; }

        .roi-grid { display:grid;grid-template-columns:1fr 1fr;gap:24px;animation:fadeUp 0.7s 0.35s both; }

        .roi-inputs { background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:28px 24px; }
        .roi-inputs-title { font-size:12px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:24px; }

        .roi-field { margin-bottom:20px; }
        .roi-field label { display:block;font-size:13px;font-weight:600;color:rgba(255,255,255,0.5);margin-bottom:10px; }
        .roi-field-row { display:flex;align-items:center; }
        .roi-currency { display:flex;align-items:center;justify-content:center;width:48px;height:48px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-left:none;border-radius:0 10px 10px 0;font-size:11px;font-weight:700;color:rgba(255,255,255,0.35);flex-shrink:0; }
        .roi-field input[type=number] { width:100%;height:48px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-right:none;border-radius:10px 0 0 10px;color:#fff;font-size:18px;font-weight:700;font-family:'Cairo',sans-serif;padding:0 16px;outline:none;transition:border-color 0.2s,background 0.2s;-moz-appearance:textfield; }
        .roi-field input::-webkit-outer-spin-button,.roi-field input::-webkit-inner-spin-button{-webkit-appearance:none;}
        .roi-field input:focus { border-color:rgba(167,139,250,0.5);background:rgba(124,58,237,0.05); }

        .roi-range { margin-bottom:20px; }
        .roi-range-lbl { display:flex;justify-content:space-between;align-items:center;margin-bottom:10px; }
        .roi-range-name { font-size:13px;font-weight:600;color:rgba(255,255,255,0.5); }
        .roi-range-val { font-size:14px;font-weight:800;background:linear-gradient(90deg,#a78bfa,#f472b6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
        input[type=range] { -webkit-appearance:none;width:100%;height:4px;background:rgba(255,255,255,0.1);border-radius:99px;outline:none;cursor:pointer; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#db2777);box-shadow:0 0 10px rgba(124,58,237,0.6);cursor:pointer; }

        .roi-results { display:flex;flex-direction:column;gap:16px; }

        .roi-card { background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:20px;position:relative;overflow:hidden; }
        .roi-card-main { background:rgba(124,58,237,0.07);border-color:rgba(124,58,237,0.22);flex:1; }
        .roi-card-main::before { content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(167,139,250,0.6),rgba(244,114,182,0.4),transparent); }
        .roi-card-lbl { font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.28);margin-bottom:8px; }
        .roi-card-val { font-family:'Syne',sans-serif;font-size:42px;font-weight:800;letter-spacing:-0.03em;background:linear-gradient(90deg,#a78bfa,#f472b6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;margin-bottom:4px; }
        .roi-card-sub { font-size:11px;color:rgba(255,255,255,0.28); }

        .roi-mini { display:grid;grid-template-columns:1fr 1fr;gap:12px; }
        .roi-mini-card { background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:16px; }
        .roi-mini-lbl { font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:6px; }
        .roi-mini-val { font-family:'Syne',sans-serif;font-size:18px;font-weight:800;letter-spacing:-0.02em;color:rgba(255,255,255,0.7); }
        .roi-mini-val-accent { font-family:'Syne',sans-serif;font-size:18px;font-weight:800;letter-spacing:-0.02em;background:linear-gradient(90deg,#a78bfa,#f472b6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }

        .roi-bars { background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:16px; }
        .roi-bars-title { font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.28);margin-bottom:14px; }
        .roi-bar-row { margin-bottom:10px; }
        .roi-bar-info { display:flex;justify-content:space-between;align-items:center;margin-bottom:6px; }
        .roi-bar-name { font-size:12px;font-weight:600;color:rgba(255,255,255,0.45); }
        .roi-bar-num { font-size:12px;font-weight:800;color:rgba(255,255,255,0.8); }
        .roi-bar-track { height:8px;background:rgba(255,255,255,0.07);border-radius:99px;overflow:hidden; }
        .roi-bar-fill-cur { height:100%;border-radius:99px;background:rgba(255,255,255,0.18);transition:width 0.8s cubic-bezier(0.34,1.2,0.64,1); }
        .roi-bar-fill-new { height:100%;border-radius:99px;background:linear-gradient(90deg,#7c3aed,#db2777,#fb923c);transition:width 0.8s cubic-bezier(0.34,1.2,0.64,1); }

        .roi-ctas { display:flex;align-items:center;gap:12px;margin-top:24px;flex-wrap:wrap;animation:fadeUp 0.6s 0.5s both; }
        .roi-btn-main { display:inline-flex;align-items:center;gap:10px;padding:15px 28px;border-radius:12px;background:linear-gradient(135deg,#7c3aed,#db2777);color:#fff;font-size:14px;font-weight:700;font-family:'Cairo',sans-serif;cursor:pointer;border:none;box-shadow:0 4px 24px rgba(124,58,237,0.4);transition:transform 0.2s,box-shadow 0.2s;position:relative;overflow:hidden;white-space:nowrap;text-decoration:none; }
        .roi-btn-main::after { content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);transform:translateX(-100%);transition:transform 0.5s; }
        .roi-btn-main:hover::after { transform:translateX(100%); }
        .roi-btn-main:hover { transform:translateY(-2px);box-shadow:0 8px 36px rgba(124,58,237,0.55),0 0 14px rgba(219,39,119,0.3); }
        .roi-btn-sec { display:inline-flex;align-items:center;gap:8px;padding:14px 22px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);background:transparent;color:rgba(255,255,255,0.5);font-size:14px;font-weight:600;font-family:'Cairo',sans-serif;cursor:pointer;transition:all 0.2s;white-space:nowrap;text-decoration:none; }
        .roi-btn-sec:hover { border-color:rgba(167,139,250,0.35);color:#fff;background:rgba(124,58,237,0.08); }

        .roi-trust { display:flex;align-items:center;gap:20px;margin-top:18px;flex-wrap:wrap;animation:fadeUp 0.6s 0.6s both; }
        .roi-trust-item { display:flex;align-items:center;gap:7px; }
        .roi-trust-icon { width:16px;height:16px;border-radius:50%;background:rgba(124,58,237,0.15);border:1px solid rgba(124,58,237,0.35);display:flex;align-items:center;justify-content:center;font-size:9px;color:#a78bfa; }
        .roi-trust-txt { font-size:11px;color:rgba(255,255,255,0.28);font-weight:500; }

        @media(max-width:768px){
          .roi-grid { grid-template-columns:1fr; }
          .roi-page { padding:100px 20px 60px; }
        }
      `}</style>

      <section className="roi-page" dir={dir}>
        <div className="roi-orb1" />
        <div className="roi-orb2" />
        <div className="roi-orb3" />

        <div className="roi-inner">
          <div className="roi-badge">
            <div className="roi-badge-dot" />
            <span className="roi-badge-txt">
              {isArabic ? "احسب أرباحك قبل ما تقرر" : "Calculate your profits before you decide"}
            </span>
          </div>

          <h1 className="roi-h1">
            {isArabic ? "متجرك الجديد" : "Your New Store"}<br />
            <span className="roi-h1-grad">
              {isArabic ? "هيكسبك أد إيه؟" : "How Much Will It Earn?"}
            </span>
          </h1>
          <p className="roi-sub">
            {isArabic
              ? "حط أرقام بيزنسك دلوقتي وهنوريلك بالضبط الفرق اللي هيحصل لو عملت متجر احترافي"
              : "Enter your business numbers and see exactly what changes when you launch a professional store"}
          </p>

          <div className="roi-grid">
            {/* ── INPUTS ── */}
            <div className="roi-inputs">
              <div className="roi-inputs-title">
                {isArabic ? "أرقام بيزنسك الحالية" : "Your Current Numbers"}
              </div>

              <div className="roi-field">
                <label>{isArabic ? "المبيعات الشهرية الحالية" : "Current Monthly Revenue"}</label>
                <div className="roi-field-row">
                  <input ref={revenueRef} type="number" defaultValue={30000} min={1000} max={10000000} onChange={calc} />
                  <div className="roi-currency">EGP</div>
                </div>
              </div>

              <div className="roi-field">
                <label>{isArabic ? "عدد الزوار الشهريين" : "Monthly Visitors"}</label>
                <div className="roi-field-row">
                  <input ref={visitorsRef} type="number" defaultValue={2000} min={100} max={1000000} onChange={calc} />
                  <div className="roi-currency" style={{ fontSize: 10 }}>
                    {isArabic ? "زائر" : "visitor"}
                  </div>
                </div>
              </div>

              <div className="roi-range">
                <div className="roi-range-lbl">
                  <span className="roi-range-name">{isArabic ? "معدل التحويل الحالي" : "Current Conversion Rate"}</span>
                  <span className="roi-range-val" id="conv-display">1.5%</span>
                </div>
                <input ref={convRef} type="range" min={0.5} max={5} step={0.1} defaultValue={1.5} onChange={calc} />
              </div>

              <div className="roi-range">
                <div className="roi-range-lbl">
                  <span className="roi-range-name">{isArabic ? "متوسط قيمة الأوردر" : "Average Order Value"}</span>
                  <span className="roi-range-val" id="aov-display">500 EGP</span>
                </div>
                <input ref={aovRef} type="range" min={100} max={5000} step={50} defaultValue={500} onChange={calc} />
              </div>
            </div>

            {/* ── RESULTS ── */}
            <div className="roi-results">
              <div className="roi-card roi-card-main">
                <div className="roi-card-lbl">
                  {isArabic ? "الزيادة السنوية المتوقعة" : "Expected Yearly Increase"}
                </div>
                <div className="roi-card-val" id="yearly-gain">—</div>
                <div className="roi-card-sub" id="yearly-sub">
                  {isArabic ? "بعد المتجر الاحترافي" : "after your professional store"}
                </div>
              </div>

              <div className="roi-mini">
                <div className="roi-mini-card">
                  <div className="roi-mini-lbl">{isArabic ? "دلوقتي شهرياً" : "Current / Month"}</div>
                  <div className="roi-mini-val" id="current-monthly">—</div>
                </div>
                <div className="roi-mini-card">
                  <div className="roi-mini-lbl">{isArabic ? "بعد المتجر" : "After Store"}</div>
                  <div className="roi-mini-val-accent" id="new-monthly">—</div>
                </div>
              </div>

              <div className="roi-bars">
                <div className="roi-bars-title">{isArabic ? "مقارنة سريعة" : "Quick Compare"}</div>
                <div className="roi-bar-row">
                  <div className="roi-bar-info">
                    <span className="roi-bar-name">{isArabic ? "مبيعاتك دلوقتي" : "Current Sales"}</span>
                    <span className="roi-bar-num" id="bar-cur-num">—</span>
                  </div>
                  <div className="roi-bar-track">
                    <div className="roi-bar-fill-cur" id="bar-cur" style={{ width: "30%" }} />
                  </div>
                </div>
                <div className="roi-bar-row">
                  <div className="roi-bar-info">
                    <span className="roi-bar-name">{isArabic ? "بعد المتجر الاحترافي" : "After Pro Store"}</span>
                    <span className="roi-bar-num" id="bar-new-num">—</span>
                  </div>
                  <div className="roi-bar-track">
                    <div className="roi-bar-fill-new" id="bar-new" style={{ width: "75%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CTAs ── */}
          <div className="roi-ctas">
            <a href={`${localePrefix}/contact`} className="roi-btn-main">
              {isArabic ? "ابني متجري دلوقتي" : "Build My Store Now"}
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={isArabic ? "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" : "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"} />
              </svg>
            </a>
            <a href={`${localePrefix}#contact`} className="roi-btn-sec">
              {isArabic ? "استشارة مجانية" : "Free Consultation"}
            </a>
          </div>

          <div className="roi-trust">
            {[
              isArabic ? "+50 متجر ناجح" : "50+ Successful Stores",
              isArabic ? "نتيجة في 30 يوم" : "Results in 30 Days",
              isArabic ? "دعم 24/7" : "24/7 Support",
            ].map((txt, i) => (
              <div key={i} className="roi-trust-item">
                <div className="roi-trust-icon">✓</div>
                <span className="roi-trust-txt">{txt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroROI;