'use client'
import { ExternalLink } from 'lucide-react'

const skillGroups = [
  {
    category: 'Languages',
    color: '#7c6dfa',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
  },
  {
    category: 'Frameworks & Libraries',
    color: '#fa6d8f',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Scikit-Learn'],
  },
  {
    category: 'Databases',
    color: '#6dfabd',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL (Neon)', 'SQLite'],
  },
  {
    category: 'Tools & Platforms',
    color: '#fad96d',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Inngest', 'Clerk', 'WebSockets', 'REST APIs'],
  },
  {
    category: 'Core Concepts',
    color: '#6db8fa',
    skills: ['DSA', 'OOP', 'Operating Systems', 'DBMS', 'AI', 'Machine Learning'],
  },
]

const proficiency = [
  { skill: 'React / Next.js', level: 90, color: '#7c6dfa' },
  { skill: 'Node.js / Express', level: 85, color: '#6dfabd' },
  { skill: 'Java', level: 80, color: '#fa6d8f' },
  { skill: 'Python / ML', level: 75, color: '#fad96d' },
  { skill: 'DSA & Algorithms', level: 82, color: '#6db8fa' },
  { skill: 'Databases (SQL/NoSQL)', level: 80, color: '#ff9f43' },
]

const codingProfiles = [
  { name: 'Codeforces', href: 'https://codeforces.com/profile/simplesheep03', color: '#e8403b' },
  { name: 'LeetCode', href: 'https://leetcode.com/u/SimpleSheep03/', color: '#ffa116' },
  { name: 'CodeChef', href: 'https://www.codechef.com/users/simplesheep03', color: '#5b4638' },
]

export default function SkillsWindow() {
  return (
    <div style={{ padding: '24px 28px', fontFamily: "'DM Sans', sans-serif", overflowY: 'auto' }}>
      {/* Skill groups grid */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.62rem',
          color: '#6b6b80',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}
      >
        Technical Stack
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 10, marginBottom: 28 }}>
        {skillGroups.map((group) => (
          <div
            key={group.category}
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 12,
              padding: '14px 16px',
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                color: group.color,
                letterSpacing: '0.05em',
                marginBottom: 10,
                textTransform: 'uppercase',
              }}
            >
              {group.category}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {group.skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: '0.75rem',
                    padding: '3px 10px',
                    borderRadius: 100,
                    border: `1px solid ${group.color}20`,
                    background: `${group.color}08`,
                    color: '#c0c0d0',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency bars */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.62rem',
          color: '#6b6b80',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}
      >
        Proficiency
      </div>

      <div
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: 12,
          padding: '18px 20px',
          marginBottom: 28,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {proficiency.map(({ skill, level, color }) => (
            <div key={skill}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: '0.8rem', color: '#c0c0d0' }}>{skill}</span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color,
                  }}
                >
                  {level}%
                </span>
              </div>
              <div
                style={{
                  height: 4,
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${level}%`,
                    borderRadius: 2,
                    background: `linear-gradient(90deg, ${color}, ${color}90)`,
                    transition: 'width 1s ease',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coding Profiles */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.62rem',
          color: '#6b6b80',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}
      >
        Competitive Programming
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        {codingProfiles.map(({ name, href, color }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '11px 14px',
              borderRadius: 10,
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#c0c0d0',
              fontSize: '0.78rem',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${color}60`
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: color,
                }}
              />
              {name}
            </div>
            <ExternalLink size={12} style={{ color: '#6b6b80' }} />
          </a>
        ))}
      </div>
    </div>
  )
}
