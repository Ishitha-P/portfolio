import React from 'react';
import styles from './App.module.css';
import { profile } from './data/profile';
import { skills } from './data/skills';
import { experience } from './data/experience';
import { projects } from './data/projects';
import { languages } from './data/languages';
import { hobbies } from './data/hobbies';

function App() {
  const experienceItems = experience.filter(item => item.type === 'work');
  const educationItems = experience.filter(item => item.type === 'education');

  return (
    <div className={styles.appContainer}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>Ishitha Padmaraju</div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#languages">Languages</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* Header/Profile Section */}
      <header className={styles.header} id="about">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ textAlign: 'left', flex: 1, maxWidth: 1000 }}>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0 0.5rem 0', flexWrap: 'wrap' }}>
              <a href={`mailto:${profile.email}`} className={styles.chip}>{profile.email}</a>
              <a href={`tel:${profile.phone}`} className={styles.chip}>{profile.phone}</a>
              <a href={profile.linkedin} className={styles.chip} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <p className={styles.profileSummary}>{profile.summary}</p>
          </div>
          <img
            src={'/Photo.png'}
            alt={profile.name}
            className={styles.profilePhoto}
          />
        </div>
      </header>

      <section className={`${styles.section} ${styles.experienceSection}`} id="experience">
        <h2 className={styles.sectionTitle}>Experience</h2>
        {experienceItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.title} <span style={{ color: '#3a86ff' }}>@ {item.name}</span></h3>
            <div style={{ fontSize: '1.05rem', margin: '0. 0 0.2rem 0', color: '#aaa' }}>{item.dateRange}</div>
            {item.techStack && <div style={{ fontSize: '1.05rem', margin: '1.0rem 0 1.0rem 0' }}><b>Tech:</b> {item.techStack}</div>}
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {item.summaryPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={`${styles.section} ${styles.projectsSection}`} id="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {project.image && (
                <img src={project.image} alt={project.title} className={styles.projectImage} />
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
                    <span key={techIndex} className={styles.chip}>
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.educationSection}`} id="education">
        <h2 className={styles.sectionTitle}>Education</h2>
        {educationItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.title} <span style={{ color: '#bfa14a' }}>@ {item.name}</span></h3>
            <div style={{ fontSize: '0.95rem', margin: '0.2rem 0 0.5rem 0', color: '#aaa' }}>{item.dateRange}</div>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {item.summaryPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={`${styles.section} ${styles.skillsSection}`} id="skills">
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div>
          {Object.entries(skills.reduce((acc: Record<string, typeof skills>, skill) => {
            if (!acc[skill.category]) acc[skill.category] = [];
            acc[skill.category].push(skill);
            return acc;
          }, {} as Record<string, typeof skills>)).map(([category, skillsInCategory], idx) => (
            <div key={category} style={{ marginBottom: '1.0rem' }}>
              <div style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: 12 }}>
                {category}
              </div>
              <div className={styles.skillTilesRow}>
                {(skillsInCategory as typeof skills).map((skill, index) => {
                  const iconMap: Record<string, string> = {
                    python: '🐍',
                    c: '🔣',
                    typescript: '🟦',
                    html: '🟧',
                    css: '🎨',
                    database: '🗄️',
                    terminal: '💻',
                    git: '🔧',
                    pytorch: '🔥',
                    tensorflow: '🟧',
                    openai: '🧠',
                    'scikit-learn': '📈',
                    opencv: '👁️',
                    langchain: '⛓️',
                    huggingface: '🤗',
                    nlp: '🗣️',
                    ros: '🤖',
                    docker: '🐳',
                    gitlab: '🦊',
                    slurm: '📅',
                    onnx: '🔷',
                    tensorrt: '⚡',
                    powerbi: '📊',
                    fastapi: '🚀',
                    cmake: '🛠️',
                    'aws-lambda': 'λ',
                    aws: '☁️',
                    jenkins: '🧑‍🔧',
                    'cloud': '☁️',
                    linux: '🐧',
                    bash: '💻',
                    cursor: '🖱️',
                    vscode: '📝',
                    pandas: '🐼',
                    timeseries: '⏱️',
                    rag: '🔍',
                    faiss: '🔎',
                    gpt: '🤖',
                    streamlit: '🌐',
                    ionic: '🌙',
                    vue: '🟩',
                    'proof of concept development': '💡',
                    flask: '🧪',
                    presentation: '🎤',
                    team: '👥',
                    data: '💾',
                    agile: '🏃',
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
        </div>
      </section>

      <section className={styles.section} id="languages">
        <h2 className={styles.sectionTitle}>Languages</h2>
        <div className={styles.tileGrid} style={{ marginBottom: '1.0rem' }}>
          {languages.map((lang, idx) => {
            const langIconMap: Record<string, string> = {
              English: '🇬🇧',
              German: '🇩🇪',
              Hindi: '🇮🇳',
              Telugu: '🇮🇳',
            };
            return (
              <div key={lang.name} className={styles.languageTile}>
                <div className={styles.tileIcon}>{langIconMap[lang.name] || '🌐'}</div>
                <div className={styles.tileName}>{lang.name}</div>
                <div style={{ fontSize: '0.92rem', color: '#bbb', textAlign: 'center', marginTop: 2 }}>{lang.level}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.section} id="hobbies">
        <h2 className={styles.sectionTitle}>Hobbies</h2>
        <div className={styles.tileGrid} style={{ marginBottom: '1.0rem' }}>
          {hobbies.map((hobby, idx) => {
            const hobbyIconMap: Record<string, string> = {
              'Yoga and meditation': '🧘',
              'Tracking emerging AI trends': '🤖',
              'Digital art creation': '🎨',
              'Recreating diverse cuisines': '🍳',
            };
            return (
              <div key={hobby} className={styles.tile}>
                <div className={styles.tileIcon}>{hobbyIconMap[hobby] || '⭐'}</div>
                <div className={styles.tileName}>{hobby}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.section} id="contact">
        <h2 className={styles.sectionTitle}>Contact</h2>
        <div className={styles.contactRow}>
          <div className={styles.contactItem}>
            <a href={`mailto:${profile.email}`} className={styles.button}>{profile.email}</a>
          </div>
          <div className={styles.contactItem}>
            <a href={`tel:${profile.phone}`} className={styles.button}>{profile.phone}</a>
          </div>
          <div className={styles.contactItem}>
            <a href={profile.linkedin} className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className={styles.contactItem} style={{ color: '#232a36', fontWeight: 500 }}>
            {profile.location}
          </div>
          <div className={styles.contactItem}>
            <a href="/projects/Resume.pdf" className={styles.button} download>Download Resume</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App; 