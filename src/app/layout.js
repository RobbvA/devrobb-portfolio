import './globals.css';
import './visual-polish.css';
import './heading-fix.css';
import './quality-pass.css';
import './compact-project-cards.css';
import Providers from './providers';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const baseUrl = 'https://devrobb-portfolio.vercel.app';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Robbert van Asselt | Junior Full-Stack Developer',
    template: '%s | dev.robb',
  },
  description: 'Robbert van Asselt is a junior full-stack developer building practical web applications with Next.js, React and TypeScript. Explore DataPreflight, Task Manager and CalmHub.',
  openGraph: {
    title: 'Robbert van Asselt | Junior Full-Stack Developer',
    description: 'Explore three real software projects: DataPreflight, Task Manager and CalmHub.',
    url: baseUrl,
    siteName: 'dev.robb',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Robbert van Asselt | Junior Full-Stack Developer',
    description: 'Practical web applications built with React, Next.js and TypeScript.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <Nav />
          <div className="site-content">
            <main id="main-content">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
