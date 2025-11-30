// data.ts
export const navItems = [
    { name: { EN: "About", AR: "من نحن" }, link: "#about" },
    { name: { EN: "Projects", AR: "مشاريعنا" }, link: "#projects" },
    { name: { EN: "Testimonials", AR: "آراء العملاء" }, link: "#testimonials" },
    { name: { EN: "Contact", AR: "اتصل بنا" }, link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: { EN: "Create Stunning Landing Pages", AR: "اصنع صفحات هبوط مذهلة" },
        description: { EN: "High-converting pages to boost your business.", AR: "صفحات عالية التحويل لتعزيز أعمالك." },
        className: "lg:col-span-3 md:col-span-6 md:row-span-2 text-white p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
        img: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/98ecb4507f2ca027a972216016de2a67543fca79",
    },
    {
        id: 2,
        title: { EN: "Launch Your E-Commerce Store", AR: "أطلق متجرك الإلكتروني" },
        description: { EN: "Custom online stores with seamless shopping experience.", AR: "متاجر إلكترونية مخصصة مع تجربة تسوق سلسة." },
        className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-white p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
        img: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/resized/1200x720/c4a6bd7cfc75f912cc5de90aa079b83fbd1cfb93.png",
    },
    {
        id: 3,
        title: { EN: "Engaging Blogs & Content Sites", AR: "مواقع مدونات ومحتوى جذابة" },
        description: { EN: "Engage your audience with dynamic content platforms.", AR: "تفاعل مع جمهورك عبر منصات محتوى ديناميكية." },
        className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-white p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
        img: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/resized/1200x720/ae6525e6a73013ab0ef5cd3017b862d1ab5967a3.png",
    },
    {
        id: 4,
        title: { EN: "Your Work with Portfolios", AR: "اعرض أعمالك عبر البورتفوليو" },
        description: { EN: "Showcase your work with a sleek modern design.", AR: "اعرض أعمالك بتصميم عصري وأنيق." },
        className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-white p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
        img: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/resized/1200x720/0d16195c821f5d4ff5e9f8341c80c5d651a323fe.png",
    },
    {
        id: 5,
        title: { EN: "Professional Corporate Websites", AR: "مواقع شركات احترافية" },
        description: { EN: "Professional websites for companies and startups.", AR: "مواقع احترافية للشركات والمشاريع الناشئة." },
        className: "md:col-span-3 md:row-span-2 text-white p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
        img: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/resized/1200x720/1faa9ddf887b25c337896ca5bccc8c700389146f.png",
    },
    {
        id: 7,
        title: { EN: "Interactive Platforms", AR: "منصات تفاعلية" },
        description: { EN: "Interactive learning sites for schools and online courses.", AR: "مواقع تعليمية تفاعلية للمدارس والدورات الإلكترونية." },
        className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-white p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
        img: "https://profile-ipz4.vercel.app/images/Screenshot%202025-11-06%20110958.png",
    },
];
export const projects = [
    {
        id: 4,
        title: { EN: "XtraMarket", AR: "XtraMarket" },
        description: {
            EN: "E-commerce app with real backend built with Next.js, Redux Toolkit featuring product browsing, search, cart, wishlist, and secure checkout.",
            AR: "تطبيق تجارة إلكترونية مع باك إند حقيقي مبني بـ Next.js و Redux Toolkit، يتضمن تصفح المنتجات، البحث، السلة، قائمة الرغبات والدفع الآمن.",
        },
        img: "/Screenshot 2025-11-28 001333.png",
        // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://vegecommerce-ct1s.vercel.app/",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
    }, {
        id: 1,
        title: { EN: "Prime Ecom", AR: "برايم إي كوم" },
        description: {
            EN: "E-commerce app built with React, Redux Toolkit & TypeScript — featuring product browsing, search, auth, cart, wishlist, and discounts.",
            AR: "تطبيق تجارة إلكترونية مبني بـ React و Redux Toolkit و TypeScript — يتضمن تصفح المنتجات، البحث، المصادقة، السلة، قائمة الرغبات والخصومات.",
        },
        img: "/Screenshot 2025-08-30 215858.png",
        // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://guileless-tiramisu-18d615.netlify.app/",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
    },
    {
        id: 6,
        title: { EN: "SmartWatch", AR: "SmartWatch" },
        description: {
            EN: "E-commerce landing page built with Next.js, TypeScript, Tailwind & Shadcn — responsive, dynamic UI with cart using Stripe integration.",
            AR: "صفحة هبوط للتجارة الإلكترونية تم إنشاؤها باستخدام Next.js وTypeScript وTailwind وShadcn — واجهة مستخدم سريعة الاستجابة وديناميكية مع عربة تسوق باستخدام تكامل Stripe.",
        },
        img: "/Screenshot 2025-11-30 111521.png",
        // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://poetic-truffle-8702f4.netlify.app/",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
    }, 
    {
        id: 5,
        title: { EN: "M&MSTORE", AR: "M&MSTORE" },
        description: {
            EN: "E-commerce landing page built with React & SCSS — responsive, dynamic UI with cart and localStorage.",
            AR: "صفحة هبوط لمتجر إلكتروني مبنية بـ React & SCSS — واجهة ديناميكية واستجابة مع السلة وlocalStorage.",
        },
        img: "/Screenshot 2025-11-28 001559.png",
        // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://benevolent-beignet-116c19.netlify.app/",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
    }, {
        id: 2,
        title: { EN: "Social media", AR: "وسائل التواصل الاجتماعي" },
        description: {
            EN: "Enhance your brand presence with modern social media solutions. Create impactful content, grow your audience, and stay connected effortlessly.",
            AR: "عزّز حضور علامتك التجارية عبر وسائل التواصل الاجتماعي. اصنع محتوى مؤثرًا، ونمِّ جمهورك، وابقَ على تواصل بسهولة.",
        },
        img: "/WhatsApp Image 2025-11-30 at 11.02.28_21d94493.jpg",
        // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://projects-production-f790.up.railway.app/",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
    },
    {
        id: 3,
        title: { EN: "CarePlus Clinic", AR: "عيادة CarePlus" },
        description: {
            EN: "Clinic management app built with React, TypeScript & Redux Toolkit — for booking appointments and managing patient profiles.",
            AR: "تطبيق إدارة عيادة مبني بـ React و TypeScript و Redux Toolkit — لحجز المواعيد وإدارة ملفات المرضى.",
        },
        img: "Screenshot 2025-11-28 001140.png",
        // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://patient-pi.vercel.app/",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
    },
];
// export const projects = [
//     {
//         id: 1,
//         title: { EN: "Prime Ecom", AR: "برايم إي كوم" },
//         des: {
//             EN: "E-commerce app built with React, Redux Toolkit & TypeScript — featuring product browsing, search, auth, cart, wishlist, and discounts.",
//             AR: "تطبيق تجارة إلكترونية مبني بـ React و Redux Toolkit و TypeScript — يتضمن تصفح المنتجات، البحث، المصادقة، السلة، قائمة الرغبات والخصومات.",
//         },
//         img: "/Screenshot 2025-08-30 215858.png",
//         iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
//         link: "https://guileless-tiramisu-18d615.netlify.app/",
//     },
//     {
//         id: 2,
//         title: { EN: "Yoom - Video Conferencing App", AR: "Yoom - تطبيق مؤتمرات فيديو" },
//         des: {
//             EN: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
//             AR: "بسّط تجربة مؤتمرات الفيديو الخاصة بك مع Yoom. تواصل بسلاسة مع الزملاء والأصدقاء.",
//         },
//         img: "/Screenshot 2025-11-28 000923.png",
//         iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
//         link: "https://meeting-clone.vercel.app/",
//     },
//     {
//         id: 3,
//         title: { EN: "CarePlus Clinic", AR: "عيادة CarePlus" },
//         des: {
//             EN: "Clinic management app built with React, TypeScript & Redux Toolkit — for booking appointments and managing patient profiles.",
//             AR: "تطبيق إدارة عيادة مبني بـ React و TypeScript و Redux Toolkit — لحجز المواعيد وإدارة ملفات المرضى.",
//         },
//         img: "Screenshot 2025-11-28 001140.png",
//         iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
//         link: "https://patient-pi.vercel.app/",
//     },
//     {
//         id: 4,
//         title: { EN: "XtraMarket", AR: "XtraMarket" },
//         des: {
//             EN: "E-commerce app with real backend built with Next.js, Redux Toolkit featuring product browsing, search, cart, wishlist, and secure checkout.",
//             AR: "تطبيق تجارة إلكترونية مع باك إند حقيقي مبني بـ Next.js و Redux Toolkit، يتضمن تصفح المنتجات، البحث، السلة، قائمة الرغبات والدفع الآمن.",
//         },
//         img: "/Screenshot 2025-11-28 001333.png",
//         iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
//         link: "https://vegecommerce-ct1s.vercel.app/",
//     },
//     {
//         id: 5,
//         title: { EN: "M&MSTORE", AR: "M&MSTORE" },
//         des: {
//             EN: "E-commerce landing page built with React & SCSS — responsive, dynamic UI with cart and localStorage.",
//             AR: "صفحة هبوط لمتجر إلكتروني مبنية بـ React & SCSS — واجهة ديناميكية واستجابة مع السلة وlocalStorage.",
//         },
//         img: "/Screenshot 2025-11-28 001559.png",
//         iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
//         link: "https://benevolent-beignet-116c19.netlify.app/",
//     },
//     {
//         id: 6,
//         title: { EN: "Dashboard", AR: "لوحة تحكم" },
//         des: {
//             EN: "Modern React dashboard with responsive layout, charts (Nivo/Recharts), key stats, revenue graph, and transactions panel.",
//             AR: "لوحة تحكم حديثة بـ React مع تخطيط متجاوب، رسوم بيانية (Nivo/Recharts)، إحصائيات أساسية، رسم بياني للإيرادات ولوحة المعاملات.",
//         },
//         img: "/Screenshot 2025-11-28 001832.png",
//         iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
//         link: "https://statuesque-conkies-a26f3f.netlify.app/",
//     },
// ];

