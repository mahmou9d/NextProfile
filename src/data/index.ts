
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
        id: 1,
        title: { EN: "XtraMarket", AR: "إكسترا ماركت" },
        description: {
            EN: "Full-stack e-commerce platform built with React.js and RTK Query, featuring complete product management, shopping cart, wishlist, secure checkout flow, and admin dashboard powered by a real backend API.",
            AR: "منصة تجارة إلكترونية متكاملة مبنية بـ React.js و RTK Query، تتضمن إدارة المنتجات، سلة التسوق، قائمة الرغبات، عملية دفع آمنة، ولوحة تحكم إدارية مدعومة بـ API حقيقي.",
        },
        img: "/Screenshot 2025-11-28 001333.png",
        link: "https://vegecommerce-ct1s.vercel.app/",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
    },
    {
        id: 2,
        title: { EN: "CarePlus Clinic", AR: "عيادة كير بلس" },
        description: {
            EN: "Comprehensive clinic management system developed with Next.js, TypeScript, and Redux Toolkit, enabling seamless appointment scheduling, patient profile management, and efficient healthcare workflow automation.",
            AR: "نظام إدارة عيادات شامل مطور بـ Next.js و TypeScript و Redux Toolkit، يتيح جدولة المواعيد بسهولة، إدارة ملفات المرضى، وأتمتة سير العمل الطبي بكفاءة.",
        },
        img: "/Screenshot 2025-11-06 110958.png",
        link: "https://patient-pi.vercel.app/",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
    },
    {
        id: 3,
        title: { EN: "Prime Ecommerce", AR: "برايم للتجارة الإلكترونية" },
        description: {
            EN: "Advanced e-commerce solution built with React, Redux Toolkit, and TypeScript, offering intelligent product search, user authentication, dynamic cart management, personalized wishlist, and promotional discount system.",
            AR: "حل تجارة إلكترونية متقدم مبني بـ React و Redux Toolkit و TypeScript، يوفر بحث ذكي عن المنتجات، مصادقة المستخدمين، إدارة ديناميكية للسلة، قائمة رغبات مخصصة، ونظام خصومات ترويجية.",
        },
        img: "/Screenshot 2026-01-03 231730.png",
        link: "https://prime-ecommerce-rho.vercel.app/",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
    },
    {
        id: 4,
        title: { EN: "SmartWatch Store", AR: "متجر سمارت ووتش" },
        description: {
            EN: "Modern e-commerce landing page crafted with Next.js, TypeScript, Tailwind CSS, and Shadcn UI components, featuring a responsive design, dynamic shopping experience, and integrated Stripe payment processing.",
            AR: "صفحة هبوط عصرية للتجارة الإلكترونية مصممة بـ Next.js و TypeScript و Tailwind CSS ومكونات Shadcn UI، تتميز بتصميم متجاوب، تجربة تسوق ديناميكية، ومعالجة دفع متكاملة عبر Stripe.",
        },
        img: "/Screenshot 2025-11-30 111521.png",
        link: "https://poetic-truffle-8702f4.netlify.app/",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
    },
    {
        id: 5,
        title: { EN: "M&M Store", AR: "متجر إم آند إم" },
        description: {
            EN: "Elegant e-commerce landing page developed with React and SCSS, delivering a fully responsive interface, interactive shopping cart functionality, and persistent data storage using localStorage technology.",
            AR: "صفحة هبوط أنيقة للتجارة الإلكترونية مطورة بـ React و SCSS، توفر واجهة متجاوبة بالكامل، وظيفة سلة تسوق تفاعلية، وتخزين دائم للبيانات باستخدام تقنية localStorage.",
        },
        img: "/Screenshot 2025-11-28 001559.png",
        link: "https://benevolent-beignet-116c19.netlify.app/",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
    },
    {
        id: 6,
        title: { EN: "Social media", AR: "وسائل التواصل الاجتماعي" },
        description: {
            EN: "Enhance your brand presence with modern social media solutions. Create impactful content, grow your audience, and stay connected effortlessly.",
            AR: "عزّز حضور علامتك التجارية عبر وسائل التواصل الاجتماعي. اصنع محتوى مؤثرًا، ونمِّ جمهورك، وابقَ على تواصل بسهولة.",
        },
        img: "/WhatsApp Image 2025-11-30 at 11.02.28_21d94493.jpg",
        // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://djangolearn-production.up.railway.app/",
        imgClassName: "w-full h-full object-cover rounded-3xl",
        titleClassName: "text-3xl font-extrabold mb-2",
    },
];
export const testimonials = [
    {
        quote: {
            EN: "We were stuck with a slow, outdated website that was hurting our brand. They rebuilt everything from scratch in just 5 weeks. Page load time went from 7 seconds to under 2 seconds. Our customers immediately noticed the difference and sales went up by 35% in the first month alone.",
            AR: "كنا عالقين بموقع بطيء وقديم كان بيضر العلامة التجارية بتاعتنا. أعادوا بناء كل حاجة من الصفر في 5 أسابيع بس. وقت التحميل نزل من 7 ثواني لأقل من ثانيتين. العملاء لاحظوا الفرق على طول والمبيعات زادت 35% في أول شهر.",
        },
        name: "Karim Mansour",
        title: { EN: "VP of Sales, TechFlow MENA", AR: "نائب مدير المبيعات، TechFlow الشرق الأوسط" },
        img: "https://i.pravatar.cc/150?img=13",
    },
    {
        quote: {
            EN: "Our previous developer disappeared halfway through the project leaving us with broken code. They stepped in, fixed all the issues in 10 days, and completed the entire platform in 3 weeks. The site now handles 10,000 daily visitors without any problems. Best decision we made this year.",
            AR: "المطور السابق اختفى نص المشروع وساب لنا كود مكسور. تدخلوا، صلحوا كل المشاكل في 10 أيام، وكملوا المنصة كلها في 3 أسابيع. الموقع دلوقتي بيتحمل 10,000 زائر يومياً من غير أي مشاكل. أحسن قرار اتخذناه السنة دي.",
        },
        name: "Nour Abdallah",
        title: { EN: "Founder, Daleel App", AR: "مؤسسة تطبيق دليل" },
        img: "https://i.pravatar.cc/150?img=45",
    },
    {
        quote: {
            EN: "After working with 3 other agencies that promised big and delivered little, I was hesitant. But these guys were different - clear communication, realistic timelines, and they actually delivered what they showed in the mockups. Our admin dashboard is now so intuitive that we didn't need any training sessions.",
            AR: "بعد ما اشتغلنا مع 3 شركات تانية وعدوا كتير وسلموا قليل، كنت متردد. بس الشباب دول كانوا مختلفين - تواصل واضح، مواعيد واقعية، وفعلاً سلموا اللي وروهولنا في التصاميم. لوحة التحكم بقت سهلة جداً لدرجة إننا ما احتجناش أي تدريب.",
        },
        name: "Tarek Fouad",
        title: { EN: "CTO, CloudNest Systems", AR: "المدير التقني، CloudNest Systems" },
        img: "https://i.pravatar.cc/150?img=52",
    },
    {
        quote: {
            EN: "We needed our booking system to work with our old database and everyone told us it was impossible. They found a solution, built the entire integration, and tested it with real customers before launch. Three months later and we haven't received a single complaint. The system handles 500 bookings per day smoothly.",
            AR: "احتجنا نظام الحجز يشتغل مع قاعدة البيانات القديمة والكل قال مستحيل. لقوا حل، بنوا التكامل كله، وجربوه مع عملاء حقيقيين قبل الإطلاق. بعد 3 شهور وما وصلتناش ولا شكوى واحدة. النظام بيتعامل مع 500 حجز يومياً بسلاسة.",
        },
        name: "Mona Samir",
        title: { EN: "Operations Manager, Horizon Logistics", AR: "مديرة العمليات، Horizon Logistics" },
        img: "https://i.pravatar.cc/150?img=26",
    },
    {
        quote: {
            EN: "Our budget was limited so they suggested we launch a basic version first and add features later. Smart approach. We went live in 4 weeks, gathered user feedback, then improved based on real data. Now we have 8,000 active users and the platform runs perfectly. They understood our business constraints and worked with them.",
            AR: "الميزانية كانت محدودة فاقترحوا نطلق نسخة بسيطة الأول ونضيف مميزات بعدين. طريقة ذكية. أطلقنا في 4 أسابيع، جمعنا ملاحظات المستخدمين، وبعدين طورنا بناءً على بيانات حقيقية. دلوقتي عندنا 8,000 مستخدم نشط والمنصة شغالة تمام. فهموا قيود الشغل بتاعنا واشتغلوا معاها.",
        },
        name: "Hossam Zaki",
        title: { EN: "Co-founder, Suq Online", AR: "شريك مؤسس، سوق أونلاين" },
        img: "https://i.pravatar.cc/150?img=68",
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
    { id: 9, name: "nodejs", nameImg: "/nodejs.svg" },
     { id: 10, name: "host", nameImg: "/express.svg" },

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
