'use client'
import { useEffect, useRef, useState } from 'react'
import { Code2, ExternalLink, Github, Users, Trophy, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'CodeSync',
    subtitle: 'Codeforces Custom Contest Platform',
    description:
      'A full-stack contest platform for structured team-based competitive programming practice. Features automated contest generation, interactive dashboards, and real-time analytics.',
    tech: ['Next.js', 'MongoDB', 'Google OAuth 2.0', 'REST API'],
    bullets: [
      'Automated contest generation with custom problem sets from Codeforces API',
      'Real-time leaderboard and performance analytics across team members',
      'Google OAuth 2.0 authentication with role-based access control',
      '4 interactive dashboards for contest management, standings, and progress tracking',
    ],
    highlights: [
      { icon: Users, value: '110+', label: 'Active Users' },
      { icon: Trophy, value: '540+', label: 'Contests Hosted' },
      { icon: Code2, value: '4', label: 'Dashboards' },
    ],
    live: 'https://code-sync-sandy.vercel.app/',
    github: 'https://github.com/Suyash1933/Code-Sync',
    color: '#7c6dfa',
    featured: true,
  },
   {
    title: 'Nextflow',
    subtitle: 'Multi-tool AI Workspace',
    description:
      'A comprehensive AI workspace built with Next.js and Clerk featuring 6 specialized tools: image generation, video generation, asset enhancement, Nano Banana Pro, video lipsync, and motion transfer. Implements ChatGPT-style sessions with persistent history, normalized session titles, and per-user session management with Prisma.',
    tech: ['Next.js', 'Clerk', 'Prisma', 'Gemini', 'TypeScript'],
    bullets: [
      'ChatGPT-style session management with draft pattern to avoid empty DB records',
      'Per-user session persistence with automatic title derivation from user input',
      'Shared REST session endpoints + tool-specific generation routes with centralized service layer',
      'TypeScript strict mode with full type-checking compliance across the codebase',
    ],
    highlights: [
      { icon: Code2, value: '6', label: 'AI Workspaces' },
      { icon: Users, value: '∞', label: 'Per-User History' },
      { icon: Trophy, value: 'Real+', label: 'Production Ready' },
    ],
    live: 'https://nextflow-auxs.vercel.app/',
    github: 'https://github.com/Suyash1933/nextflow',
    color: '#00d9ff',
    featured: true,
  },
  {
    title: 'AI Career Navigation Platform',
    subtitle: 'Personalized Career Guidance with AI',
    description:
      'An AI-powered career guidance platform with personalized roadmaps, skill-gap analysis, and automated resume evaluation. Built with async processing to reduce evaluation time by 50%.',
    tech: ['Next.js', 'Clerk', 'Neon (PostgreSQL)', 'Inngest', 'AgentKit'],
    bullets: [
      'AI-driven personalized career roadmaps with skill-gap analysis and actionable steps',
      'Automated resume evaluation with structured scoring and improvement suggestions',
      'Async background processing via Inngest for non-blocking evaluation workflows',
      'Next.js App Router with TypeScript and Geist font optimization for production deployment',
    ],
    highlights: [
      { icon: Users, value: '30+', label: 'Active Users' },
      { icon: Code2, value: '99.9%', label: 'Uptime' },
      { icon: Trophy, value: '50%', label: 'Faster Evals' },
    ],
    live: 'https://ai-career-agent-hpjz.vercel.app/',
    github: 'https://github.com/Suyash1933/Ai-career-agent',
    color: '#fa6d8f',
    featured: true,
  },
  {
    title: 'AI Code Reviewer',
    subtitle: 'Multi-Language Intelligent Code Review Platform',
    description:
      'An AI-powered web application that provides instant, structured code reviews using Google Gemini. Analyzes code in JavaScript, Python, Java, C++, and Go, highlighting good practices, identifying bugs, and providing actionable improvements for cleaner, faster, and more maintainable code.',
    tech: ['React.js', 'Express.js', 'Google Gemini API', 'Node.js', 'Axios'],
    bullets: [
      'Structured output with good practices, bad practices, optimization hints, and improved code examples',
      'Language-specific best practice analysis for JavaScript, Python, Java, C++, and Go',
      'React frontend with syntax highlighting (highlight.js) and markdown rendering for reviews',
      'Express backend with environment variable API key protection and lightweight response cycle',
    ],
    highlights: [
      { icon: Code2, value: '5', label: 'Languages' },
      { icon: Trophy, value: 'Real-time', label: 'Analysis' },
      { icon: Users, value: 'Structured', label: 'Reviews' },
    ],
    github: 'https://github.com/Suyash1933/ai-code-reviewer',
    color: '#6dfabd',
    featured: true,
  },
  {
    title: 'The Empathy Engine',
    subtitle: 'Emotionally Aware Text-to-Speech Platform',
    description:
      'A Windows-friendly Python project that transforms plain text into emotionally aware speech. Detects emotion (positive, negative, concerned, inquisitive, surprised, neutral) using hybrid VADER sentiment analysis, maps emotions to vocal parameters (pitch, rate, volume), and generates playable .wav files. Features CLI, FastAPI web interface with emotion-aware theming, real-time audio player, and modular architecture for easy TTS engine swapping.',
    tech: ['Python', 'FastAPI','React', 'VADER', 'SSML'],
    bullets: [
      'Hybrid NLP approach: VADER sentiment + custom keyword matching + phrase boosting + negation handling',
      'Dynamic vocal modulation adjusting pitch, rate, and volume based on emotion intensity (0-1 scale)',
      'Three interfaces: CLI, REST API (FastAPI), and interactive web UI with emotion-aware theming',
      'Modular architecture with pluggable TTS layer — no third-party API key dependency',
    ],
    highlights: [
      { icon: Trophy, value: '6', label: 'Emotions' },
      { icon: Code2, value: 'Hybrid', label: 'Detection' },
      { icon: Users, value: 'API+CLI', label: 'Interfaces' },
    ],
    github: 'https://github.com/Suyash1933/emotion-detector',
    color: '#ff9f43',
    featured: true,
  },
]

