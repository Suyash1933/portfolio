'use client'
import { ExternalLink } from 'lucide-react'

const skillGroups = [
  {
    category: 'Languages',
    color: '#7c6dfa',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    color: '#fa6d8f',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'LangGraph', 'Tailwind CSS', 'Scikit-Learn'],
  },
  {
    category: 'Databases',
    color: '#6dfabd',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL (Neon)', 'SQLite', 'TimescaleDB', 'pgvector'],
  },
  {
    category: 'Tools & Platforms',
    color: '#fad96d',
    skills: ['Git', 'GitHub', 'AWS', 'Kafka', 'Docker', 'CI/CD', 'Postman', 'Vercel', 'Inngest', 'Clerk', 'WebSockets', 'REST APIs'],
  },
  {
    category: 'Core Concepts',
    color: '#6db8fa',
    skills: ['DSA', 'OOP', 'Operating Systems', 'DBMS', 'AI', 'Machine Learning', 'Multi-Agent Systems', 'RAG', 'Prompt Chaining', 'DevOps', 'Software Architecture'],
  },
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

      <div className="os-skills-grid">
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

        {/* Competitive Programming — inside the grid to fill the empty space */}
        <div
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
              color: '#ff9f43',
              letterSpacing: '0.05em',
              marginBottom: 10,
              textTransform: 'uppercase',
            }}
          >
            Competitive Programming
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {codingProfiles.map(({ name, href, color }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  color: '#c0c0d0',
                  fontSize: '0.76rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${color}60`
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
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
      </div>
    </div>
  )
}
