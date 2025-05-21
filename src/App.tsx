import React from 'react';
import styles from './App.module.css';
import { profile } from './data/profile';
import { skills } from './data/skills';
import { experience } from './data/experience';
import { projects } from './data/projects';
import { languages } from './data/languages';
import { hobbies } from './data/hobbies';

function App() {
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <img
          src={profile.photo}
          alt={profile.name}
          className={styles.profilePhoto}
        />
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p>{profile.location}</p>
        <div style={{ margin: '0.5rem 0' }}>
          <a href={`mailto:${profile.email}`}>{profile.email}</a> |{' '}
          <a href={`tel:${profile.phone}`}>{profile.phone}</a> |{' '}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p style={{ maxWidth: 600, margin: '1rem auto 0 auto' }}>{profile.summary}</p>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>Skills</div>
        <div>
          {skills.map((skill) => (
            <span key={skill.name} className={styles.chip}>{skill.name}</span>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>Experience & Education</div>
        {experience.map((item) => (
          <div className={styles.card} key={item.title + item.dateRange}>
            <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{item.title} <span style={{ color: '#3a6cf6' }}>@ {item.name}</span></div>
            <div style={{ fontSize: '0.95rem', margin: '0.2rem 0 0.5rem 0', color: '#aaa' }}>{item.dateRange}</div>
            {item.techStack && <div style={{ fontSize: '0.95rem', marginBottom: 4 }}><b>Tech:</b> {item.techStack}</div>}
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {item.summaryPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>Projects</div>
        {projects.map((project) => (
          <div className={styles.card} key={project.title}>
            <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{project.title}</div>
            <div style={{ fontSize: '0.95rem', margin: '0.2rem 0 0.5rem 0', color: '#aaa' }}>{project.techUsed}</div>
            <p style={{ margin: 0 }}>{project.description}</p>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>Languages</div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {languages.map((lang) => (
            <li key={lang.name}>{lang.name} ({lang.level})</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>Hobbies</div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App; 