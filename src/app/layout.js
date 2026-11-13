import './globals.css';
import Providers from './providers';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({subsets:['latin'],display:'swap'});
export const metadata = {
  metadataBase: new URL('https://devrobb-portfolio.vercel.app'),
  title: {default:'Robbert van Asselt | Junior Full-Stack Developer',template:'%s | dev.robb'},
  description:'Portfolio of Robbert van Asselt, junior full-stack developer. Explore DataPreflight, an explainable task manager and CalmHub.',
  openGraph:{title:'Robbert van Asselt | Junior Full-Stack Developer',description:'Practical full-stack projects built with Next.js, React and TypeScript.',url:'https://devrobb-portfolio.vercel.app',siteName:'dev.robb',type:'website'},
  robots:{index:true,follow:true},
};
export default function RootLayout({children}){
  return <html lang="en" className={inter.className}><body><Providers><Nav/><div className="site-content"><main id="main-content">{children}</main><Footer/></div></Providers></body></html>
}
