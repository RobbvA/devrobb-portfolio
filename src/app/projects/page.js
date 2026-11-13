'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projects } from '../data/projects';
import styles from './projects.module.css';

export default function ProjectsPage() {
  const [selected, setSelected] = useState(projects[0].id);
  const [imageIndex, setImageIndex] = useState(0);
  const project = projects.find((item) => item.id === selected) ?? projects[0];
  const image = project.images[imageIndex];

  function selectProject(id) {
    setSelected(id);
    setImageIndex(0);
  }

  return (
    <section className={styles.page} aria-labelledby="projects-title">
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>DEV.ROBB / SELECTED WORK</p>
        <div className={styles.headingRow}>
          <div>
            <h1 id="projects-title">The project deck<span className={styles.period}>.</span></h1>
            <p className={styles.lead}>Three working applications. Select a card to explore the engineering behind it.</p>
          </div>
          <span className={styles.count}>01 — 03</span>
        </div>
        <div className={styles.deck} aria-label="Choose a project">
          {projects.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`${styles.card} ${selected === item.id ? styles.selected : ''}`}
              style={{ '--accent': item.accent }}
              onClick={() => selectProject(item.id)}
              aria-pressed={selected === item.id}
              aria-controls="project-details"
            >
              <span className={styles.cardTop}><span>{item.number}</span><span aria-hidden="true">◇</span></span>
              <span className={styles.cardCenter}>
                <span className={styles.cardMonogram} aria-hidden="true">{item.monogram}</span>
                <span className={styles.cardTitle}>{item.name}</span>
                <span className={styles.cardCategory}>{item.category}</span>
              </span>
              <span className={styles.cardBottom}><span>{selected === item.id ? 'SELECTED' : 'EXPLORE PROJECT'}</span><span aria-hidden="true">↗</span></span>
            </button>
          ))}
        </div>
        <article id="project-details" className={styles.details} style={{ '--accent': project.accent }} aria-label={`${project.name} details`}>
          <div className={styles.detailsHeader}>
            <div><p className={styles.eyebrow}>{project.number} / {project.category}</p><h2>{project.name}</h2><p className={styles.subtitle}>{project.subtitle}</p></div>
            <div className={styles.actions}>
              <a className={styles.primary} href={project.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>
              <a className={styles.secondary} href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.detailGrid}>
            <div>
              <h3>Problem & approach</h3><p>{project.problem}</p>
              <h3>Engineering highlights</h3>
              <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <h3>Data flow</h3><p className={styles.flow}>{project.architecture}</p>
              <div className={styles.tags}>{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            <div className={styles.preview}>
              {image ? (
                <>
                  <div className={styles.imageBox}><Image src={image.src} alt={`${project.name}: ${image.caption}`} fill sizes="(max-width: 900px) 100vw, 540px" style={{objectFit:'contain'}} /></div>
                  <div className={styles.galleryControls}>
                    <button type="button" onClick={() => setImageIndex((imageIndex - 1 + project.images.length) % project.images.length)} aria-label="Previous screenshot">←</button>
                    <span>{image.caption} · {imageIndex + 1}/{project.images.length}</span>
                    <button type="button" onClick={() => setImageIndex((imageIndex + 1) % project.images.length)} aria-label="Next screenshot">→</button>
                  </div>
                </>
              ) : (
                <div className={styles.emptyPreview}>
                  <span className={styles.previewSymbol} aria-hidden="true">{project.monogram}</span>
                  <span>Explore the live application for the interface and validation workflow.</span>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Open DataPreflight ↗</a>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
