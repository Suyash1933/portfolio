'use client'
import { useState } from 'react'
import { ExternalLink, Github, Code2, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'CodeSync',
    subtitle: 'Codeforces Custom Contest Platform',
    description:
      'Full-stack contest platform for structured team-based competitive programming. Automated contest generation, interactive dashboards, and real-time analytics.',
    tech: ['Next.js', 'MongoDB', 'Google OAuth 2.0', 'REST API'],
    stats: '110+ Users · 540+ Contests',
    bullets: [
      'Automated contest generation with custom problem sets from Codeforces API',
      'Real-time leaderboard and performance analytics across team members',
      'Google OAuth 2.0 authentication with role-based access control',
      '4 interactive dashboards for contest management, standings, and progress tracking',
    ],
    live: 'https://code-sync-sandy.vercel.app/',
    github: 'https://github.com/Suyash1933/Code-Sync',
    color: '#7c6dfa',
  },
  {
    title: 'Nextflow',
    subtitle: 'Multi-tool AI Workspace',
    description:
      '6 specialized AI tools: image gen, video gen, asset enhancement, lipsync, motion transfer. ChatGPT-style sessions with persistent history and per-user management.',
    tech: ['Next.js', 'Clerk', 'Prisma', 'Gemini', 'TypeScript'],
    stats: '6 AI Workspaces · Production Ready',
    bullets: [
      'ChatGPT-style session management with draft pattern to avoid empty DB records',
      'Per-user session persistence with automatic title derivation from user input',
      'Shared REST session endpoints + tool-specific generation routes with centralized service layer',
      'TypeScript strict mode with full type-checking compliance across the codebase',
    ],
    live: 'https://nextflow-auxs.vercel.app/',
    github: 'https://github.com/Suyash1933/nextflow',
    color: '#00d9ff',
  },
  {
    title: 'AI Career Navigation',
    subtitle: 'Personalized Career Guidance with AI',
    description:
      'AI-powered career guidance with personalized roadmaps, skill-gap analysis, and automated resume evaluation. Async processing reduces evaluation time by 50%.',
    tech: ['Next.js', 'Clerk', 'Neon (PostgreSQL)', 'Inngest', 'AgentKit'],
    stats: '30+ Users · 50% Faster Evals',
    bullets: [
      'AI-driven personalized career roadmaps with skill-gap analysis and actionable steps',
      'Automated resume evaluation with structured scoring and improvement suggestions',
      'Async background processing via Inngest for non-blocking evaluation workflows',
      'Next.js App Router with TypeScript and Geist font optimization for production deployment',
    ],
    live: 'https://ai-career-agent-hpjz.vercel.app/',
    github: 'https://github.com/Suyash1933/Ai-career-agent',
    color: '#fa6d8f',
  },
  {
    title: 'AI Code Reviewer',
    subtitle: 'Multi-Language Intelligent Code Review',
    description:
      'Instant, structured code reviews using Google Gemini. Analyzes JavaScript, Python, Java, C++, and Go — highlighting good practices, identifying bugs, and providing actionable improvements.',
    tech: ['React.js', 'Express.js', 'Google Gemini API', 'Node.js'],
    stats: '5 Languages · Real-time Analysis',
    bullets: [
      'Structured output with good practices, bad practices, optimization hints, and improved code examples',
      'Language-specific best practice analysis for JavaScript, Python, Java, C++, and Go',
      'React frontend with syntax highlighting (highlight.js) and markdown rendering for reviews',
      'Express backend with environment variable API key protection and lightweight response cycle',
    ],
    github: 'https://github.com/Suyash1933/ai-code-reviewer',
    color: '#6dfabd',
  },
  {
    title: 'The Empathy Engine',
    subtitle: 'Emotionally Aware Text-to-Speech',
    description:
      'Transforms plain text into emotionally aware speech. Detects 6 emotions using hybrid VADER sentiment analysis, maps to vocal parameters, generates .wav files.',
    tech: ['Python', 'FastAPI', 'React', 'VADER', 'SSML'],
    stats: '6 Emotions · API + CLI',
    bullets: [
      'Hybrid NLP approach: VADER sentiment + custom keyword matching + phrase boosting + negation handling',
      'Dynamic vocal modulation adjusting pitch, rate, and volume based on emotion intensity (0-1 scale)',
      'Three interfaces: CLI, REST API (FastAPI), and interactive web UI with emotion-aware theming',
      'Modular architecture with pluggable TTS layer — no third-party API key dependency',
    ],
    github: 'https://github.com/Suyash1933/emotion-detector',
    color: '#ff9f43',
  },
]

