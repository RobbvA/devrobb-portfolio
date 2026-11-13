export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://devrobb-portfolio.vercel.app/sitemap.xml',
  };
}
