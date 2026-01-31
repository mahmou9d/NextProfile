/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.webvitas.com", // الدومين الأساسي بدون /en أو /ar
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ["/admin/*", "/secret"],
  transform: async (config, url) => {
    // هنا ممكن تضيف hreflang لكل صفحة
    if (url.startsWith("/en")) {
      return {
        loc: url,
        changefreq: "weekly",
        priority: 0.8,
        alternateRefs: [
          { href: url.replace("/en", "/ar"), hreflang: "ar" },
          { href: url, hreflang: "en" },
        ],
      };
    }
    if (url.startsWith("/ar")) {
      return {
        loc: url,
        changefreq: "weekly",
        priority: 0.8,
        alternateRefs: [
          { href: url.replace("/ar", "/en"), hreflang: "en" },
          { href: url, hreflang: "ar" },
        ],
      };
    }
    return { loc: url, changefreq: "weekly", priority: 0.8 };
  },
};