export default function ProjectsWindow() {
  const [active, setActive] = useState(0)
  const proj = projects[active]

  return (
    <div className="os-sidebar-layout" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Sidebar - project list */}
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
          Projects ({projects.length})
        </div>
        {projects.map((p, i) => (
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
              background:
                active === i ? 'rgba(124,109,250,0.12)' : 'transparent',
              color: active === i ? '#e8e8f0' : '#8888a0',
              fontSize: '0.8rem',
              fontFamily: "'DM Sans', sans-serif",
              textAlign: 'left',
              transition: 'all 0.15s ease',
              marginBottom: 2,
            }}
            onMouseEnter={(e) => {
              if (active !== i)
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            }}
            onMouseLeave={(e) => {
              if (active !== i) e.currentTarget.style.background = 'transparent'
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: p.color,
                flexShrink: 0,
                boxShadow: active === i ? `0 0 8px ${p.color}60` : 'none',
              }}
            />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {p.title}
            </span>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <div className="os-detail-panel">
        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: proj.color,
                boxShadow: `0 0 10px ${proj.color}50`,
              }}
            />
            <h3
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#e8e8f0',
                margin: 0,
              }}
            >
              {proj.title}
            </h3>
          </div>
          <p
            style={{
              color: '#6b6b80',
              fontSize: '0.82rem',
              fontFamily: "'JetBrains Mono', monospace",
              margin: 0,
            }}
          >
            {proj.subtitle}
          </p>
        </div>

        {/* Description */}
        <p style={{ color: '#9999aa', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 16 }}>
          {proj.description}
        </p>

        {/* Bullet points */}
        {proj.bullets && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
            {proj.bullets.map((bullet, bi) => (
              <div
                key={bi}
                style={{
                  display: 'flex',
                  gap: 8,
                  fontSize: '0.8rem',
                  color: '#9999aa',
                  lineHeight: 1.6,
                }}
              >
                <ChevronRight
                  size={13}
                  style={{ color: proj.color, flexShrink: 0, marginTop: 3 }}
                />
                {bullet}
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 14px',
            borderRadius: 100,
            background: `${proj.color}12`,
            border: `1px solid ${proj.color}25`,
            marginBottom: 18,
          }}
        >
          <Code2 size={12} style={{ color: proj.color }} />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: proj.color,
            }}
          >
            {proj.stats}
          </span>
        </div>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
          {proj.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem',
                padding: '4px 12px',
                borderRadius: 100,
                border: `1px solid ${proj.color}28`,
                background: `${proj.color}0a`,
                color: '#b0b0c0',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 10 }}>
          {proj.live && (
            <a
              href={proj.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '9px 18px',
                borderRadius: 8,
                background: `${proj.color}18`,
                border: `1px solid ${proj.color}30`,
                color: proj.color,
                fontSize: '0.76rem',
                fontFamily: "'JetBrains Mono', monospace",
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${proj.color}28`
                e.currentTarget.style.borderColor = `${proj.color}50`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${proj.color}18`
                e.currentTarget.style.borderColor = `${proj.color}30`
              }}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '9px 18px',
              borderRadius: 8,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#9999aa',
              fontSize: '0.76rem',
              fontFamily: "'JetBrains Mono', monospace",
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = '#e8e8f0'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.color = '#9999aa'
            }}
          >
            <Github size={13} />
            Source
          </a>
        </div>
      </div>
    </div>
  )
}
