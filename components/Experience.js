'use client'
import { useEffect, useRef } from 'react'
import { Briefcase, ExternalLink, ChevronRight, Award } from 'lucide-react'

const experiences = [
  {
    company: 'Tech Weave Labs',
    role: 'Software Engineering Intern',
    period: 'Jan 2026 – Mar 2026',
    type: 'Full-Stack',
    color: '#7c6dfa',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'WebSockets', 'Whisper API'],
    certificate: 'https://example.com/certificate-tech-weave-labs',
    points: [
      'Built a full-stack Hospital Management System using React, Node.js, Express, and PostgreSQL, supporting seamless workflows for Admin, Doctors, and Patients.',
      'Designed a real-time OPD queue system using WebSockets to reduce wait time and improve patient flow and doctor efficiency.',
      'Integrated AI-based speech-to-text prescriptions using Whisper API to automate medicine entry and clinical workflows.',
      'Developed secure REST APIs with role-based authentication and notifications for scalable and reliable operations.',
    ],
  },
  {
    company: 'Algonive',
    role: 'Backend Developer Intern',
    period: 'Jan 2026 – Mar 2026',
    type: 'Backend Engineering',
    color: '#fa6d8f',
    tech: ['Java', 'SQLite', 'JSON Serialization', 'SQL', 'CLI'],
    certificate: 'https://drive.google.com/file/d/1ZvjecF6VuliMf-zh3k_XPrrVWGm8tsHx/view?usp=sharing',
    points: [
      'Built a Native Durable Execution Engine inspired by Temporal/Cadence, enabling workflows to resume from failure without re-running completed side effects.',
      'Implemented a generic Step primitive with SQLite-backed memoization and logical sequence tracking for loops and conditionals.',
      'Enabled thread-safe parallel step execution, handling SQLITE BUSY errors and ensuring atomic RDBMS writes.',
      'Developed a CLI workflow runner to simulate crash recovery and validate durability across restarts.',
    ],
  },
  {
    company: 'Skillfied',
    role: 'Data Science Intern',
    period: 'May 2025 – June 2025',
    type: 'Machine Learning',
    color: '#6dfabd',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'LSTM', 'Jupyter'],
    certificate: 'https://drive.google.com/file/d/1aRrid7dTbeYx1q8pGvieV3J1PC5tmGxU/view?usp=sharing',
    points: [
      'Built an LSTM-based time series model to forecast cultivated-meat production trends, improving accuracy by 18%.',
      'Performed preprocessing, feature engineering, and hyperparameter tuning using Pandas/NumPy with RMSE and MAE evaluation, increasing model stability by 20%.',
      'Visualized model outputs in Jupyter Notebook to support data-driven production analysis and decision-making.',
    ],
  },
]

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.section-reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-28 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="section-reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase size={18} style={{ color: 'var(--accent)' }} />
            <span className="tag">Work History</span>
          </div>
          <h2
            className="font-display font-extrabold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Experience
          </h2>
          <p className="text-muted mt-3" style={{ maxWidth: '480px', lineHeight: 1.7 }}>
            Building production systems across full-stack development, backend engineering, and machine learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-3 bottom-3 hidden md:block"
            style={{ width: '1px', background: 'linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)' }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="section-reveal"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="md:pl-16 relative">
                  {/* Timeline dot */}
                  <div
                    className="hidden md:block absolute left-0 top-8 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: `${exp.color}18`,
                      border: `1px solid ${exp.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: exp.color }} />
                  </div>

                  {/* Card */}
                  <div
                    className="card-hover rounded-2xl p-7"
                    style={{ background: 'var(--card)', borderRadius: '16px' }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-bold text-xl">{exp.company}</h3>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: `${exp.color}18`,
                              color: exp.color,
                              fontFamily: 'JetBrains Mono',
                              fontSize: '0.65rem',
                              border: `1px solid ${exp.color}30`,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{exp.role}</p>
                      </div>
                      <span
                        style={{
                          color: 'var(--muted)',
                          fontSize: '0.8rem',
                          fontFamily: 'JetBrains Mono',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <div className="glow-line mb-5" style={{ opacity: 0.2 }} />

                    <ul className="flex flex-col gap-3 mb-5">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex gap-3 text-sm" style={{ color: 'var(--muted)', lineHeight: 1.65 }}>
                          <ChevronRight size={14} style={{ color: exp.color, flexShrink: 0, marginTop: '3px' }} />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags + Certificate */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontFamily: 'JetBrains Mono',
                              fontSize: '0.68rem',
                              padding: '3px 10px',
                              borderRadius: '100px',
                              border: `1px solid ${exp.color}30`,
                              background: `${exp.color}10`,
                              color: exp.color,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {exp.certificate && (
                        <a
                          href={exp.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-link"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            background: `${exp.color}10`,
                            border: `1px solid ${exp.color}25`,
                            color: exp.color,
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.7rem',
                            textDecoration: 'none',
                            letterSpacing: '0.03em',
                            transition: 'all 0.3s ease',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `${exp.color}22`
                            e.currentTarget.style.borderColor = `${exp.color}60`
                            e.currentTarget.style.boxShadow = `0 4px 20px ${exp.color}20`
                            e.currentTarget.style.transform = 'translateY(-1px)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = `${exp.color}10`
                            e.currentTarget.style.borderColor = `${exp.color}25`
                            e.currentTarget.style.boxShadow = 'none'
                            e.currentTarget.style.transform = 'translateY(0)'
                          }}
                        >
                          <Award size={13} />
                          {/* Certificate */}
                          <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