export const testimonials = [
    {
        quote: {
            EN: "Working with this team completely transformed our online presence. Their attention to detail and ability to turn ideas into real, functional designs is unmatched. The project was delivered on time and exceeded every expectation.",
            AR: "العمل مع هذا الفريق غيّر تمامًا تواجدنا على الإنترنت. انتباههم للتفاصيل وقدرتهم على تحويل الأفكار إلى تصاميم عملية لا يضاهى. تم تسليم المشروع في الوقت المحدد وتجاوز كل التوقعات.",
        },
        name: "Omar Khaled",
        title: { EN: "Founder of NexaVision", AR: "مؤسس NexaVision" },
        img: "https://i.pravatar.cc/150?img=64",
    },
    {
        quote: {
            EN: "The level of professionalism and communication throughout the project was outstanding. They understood exactly what our brand needed and delivered a sleek, fast, and modern website that boosted our conversions instantly.",
            AR: "مستوى الاحترافية والتواصل طوال المشروع كان رائعًا. فهموا تمامًا ما يحتاجه علامتنا التجارية وقدموا موقعًا عصريًا وسريعًا يزيد التحويلات على الفور.",
        },
        name: "Sara Ibrahim",
        title: { EN: "Marketing Manager, BrightWave Agency", AR: "مديرة التسويق، BrightWave Agency" },
        img: "https://i.pravatar.cc/150?img=47",
    },
    {
        quote: {
            EN: "From the first meeting to final delivery, the experience was flawless. They provided creative solutions, clean code, and a performance-focused website that our customers love. Highly recommended.",
            AR: "من الاجتماع الأول حتى التسليم النهائي، كانت التجربة مثالية. قدموا حلولًا إبداعية، كود نظيف، وموقع أداءه ممتاز يعشقه عملاؤنا. موصى به بشدة.",
        },
        name: "Ahmed El-Sayed",
        title: { EN: "CEO of Orion Labs", AR: "الرئيس التنفيذي لشركة Orion Labs" },
        img: "https://i.pravatar.cc/150?img=33",
    },
    {
        quote: {
            EN: "Their UI/UX skills are exceptional. They transformed our outdated website into a modern, responsive platform that looks great on every device. The impact on user engagement was noticeable from day one.",
            AR: "مهاراتهم في UI/UX استثنائية. حولوا موقعنا القديم إلى منصة حديثة ومتجاوبة تبدو رائعة على كل الأجهزة. كان تأثيرها على تفاعل المستخدم واضحًا منذ اليوم الأول.",
        },
        name: "Lina Hassan",
        title: { EN: "Product Lead, Nova Digital", AR: "رئيسة المنتجات، Nova Digital" },
        img: "https://i.pravatar.cc/150?img=12",
    },
    {
        quote: {
            EN: "Fast, reliable, and extremely talented. They took our business goals seriously and built a website that truly reflects our brand identity. Support after launch was also top-tier. Great partner to work with.",
            AR: "سريعون، موثوقون، وموهوبون جدًا. أخذوا أهداف أعمالنا على محمل الجد وبنوا موقعًا يعكس هوية علامتنا التجارية. الدعم بعد الإطلاق كان أيضًا على أعلى مستوى. شريك رائع للعمل معه.",
        },
        name: "Youssef Ayman",
        title: { EN: "Operations Director, SkyBridge Solutions", AR: "مدير العمليات، SkyBridge Solutions" },
        img: "https://i.pravatar.cc/150?img=28",
    },
];