const INITIAL_COUNT = 2

export default function Projects() {
  const sectionRef = useRef(null)
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [showAll])

  return (
    <section id="projects" className="py-28 relative" ref={sectionRef}>
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(250,109,143,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="section-reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Code2 size={18} style={{ color: 'var(--accent)' }} />
            <span className="tag">Selected Work</span>
          </div>
          <h2
            className="font-display font-extrabold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Projects
          </h2>
          <p className="text-muted mt-3" style={{ maxWidth: '480px', lineHeight: 1.7 }}>
            Real products with real users — from competitive programming platforms to AI-powered career tools.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {visibleProjects.map((proj, i) => (
            <div
              key={i}
              className="section-reveal card-hover rounded-2xl overflow-hidden"
              style={{
                background: 'var(--card)',
                transitionDelay: `${i * 0.15}s`,
                borderRadius: '20px',
              }}
            >
              {/* Top accent line */}
              <div style={{ height: '3px', background: `linear-gradient(90deg, ${proj.color}, transparent)` }} />

              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  {/* Info */}
                  <div className="flex-1" style={{ minWidth: '280px' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: proj.color,
                          flexShrink: 0,
                          boxShadow: `0 0 8px ${proj.color}`,
                        }}
                      />
                      <h3 className="font-display font-bold text-xl">{proj.title}</h3>
                      {proj.featured && (
                        <span
                          style={{
                            fontFamily: 'JetBrains Mono',
                            fontSize: '0.62rem',
                            padding: '2px 8px',
                            borderRadius: '100px',
                            background: `${proj.color}18`,
                            color: proj.color,
                            border: `1px solid ${proj.color}30`,
                          }}
                        >
                          LIVE
                        </span>
                      )}
                    </div>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '12px' }}>
                      {proj.subtitle}
                    </p>
                    <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.9rem', maxWidth: '520px' }}>
                      {proj.description}
                    </p>

                    {/* Bullet points */}
                    {proj.bullets && (
                      <ul className="flex flex-col gap-2 mt-4" style={{ maxWidth: '520px' }}>
                        {proj.bullets.map((bullet, bi) => (
                          <li
                            key={bi}
                            className="flex gap-2 text-sm"
                            style={{ color: 'var(--muted)', lineHeight: 1.6 }}
                          >
                            <ChevronRight size={13} style={{ color: proj.color, flexShrink: 0, marginTop: '3px' }} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: 'JetBrains Mono',
                            fontSize: '0.68rem',
                            padding: '3px 10px',
                            borderRadius: '100px',
                            border: '1px solid var(--border)',
                            background: 'rgba(255,255,255,0.03)',
                            color: 'var(--muted)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 mt-6">
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow"
                        style={{ color: proj.color }}
                      >
                        <ExternalLink size={14} />
                        Live Demo →
                      </a>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow"
                        style={{ color: 'var(--muted)' }}
                      >
                        <Github size={14} />
                        Source
                      </a>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-row md:flex-col gap-4">
                    {proj.highlights.map(({ icon: Icon, value, label }, j) => (
                      <div
                        key={j}
                        style={{
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          borderRadius: '14px',
                          padding: '16px 20px',
                          textAlign: 'center',
                          minWidth: '110px',
                        }}
                      >
                        <Icon size={16} style={{ color: proj.color, margin: '0 auto 6px' }} />
                        <p
                          className="font-display font-extrabold"
                          style={{ fontSize: '1.4rem', color: proj.color }}
                        >
                          {value}
                        </p>
                        <p style={{ color: 'var(--muted)', fontSize: '0.7rem', marginTop: '2px' }}>{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less toggle */}
        {projects.length > INITIAL_COUNT && (
          <div className="section-reveal visible mt-10 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="group"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '12px 32px',
                color: 'var(--text)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                letterSpacing: '0.03em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(124, 109, 250, 0.15)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show More  <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="section-reveal mt-12 text-center">
          <a
            href="https://github.com/Suyash1933"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
