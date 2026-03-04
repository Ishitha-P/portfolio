import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { profile } from './data/profile';
import { skills } from './data/skills';
import { experience } from './data/experience';
import { projects } from './data/projects';
import { languages } from './data/languages';
import { hobbies } from './data/hobbies';
import { FiSun, FiMoon, FiMail, FiPhone, FiLinkedin, FiDownload, FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  };

  const experienceItems = experience.filter(item => item.type === 'work');
  const educationItems = experience.filter(item => item.type === 'education');

  return (
    <div className={styles.appContainer}>

      {/* ── Navbar ── */}
      <nav className={styles.navbar}>
        <div className={styles.navLogo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Ishitha<span className={styles.navLogoAccent}>.</span>
        </div>
        <div className={styles.navRight}>
          <ul className={styles.navLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
          </ul>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className={styles.header} id="about">
        <div className={styles.heroText}>
          <div className={styles.heroGreeting}>Hello, I'm</div>
          <h1 className={styles.heroTitle}>
            {profile.name.split(' ')[0]}{' '}
            <span className={styles.heroTitleAccent}>{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <h2 className={styles.heroSubtitle}>{profile.title}</h2>

          <div className={styles.contactChips}>
            <a href={`mailto:${profile.email}`} className={styles.chip}><FiMail /> Email</a>
            <a href={`tel:${profile.phone}`} className={styles.chip}><FiPhone /> {profile.phone}</a>
            <a href={profile.linkedin} className={styles.chip} target="_blank" rel="noopener noreferrer"><FiLinkedin /> LinkedIn</a>
            <span className={styles.chip}><FiMapPin /> {profile.location}</span>
          </div>

          <p className={styles.profileSummary}>{profile.summary}</p>

          <div className={styles.heroActions}>
            <a href="/projects/Resume.pdf" download="Ishitha_Padmaraju_Resume.pdf" className={styles.button}>
              <FiDownload /> Download Resume
            </a>
            <a href={profile.linkedin} className={styles.buttonOutline} target="_blank" rel="noopener noreferrer">
              <FiExternalLink /> Let's Connect
            </a>
          </div>
        </div>

        <div className={styles.photoContainer}>
          <div className={styles.photoRing}>
            <img
              src={process.env.PUBLIC_URL + '/' + profile.photo}
              alt={profile.name}
              className={styles.profilePhoto}
            />
          </div>
          <div className={styles.photoDecor} />
        </div>
      </header>

      {/* ── Experience ── */}
      <section className={styles.section} id="experience">
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.sectionDivider} />
        {experienceItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardCompany}>{item.name}</div>
              </div>
              <div className={styles.cardDate}><FiCalendar style={{ marginRight: 4 }} /> {item.dateRange}</div>
            </div>
            {item.techStack && (
              <div className={styles.techStack}>
                <strong>Stack:&nbsp;</strong> {item.techStack}
              </div>
            )}
            <ul>
              {item.summaryPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* ── Education ── */}
      <section className={styles.section} id="education">
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.sectionDivider} />
        {educationItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardCompany}>{item.name}</div>
              </div>
              <div className={styles.cardDate}><FiCalendar style={{ marginRight: 4 }} /> {item.dateRange}</div>
            </div>
            <ul>
              {item.summaryPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* ── Projects ── */}
      <section className={styles.section} id="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.sectionDivider} />
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {project.image && (
                <div className={styles.projectImageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                </div>
              )}
              <div className={styles.projectContent}>
                <div className={styles.projectTitle}>{project.title}</div>
                <div className={styles.projectDesc}>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {project.description.split('. ').filter(Boolean).map((sentence, i, arr) => {
                      const text = sentence.endsWith('.') || i === arr.length - 1 ? sentence : sentence + '.';
                      return <li key={i}>{text}</li>;
                    })}
                  </ul>
                </div>
                <div className={styles.projectTags}>
                  {project.techUsed && project.techUsed.split(',').map((tech, techIndex) => (
                    <span key={techIndex} className={styles.projectTag}>{tech.trim()}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section className={styles.section} id="skills">
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.sectionDivider} />
        {Object.entries(skills.reduce((acc: Record<string, typeof skills>, skill) => {
          if (!acc[skill.category]) acc[skill.category] = [];
          acc[skill.category].push(skill);
          return acc;
        }, {} as Record<string, typeof skills>)).map(([category, skillsInCategory]) => (
          <div key={category}>
            <div className={styles.skillCategoryTitle}>{category}</div>
            <div className={styles.skillTilesRow}>
              {(skillsInCategory as typeof skills).map((skill, index) => {
                const iconMap: Record<string, string> = {
                  python: '🐍', c: '⚙️', typescript: '🟦', html: '🌐', css: '🎨',
                  database: '🗄️', terminal: '💻', git: '🔧', pytorch: '🔥', tensorflow: '📐',
                  'scikit-learn': '📈', opencv: '👁️', langchain: '🔗', llamaindex: '🦙',
                  huggingface: '🤗', nlp: '🗣️', ros: '🤖', docker: '🐳', gitlab: '🦊',
                  airflow: '🌬️', onnx: '🔷', tensorrt: '⚡', fastapi: '🚀', milvus: '🧲',
                  aws: '☁️', jenkins: '🏗️', linux: '🐧', pandas: '🐼',
                  rag: '🔍', faiss: '🔎', streamlit: '📊',
                  ionic: '📱', vue: '🟩', flask: '🧪',
                };
                return (
                  <div key={index} className={styles.skillTile}>
                    <div className={styles.skillIcon}>{iconMap[skill.icon.toLowerCase()] || '🔹'}</div>
                    <div className={styles.skillName}>{skill.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* ── Languages & Hobbies side by side ── */}
      <div className={styles.extrasRow}>
        <section className={styles.section} style={{ margin: 0, padding: '2.5rem' }} id="languages">
          <h2 className={styles.sectionTitle} style={{ fontSize: '1.8rem' }}>Languages</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.tileGrid}>
            {languages.map((lang) => {
              const icons: Record<string, string> = { English: '🇬🇧', German: '🇩🇪', Hindi: '🇮🇳', Telugu: '🇮🇳' };
              return (
                <div key={lang.name} className={styles.tile}>
                  <div className={styles.tileIcon}>{icons[lang.name] || '🌐'}</div>
                  <div className={styles.tileName}>{lang.name}</div>
                  <div className={styles.tileLevel}>{lang.level}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.section} style={{ margin: 0, padding: '2.5rem' }} id="hobbies">
          <h2 className={styles.sectionTitle} style={{ fontSize: '1.8rem' }}>Hobbies</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.tileGrid}>
            {hobbies.map((hobby) => {
              const icons: Record<string, string> = {
                'Yoga and meditation': '🧘', 'Tracking emerging AI trends': '🤖',
                'Digital art creation': '🎨', 'Recreating diverse cuisines': '🍳',
              };
              return (
                <div key={hobby} className={styles.tile}>
                  <div className={styles.tileIcon}>{icons[hobby] || '⭐'}</div>
                  <div className={styles.tileName} style={{ fontSize: '0.92rem' }}>{hobby}</div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.contactRow}>
          <a href={`mailto:${profile.email}`} className={styles.chip}><FiMail /> {profile.email}</a>
          <a href={profile.linkedin} className={styles.chip} target="_blank" rel="noopener noreferrer"><FiLinkedin /> LinkedIn</a>
          <a href="/projects/Resume.pdf" download="Ishitha_Padmaraju_Resume.pdf" className={styles.chip}><FiDownload /> Resume</a>
        </div>
        <p>© {new Date().getFullYear()} {profile.name}. Crafted with care.</p>
      </footer>

    </div>
  );
}

export default App;
