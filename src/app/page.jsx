import Image from 'next/image';
import Link from 'next/link';
import styles from './home-v2.module.css';

export default function HomePage() {
  return (
    <section className={styles.page} aria-labelledby="home-title">
      <div className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>JUNIOR FULL-STACK DEVELOPER · DEV.ROBB</p>
          <h1 id="home-title">Robbert <span>van Asselt.</span></h1>
          <p className={styles.intro}>I build practical web applications with React, Next.js and TypeScript — from clear data flows to working products.</p>
          <p className={styles.support}>Architecture-minded, hands-on and focused on understandable, reliable software.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/projects">Explore projects ↗</Link>
            <a className={styles.secondary} href="https://github.com/RobbvA" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>
          </div>
          <p className={styles.stack}>React · Next.js · TypeScript · Node.js · Prisma · PostgreSQL · REST APIs</p>
        </div>
        <div className={styles.visual}>
          <Image src="/drawme.png" alt="Illustration of Robbert van Asselt" width={520} height={520} priority className={styles.portrait}/>
          <Link className={styles.feature} href="/projects"><span>FEATURED PROJECT</span><strong>DataPreflight</strong><small>ERP data validation · View project ↗</small></Link>
        </div>
      </div>
    </section>
  );
}
