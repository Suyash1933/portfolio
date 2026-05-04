'use client'
import { Mail, Linkedin, Github, Phone, ExternalLink, Calendar } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mishrasuyash713@gmail.com',
    href: 'mailto:mishrasuyash713@gmail.com',
    color: '#7c6dfa',
    tag: 'Preferred',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/suyash-mishra',
    href: 'https://www.linkedin.com/in/suyash-mishra-9399ab362/',
    color: '#0a66c2',
    tag: 'Professional',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Suyash1933',
    href: 'https://github.com/Suyash1933',
    color: '#e8e8f0',
    tag: 'Open source',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6266174671',
    href: 'tel:+916266174671',
    color: '#6dfabd',
    tag: 'WhatsApp',
  },
]

export default function ContactWindow() {
  return (
    <div style={{ padding: '24px 28px', fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h3
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '1.2rem',
            color: '#e8e8f0',
            margin: '0 0 6px',
          }}
        >
          Get In Touch
        </h3>
        <p style={{ color: '#6b6b80', fontSize: '0.82rem', lineHeight: 1.6 }}>
          Open to opportunities — full-time roles, internships, or collaborations.
        </p>
      </div>

      {/* Contact cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 22 }}>
        {contacts.map(({ icon: Icon, label, value, href, color, tag }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '14px 18px',
              borderRadius: 12,
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.05)',
              textDecoration: 'none',
              color: '#e8e8f0',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${color}40`
              e.currentTarget.style.background = 'rgba(255,255,255,0.045)'
              e.currentTarget.style.transform = 'translateX(4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
              e.currentTarget.style.transform = 'translateX(0)'
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: `${color}15`,
                border: `1px solid ${color}25`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon size={18} style={{ color }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.62rem',
                  color: '#6b6b80',
                  margin: '0 0 3px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  margin: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {value}
              </p>
            </div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.58rem',
                padding: '2px 8px',
                borderRadius: 100,
                background: `${color}10`,
                color,
                border: `1px solid ${color}20`,
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {tag}
            </span>
          </a>
        ))}
      </div>

      {/* Calendly CTA */}
      <a
        href="https://calendly.com/mishrasuyash713/30min"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          padding: '14px 20px',
          borderRadius: 12,
          background: 'linear-gradient(135deg, rgba(124,109,250,0.15), rgba(250,109,143,0.15))',
          border: '1px solid rgba(124,109,250,0.25)',
          color: '#7c6dfa',
          fontSize: '0.82rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 500,
          textDecoration: 'none',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(124,109,250,0.5)'
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(124,109,250,0.2)'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(124,109,250,0.25)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <Calendar size={16} />
        Schedule a 30-min Meeting
        <ExternalLink size={12} style={{ opacity: 0.6 }} />
      </a>
    </div>
  )
}
