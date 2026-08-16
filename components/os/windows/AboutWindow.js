'use client'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react'

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Suyash1933', color: '#e8e8f0' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/suyash-mishra-9399ab362/', color: '#0a66c2' },
  { icon: Mail, label: 'mishrasuyash713@gmail.com', href: 'mailto:mishrasuyash713@gmail.com', color: '#7c6dfa' },
  { icon: Phone, label: '+91 6266174671', href: 'tel:+916266174671', color: '#6dfabd' },
]

export default function AboutWindow() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div style={{ padding: isMobile ? '18px 16px' : '24px 28px', fontFamily: "'DM Sans', sans-serif", overflowY: 'auto' }}>

      {/* ── Header: Centered logo + name, then bio below ── */}
      <div style={{ textAlign: 'center', marginBottom: isMobile ? 18 : 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 10 : 14, marginBottom: 12 }}>
          <div
            style={{
              width: isMobile ? 48 : 64,
              height: isMobile ? 48 : 64,
              borderRadius: isMobile ? 14 : 18,
              background: 'linear-gradient(135deg, #7c6dfa, #fa6d8f)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: isMobile ? '1.1rem' : '1.5rem',
              color: 'white',
              boxShadow: '0 6px 24px rgba(124,109,250,0.3)',
              flexShrink: 0,
            }}
          >
            SM
          </div>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              color: '#e8e8f0',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Suyash Mishra
          </h2>
        </div>
        <p
          style={{
            color: '#7c6dfa',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: isMobile ? '0.68rem' : '0.76rem',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Hi there! Welcome to my portfolio! I'm Suyash, a passionate software developer with a love for creating innovative solutions. I enjoy exploring new technologies and continuously improving my skills.
        </p>
      </div>

      {/* ── Two-column (desktop) / Single-column (mobile) layout ── */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 14 : 16 }}>

        {/* Left column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Education card */}
          <div
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 12,
              padding: isMobile ? '14px 14px' : '16px 18px',
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.62rem',
                color: '#7c6dfa',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Education
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img
                src="/iiita-logo.png"
                alt="IIIT Allahabad"
                style={{
                  width: isMobile ? 36 : 42,
                  height: isMobile ? 36 : 42,
                  borderRadius: 10,
                  objectFit: 'contain',
                  flexShrink: 0,
                }}
                draggable={false}
              />
              <div>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: isMobile ? '0.82rem' : '0.88rem', color: '#e8e8f0', margin: 0 }}>
                  IIIT Allahabad
                </p>
                <p style={{ color: '#6b6b80', fontSize: isMobile ? '0.7rem' : '0.76rem', margin: '2px 0 0' }}>
                  B.Tech in Information Technology
                </p>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6b6b80', fontSize: '0.68rem', margin: '4px 0 0' }}>
                  2022 – 2026
                </p>
              </div>
            </div>
          </div>

          {/* Resume button */}
          <a
            href="https://drive.google.com/file/d/1E5O0rV0hsjQuR5_vGg1OhlEE4f7924z2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: '12px 20px',
              borderRadius: 10,
              background: 'linear-gradient(135deg, rgba(124,109,250,0.15), rgba(250,109,143,0.15))',
              border: '1px solid rgba(124,109,250,0.25)',
              color: '#7c6dfa',
              fontSize: '0.78rem',
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

        {/* Right column — Socials */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
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
                padding: isMobile ? '10px 14px' : '11px 16px',
                borderRadius: 10,
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.05)',
                color: '#e8e8f0',
                fontSize: isMobile ? '0.72rem' : '0.76rem',
                fontFamily: "'JetBrains Mono', monospace",
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                overflow: 'hidden',
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
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
              <ExternalLink size={10} style={{ color: '#6b6b80', marginLeft: 'auto', flexShrink: 0 }} />
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}
