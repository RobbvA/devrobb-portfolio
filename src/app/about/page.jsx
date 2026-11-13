import Image from 'next/image';
import Link from 'next/link';
import styles from './about-v2.module.css';

export const metadata = {title:'About | dev.robb',description:'About Robbert van Asselt, junior full-stack developer with a practical, architecture-first approach.'};

export default function AboutPage(){return <section className={styles.page} aria-labelledby="about-title"><div className={styles.wrap}>
  <p className={styles.eyebrow}>ABOUT / BACKGROUND</p>
  <div className={styles.hero}><div><h1 id="about-title">Building software with purpose.</h1><p className={styles.lead}>I’m Robbert van Asselt, a junior full-stack developer with a practical approach to solving problems. I focus on clear data flows, understandable architecture and shipping working applications.</p><Link href="/projects" className={styles.link}>See my projects ↗</Link></div><Image src="/FotoIk.jpg" alt="Portrait of Robbert van Asselt" width={240} height={300} className={styles.photo}/></div>
  <div className={styles.grid}>
    <article><span>01 / BACKGROUND</span><h2>From operations to software</h2><p>I completed the Winc Academy full-stack development program in 2025. Alongside building software, I work in production leadership — experience that has strengthened my planning, ownership and problem-solving skills.</p></article>
    <article><span>02 / TECHNICAL SKILLS</span><h2>Tools I build with</h2><p><strong>Frontend:</strong> React, Next.js, JavaScript, TypeScript, Chakra UI, Tailwind CSS.</p><p><strong>Backend & data:</strong> Node.js, Express, REST APIs, Prisma, PostgreSQL and SQLite.</p><p><strong>Workflow:</strong> Git, GitHub, API testing and debugging.</p></article>
    <article><span>03 / APPROACH</span><h2>Architecture, then implementation</h2><p>I start by identifying the problem, the data flow and the boundaries of the system. I use AI tools to speed up implementation and exploration, while checking the result against the intended behavior.</p></article>
  </div>
  <div className={styles.cta}><p>Looking for a junior developer who combines hands-on delivery with structured thinking?</p><Link href="/contact">Get in touch ↗</Link></div>
</div></section>}
