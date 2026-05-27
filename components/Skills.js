'use client'
import { useEffect, useRef } from 'react'
import { Cpu, Database, Globe, Wrench, BookOpen, BarChart2, ExternalLink } from 'lucide-react'

const skillGroups = [
  {
    category: 'Languages',
    icon: Cpu,
    color: '#7c6dfa',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: Globe,
    color: '#fa6d8f',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Scikit-Learn'],
  },
  {
    category: 'Databases',
    icon: Database,
    color: '#6dfabd',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL (Neon)', 'SQLite'],
  },
  {
    category: 'Tools & Platforms',
    icon: Wrench,
    color: '#fad96d',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Inngest', 'Clerk', 'WebSockets', 'REST APIs'],
  },
  {
    category: 'Core Concepts',
    icon: BookOpen,
    color: '#6db8fa',
    skills: ['DSA', 'OOP', 'Operating Systems', 'DBMS', 'Artificial Intelligence', 'Machine Learning'],
  },
]

export default function Skills() {
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
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-28 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(124,109,250,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="section-reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Cpu size={18} style={{ color: 'var(--accent)' }} />
            <span className="tag">Technical Stack</span>
          </div>
          <h2
            className="font-display font-extrabold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Skills
          </h2>
          <p className="text-muted mt-3" style={{ maxWidth: '480px', lineHeight: 1.7 }}>
            A comprehensive toolkit built across academic projects, internships, and independent development.
          </p>
        </div>

        {/* Skill groups - full width grid */}
        <div className="section-reveal grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <div
                key={i}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '18px 20px',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${group.color}50`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--border)')
                }
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={15} style={{ color: group.color }} />
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono',
                      fontSize: '0.72rem',
                      color: group.color,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {group.category.toUpperCase()}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: 'DM Sans',
                        fontSize: '0.8rem',
                        padding: '4px 12px',
                        borderRadius: '100px',
                        border: `1px solid ${group.color}25`,
                        background: `${group.color}0d`,
                        color: 'var(--text)',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Education - fits as a card in the grid */}
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              padding: '18px 20px',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = 'rgba(124,109,250,0.3)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = 'var(--border)')
            }
          >
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={15} style={{ color: 'var(--accent)' }} />
              <span
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.72rem',
                  color: 'var(--accent)',
                  letterSpacing: '0.05em',
                }}
              >
                EDUCATION
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(124,109,250,0.15)',
                  border: '1px solid rgba(124,109,250,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontFamily: 'Syne',
                  fontWeight: 800,
                  fontSize: '0.7rem',
                  color: 'var(--accent)',
                }}
              >
                IIIT
              </div>
              <div>
                <p className="font-display font-bold text-sm">IIIT Prayagraj</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>
                  B.Tech in Information Technology
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'JetBrains Mono', marginTop: '4px' }}>
                  2022 – Present 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Programming Section */}
        <div className="section-reveal mt-16" style={{ transitionDelay: '0.3s' }}>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <BarChart2 size={18} style={{ color: '#fa9e6d' }} />
              <span className="tag tag-green">Competitive Programming</span>
            </div>
            <p className="text-muted" style={{ maxWidth: '520px', lineHeight: 1.7, fontSize: '0.9rem' }}>
              Active profiles where I solve algorithmic problems and participate in coding contests.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Codeforces', href: 'https://codeforces.com/profile/simplesheep03', color: '#e8403b' },
              { name: 'LeetCode', href: 'https://leetcode.com/u/SimpleSheep03/', color: '#ffa116' },
              { name: 'CodeChef', href: 'https://www.codechef.com/users/simplesheep03', color: '#5b4638' },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex items-center justify-between p-5 rounded-2xl"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  color: 'var(--text)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: platform.color,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{platform.name}</span>
                </div>
                <ExternalLink size={14} style={{ color: 'var(--muted)' }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
