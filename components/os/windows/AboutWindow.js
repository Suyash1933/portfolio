'use client'
import { Github, Linkedin, Mail, Phone, ExternalLink, Radius } from 'lucide-react'

const info = [
  { label: 'Location', value: 'Rewa, Madhya Pradesh, India' },
  { label: 'Education', value: 'B.Tech IT, IIIT Prayagraj' },
  { label: 'Batch', value: '2022 – 2026' },
  { label: 'CGPA', value: '8.10 / 10.0' },
  { label: 'Status', value: 'Open to Work', highlight: true },
]

const stats = [
  { label: 'Internships', value: '3' },
  { label: 'Live Projects', value: '2+' },
  { label: 'Users', value: '140+' },
  { label: 'Profiles', value: '3' },
]

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Suyash1933', color: '#e8e8f0' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/suyash-mishra-9399ab362/', color: '#0a66c2' },
  { icon: Mail, label: 'mishrasuyash713@gmail.com', href: 'mailto:mishrasuyash713@gmail.com', color: '#7c6dfa' },
  { icon: Phone, label: '+91 6266174671', href: 'tel:+916266174671', color: '#6dfabd' },
]

export default function AboutWindow() {
  return (
    <div style={{ padding: '28px 32px', fontFamily: "'DM Sans', sans-serif" }}>
      {/* Profile header */}
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 22,
            margin: '0 auto 16px',
            background: 'linear-gradient(135deg, #7c6dfa, #fa6d8f)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '1.8rem',
            color: 'white',
            boxShadow: '0 8px 32px rgba(124,109,250,0.3)',
          }}
        >
          SM
        </div>
        <h2
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '1.6rem',
            margin: '0 0 6px',
            color: '#e8e8f0',
            letterSpacing: '-0.02em',
          }}
        >
          Suyash Mishra
        </h2>
        <p
          style={{
            color: '#7c6dfa',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.78rem',
          }}
        >
          Software Engineer & Full-Stack Developer
        </p>
      </div>

      {/* Info rows */}
      <div
        style={{
          background: 'rgba(255,255,255,0.025)',
          borderRadius: 14,
          padding: '4px 18px',
          marginBottom: 22,
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {info.map(({ label, value, highlight }, i) => (
          <div
            key={label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '11px 0',
              borderBottom:
                i < info.length - 1
                  ? '1px solid rgba(255,255,255,0.04)'
                  : 'none',
            }}
          >
            <span style={{ color: '#6b6b80', fontSize: '0.82rem' }}>{label}</span>
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 500,
                color: highlight ? '#6dfabd' : '#e8e8f0',
              }}
            >
              {highlight && '● '}
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Stats grid */}
      <div
        className="os-stats-grid"
        style={{ marginBottom: 22 }}
      >
        {stats.map(({ label, value }) => (
          <div
            key={label}
            style={{
              background: 'rgba(255,255,255,0.025)',
              borderRadius: 12,
              padding: '14px 8px',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '1.3rem',
                background: 'linear-gradient(135deg, #7c6dfa, #fa6d8f)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {value}
            </div>
            <div style={{ color: '#6b6b80', fontSize: '0.65rem', marginTop: 3 }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div className="os-social-grid">
        {socials.map(({ icon: Icon, label, href, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '11px 16px',
              borderRadius: 10,
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.05)',
              color: '#e8e8f0',
              fontSize: '0.78rem',
              fontFamily: "'JetBrains Mono', monospace",
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${color}50`
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
            }}
          >
            <Icon size={15} style={{ color, flexShrink: 0 }} />
            {label}
            <ExternalLink size={10} style={{ color: '#6b6b80', marginLeft: 'auto' }} />
          </a>
        ))}
      </div>

      {/* Resume link */}
      <a
        href="https://drive.google.com/file/d/1VBwv3-naX5JWu5w8jvb8BLodwfMKUQLX/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          marginTop: 18,
          padding: '12px 20px',
          borderRadius: 10,
          background: 'linear-gradient(135deg, rgba(124,109,250,0.15), rgba(250,109,143,0.15))',
          border: '1px solid rgba(124,109,250,0.25)',
          color: '#7c6dfa',
          fontSize: '0.8rem',
          fontFamily: "'JetBrains Mono', monospace",
          textDecoration: 'none',
          fontWeight: 500,
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(124,109,250,0.5)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,109,250,0.2)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(124,109,250,0.25)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <ExternalLink size={14} />
        View Resume
      </a>
    </div>
  )
}