export const companies = [
    { id: 1, name: "cloudinary", imgdark: "/cloud copy.svg", nameImg: "/cloud.svg" },
    { id: 2, name: "nextjs", imgdark: "/nextjs-icon-svgrepo-com copy.svg", nameImg: "/nextjs-icon-svgrepo-com.svg" },
    { id: 3, name: "react", nameImg: "/react-svgrepo-com.svg" },
    { id: 4, name: "stream", imgdark: "/streamName copy.svg", nameImg: "/streamName.svg" },
    { id: 5, name: "python", nameImg: "/python-svgrepo-com.svg" },
    { id: 6, name: "django", nameImg: "/django-svgrepo-com.svg" },
    { id: 7, name: "motion", nameImg: "/fm.svg" },
    { id: 8, name: "host", nameImg: "/host.svg" },
];

export const workExperience = [
    {
        id: 1,
        title: { EN: "Frontend Developer", AR: "مطور واجهات" },
        desc: { EN: "Built responsive and high-converting websites using React.js and Tailwind CSS, focusing on UI/UX and interactive components.", AR: "بناء مواقع متجاوبة وعالية التحويل باستخدام React.js و Tailwind CSS مع التركيز على UI/UX والمكونات التفاعلية." },
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: { EN: "Backend Developer", AR: "مطور باك إند" },
        desc: { EN: "Developed server-side logic, APIs, and database integration to ensure fast, secure, and scalable web applications.", AR: "تطوير منطق الخادم، APIs، ودمج قواعد البيانات لضمان تطبيقات ويب سريعة وآمنة وقابلة للتوسع." },
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: { EN: "Full-Stack Web Developer", AR: "مطور ويب كامل" },
        desc: { EN: "Delivered end-to-end web solutions, combining frontend and backend skills to build complete, functional websites for clients.", AR: "تقديم حلول ويب متكاملة، تجمع بين مهارات الواجهة الأمامية والخلفية لبناء مواقع كاملة للعملاء." },
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: { EN: "Web Performance & Deployment", AR: "أداء ونشر المواقع" },
        desc: { EN: "Optimized website speed, SEO, and deployed web projects on cloud platforms, ensuring seamless performance and scalability.", AR: "تحسين سرعة الموقع، SEO، ونشر المشاريع على منصات سحابية لضمان أداء سلس وقابلية التوسع." },
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

// export const socialMedia = [
//     { id: 1, img: "/git.svg" },
//     { id: 2, img: "/twit.svg" },
//     { id: 3, img: "/link.svg" },
// ];
