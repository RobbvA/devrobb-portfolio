const baseUrl = 'https://devrobb-portfolio.vercel.app';

export default function sitemap() {
  return ['/', '/projects', '/about', '/contact'].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : path === '/projects' ? 0.9 : 0.6,
  }));
}
