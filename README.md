# 🌐 Webvitas — Professional Web Solutions

> **Building Next-Level Platforms** — Modern Web & Mobile Solutions for businesses that want to grow.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![i18n](https://img.shields.io/badge/i18n-AR%20%7C%20EN-green?style=flat-square)](https://next-intl-docs.vercel.app/)

---

## 📌 نبذة عن المشروع | About

**Webvitas** هو موقع شركة احترافي يعرض خدمات تطوير الويب والمشاريع المنجزة. الموقع مصمم لجذب العملاء وعرض قدرات الفريق في بناء منصات رقمية متكاملة.

**Webvitas** is a professional company website that showcases web development services and completed client projects. Designed to attract new clients and demonstrate the team's capability in building full digital platforms.

### ما الذي يفعله الموقع؟ | What does the site do?

| القسم | الوصف |
|---|---|
| 🦸 **Hero** | صفحة رئيسية جذابة بتحريك Framer Motion |
| 🎯 **Grid (Services)** | عرض أنواع المواقع التي يبنيها الفريق (Landing Pages, E-Commerce, Blogs, Portfolios, Corporate) |
| 💼 **Projects** | معرض المشاريع المنجزة مع روابطها (Droppz, Roltco, Misk Stores) |
| 🤝 **Clients** | عرض التقنيات والأدوات التي يستخدمها الفريق |
| 🔄 **Approach** | شرح منهجية العمل خطوة بخطوة |
| 💬 **Testimonials** | آراء العملاء الحقيقيين |
| 📬 **Contact** | نموذج تواصل مدمج |

---

## 🛠️ التقنيات المستخدمة | Tech Stack

### Frontend
| التقنية | الإصدار | الاستخدام |
|---|---|---|
| **Next.js** | 16 | إطار العمل الأساسي — App Router, SSG |
| **React** | 18 | بناء واجهات المستخدم |
| **TypeScript** | 5 | الكتابة الآمنة للكود |
| **Tailwind CSS** | 3 | تصميم الواجهات |
| **Framer Motion** | 12 | الرسوم المتحركة والتفاعلات |

### Internationalization (i18n)
| التقنية | الاستخدام |
|---|---|
| **next-intl** | دعم اللغتين العربية والإنجليزية |
| **next-themes** | دعم الوضع الليلي والنهاري |
| **Cairo Font** | خط عربي (Google Fonts) |
| **Inter Font** | خط إنجليزي (Google Fonts) |

### Communication & Forms
| التقنية | الاستخدام |
|---|---|
| **@emailjs/browser** | إرسال رسائل التواصل بدون backend |
| **@formspree/react** | نماذج الاتصال |

### SEO & Performance
| التقنية | الاستخدام |
|---|---|
| **next-sitemap** | توليد Sitemap تلقائياً |
| **Open Graph** | بطاقات المشاركة على السوشيال ميديا |
| **JSON-LD Schema** | بيانات منظمة لمحركات البحث |
| **robots.ts** | إعداد ملف robots للزحف |

---

## 🌍 دعم اللغات | Multilingual Support

الموقع يدعم لغتين بشكل كامل:
- 🇬🇧 **English** — `/en`
- 🇸🇦 **Arabic (RTL)** — `/ar`

عند الدخول على `/` يتم التحويل تلقائياً إلى `/en` عبر middleware.

---

## 📁 هيكل المشروع | Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx      # Layout مع Metadata لكل لغة
│   │   └── page.tsx        # الصفحة الرئيسية
│   ├── globals.css         # الأنماط العامة
│   ├── layout.tsx          # Root layout
│   ├── robots.ts           # إعداد robots
│   └── sitemap.ts          # Sitemap ديناميكي
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # شريط التنقل مع دعم اللغة والثيم
│   │   └── Footer.tsx      # الفوتر
│   ├── sections/
│   │   ├── Hero.tsx        # القسم الرئيسي
│   │   ├── Grid.tsx        # قسم الخدمات
│   │   ├── Clients.tsx     # العملاء والمشاريع والشهادات
│   │   ├── Approach.tsx    # منهجية العمل
│   │   ├── ContactUs.tsx   # نموذج التواصل
│   │   └── Experience.tsx  # الخبرات (معطل حالياً)
│   └── ui/
│       ├── Card.tsx        # مكون البطاقة
│       └── Title.tsx       # مكون العنوان
├── data/
│   └── index.ts            # جميع البيانات (خدمات، مشاريع، شهادات)
├── hooks/                  # Custom React Hooks
├── locales/
│   ├── en.json             # الترجمات الإنجليزية
│   └── ar.json             # الترجمات العربية
└── middleware.ts            # إعادة التوجيه للغة الافتراضية
```

---

## 🚀 تشغيل المشروع | Getting Started

### المتطلبات | Prerequisites
- Node.js >= 18
- npm أو yarn أو pnpm

### التثبيت | Installation

```bash
# 1. استنساخ المشروع
git clone https://github.com/your-username/webvitas.git
cd webvitas

# 2. تثبيت الاعتماديات
npm install

# 3. إنشاء ملف البيئة
cp .env.example .env.local
```

### إعداد المتغيرات البيئية | Environment Variables

```env
# EmailJS - لنموذج التواصل
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Formspree
NEXT_PUBLIC_FORMSPREE_ID=your_form_id

# الموقع الرسمي للسيتماب
NEXT_PUBLIC_SITE_URL=https://webvitas.com
```

### تشغيل بيئة التطوير | Development

```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

### البناء للإنتاج | Production Build

```bash
npm run build
npm run start
```

---

## 📜 الأوامر المتاحة | Scripts

| الأمر | الوصف |
|---|---|
| `npm run dev` | تشغيل بيئة التطوير |
| `npm run build` | بناء نسخة الإنتاج + توليد Sitemap |
| `npm run start` | تشغيل نسخة الإنتاج |
| `npm run lint` | فحص جودة الكود |

---

## 🔗 روابط مفيدة | Useful Links

- 🌐 **الموقع الرسمي:** [webvitas.com](https://webvitas.com)
- 📘 [توثيق Next.js](https://nextjs.org/docs)
- 🌍 [توثيق next-intl](https://next-intl-docs.vercel.app/)
- 🎨 [توثيق Framer Motion](https://www.framer.com/motion/)

---

## 👥 الفريق | Team

صُنع بـ ❤️ من فريق **Webvitas** — مصر 🇪🇬

> *نبني منصات تزيد من ظهورك ومبيعاتك وثقة عملائك.*
> *We build platforms that increase your visibility, sales, and customer trust.*
