'use client'
import { useState } from 'react'
import { ChevronRight, Award, ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'SwasthiQ',
    role: 'Software Engineering Intern',
    period: 'Remote',
    type: 'Full-Stack',
    color: '#00d9ff',
    tech: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'AI-scribe'],
    description:
      'Worked on a healthcare SaaS platform powering AI-driven clinical workflows. Owned the feature flag infrastructure end-to-end — from schema design to middleware enforcement — serving both free-tier and premium customers across hybrid and cloud deployments.',
    points: [
      'Built a feature flag system in FastAPI for hybrid and cloud deployments across clinics.',
      'Designed database schema with Alembic migrations for multi-tenant architecture.',
      'Developed decorator-based middleware for feature access control and admin APIs.',
      'Integrated Google OAuth using AWS Cognito, resolving staging auth issues.',
      'Connected frontend with backend APIs, resolved CORS/routing issues and added smoke tests.',
    ],
  },
  {
    company: 'Tech Weave Labs',
    role: 'Software Engineering Intern',
    period: 'Jan 2026 – Mar 2026',
    type: 'Full-Stack',
    color: '#7c6dfa',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'WebSockets', 'Whisper API'],
    certificate: 'https://example.com/certificate-tech-weave-labs',
    description:
      'Built a production-grade Hospital Management System from the ground up, serving Admin, Doctor, and Patient roles. Streamlined clinical operations with real-time queue management, AI-powered prescription automation, and a comprehensive analytics dashboard.',
    points: [
      'Built a full-stack Hospital Management System supporting Admin, Doctors, and Patients workflows.',
      'Designed a real-time OPD queue system using WebSockets to reduce wait time.',
      'Integrated AI-based speech-to-text prescriptions using Whisper API.',
      'Developed secure REST APIs with role-based authentication.',
      'Implemented appointment scheduling with automated reminders reducing no-show rates.',
      'Built admin analytics dashboard with real-time metrics for department load and throughput.',
    ],
  },
  {
    company: 'Algonive',
    role: 'Backend Developer Intern',
    period: 'Jan 2026 – Mar 2026',
    type: 'Backend Engineering',
    color: '#fa6d8f',
    tech: ['Java', 'SQLite', 'JSON Serialization', 'SQL', 'CLI'],
    certificate: 'https://example.com/certificate-algonive',
    description:
      'Designed and built a Native Durable Execution Engine from scratch — inspired by Temporal and Cadence — enabling long-running workflows to survive crashes and resume exactly where they left off. Achieved zero data loss across 500+ simulated crash-recovery test runs.',
    points: [
      'Built a Native Durable Execution Engine inspired by Temporal/Cadence.',
      'Implemented generic Step primitive with SQLite-backed memoization.',
      'Enabled thread-safe parallel step execution with atomic RDBMS writes.',
      'Developed a CLI workflow runner for crash recovery validation.',
      'Designed JSON serialization layer for persisting workflow state across process boundaries.',
      'Achieved zero data loss across 500+ simulated crash-recovery test executions.',
    ],
  },
  {
    company: 'Skillfied',
    role: 'Data Science Intern',
    period: 'May 2025 – June 2025',
    type: 'Machine Learning',
    color: '#6dfabd',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'LSTM', 'Jupyter'],
    certificate: 'https://example.com/certificate-skillfied',
    description:
      'Developed a deep learning forecasting pipeline for cultivated-meat production using LSTM networks. Improved prediction accuracy by 18% and stability by 20% through rigorous feature engineering and cross-validation — delivering insights that directly informed stakeholder scaling decisions.',
    points: [
      'Built an LSTM-based time series model to forecast cultivated-meat production trends (+18% accuracy).',
      'Performed preprocessing, feature engineering, and hyperparameter tuning (+20% stability).',
      'Visualized model outputs in Jupyter Notebook for data-driven analysis.',
      'Implemented rolling-window cross-validation to prevent data leakage and ensure robust performance.',
      'Delivered final report with actionable insights informing production scaling decisions.',
    ],
  },
]

export default function ExperienceWindow() {
  const [active, setActive] = useState(0)
  const exp = experiences[active]

  return (
    <div className="os-sidebar-layout" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Sidebar */}
      <div className="os-sidebar">
        <div
          style={{
            padding: '8px 10px 12px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.62rem',
            color: '#6b6b80',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Companies
        </div>
        {experiences.map((e, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              width: '100%',
              padding: '10px 12px',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              background: active === i ? 'rgba(124,109,250,0.12)' : 'transparent',
              color: active === i ? '#e8e8f0' : '#8888a0',
              fontSize: '0.8rem',
              fontFamily: "'DM Sans', sans-serif",
              textAlign: 'left',
              transition: 'all 0.15s ease',
              marginBottom: 2,
            }}
            onMouseEnter={(ev) => {
              if (active !== i) ev.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            }}
            onMouseLeave={(ev) => {
              if (active !== i) ev.currentTarget.style.background = 'transparent'
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: e.color,
                flexShrink: 0,
              }}
            />
            {e.company}
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <div className="os-detail-panel">
        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#e8e8f0',
                margin: 0,
              }}
            >
              {exp.company}
            </h3>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.6rem',
                padding: '2px 10px',
                borderRadius: 100,
                background: `${exp.color}15`,
                color: exp.color,
                border: `1px solid ${exp.color}30`,
              }}
            >
              {exp.type}
            </span>
          </div>
          <p style={{ color: '#9999aa', fontSize: '0.88rem', margin: '4px 0 0' }}>
            {exp.role}
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              color: '#6b6b80',
              marginTop: 6,
            }}
          >
            {exp.period}
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: `linear-gradient(90deg, ${exp.color}40, transparent)`,
            marginBottom: 16,
          }}
        />

        {/* Description */}
        {exp.description && (
          <p
            style={{
              color: '#c8c8d8',
              fontSize: '0.83rem',
              lineHeight: 1.75,
              marginBottom: 18,
            }}
          >
            {exp.description}
          </p>
        )}

        {/* Points */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
          {exp.points.map((pt, j) => (
            <div
              key={j}
              style={{
                display: 'flex',
                gap: 10,
                fontSize: '0.84rem',
                color: '#9999aa',
                lineHeight: 1.65,
              }}
            >
              <ChevronRight
                size={14}
                style={{ color: exp.color, flexShrink: 0, marginTop: 3 }}
              />
              {pt}
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          {exp.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.66rem',
                padding: '3px 11px',
                borderRadius: 100,
                border: `1px solid ${exp.color}28`,
                background: `${exp.color}0a`,
                color: exp.color,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Certificate link */}
        {exp.certificate && (
          <a
            href={exp.certificate}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '8px 16px',
              borderRadius: 100,
              background: `${exp.color}10`,
              border: `1px solid ${exp.color}25`,
              color: exp.color,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${exp.color}20`
              e.currentTarget.style.borderColor = `${exp.color}50`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${exp.color}10`
              e.currentTarget.style.borderColor = `${exp.color}25`
            }}
          >
            <Award size={13} />
            Certificate
            <ExternalLink size={11} />
          </a>
        )}
      </div>
    </div>
  )
}
