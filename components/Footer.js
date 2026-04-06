'use client'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--surface)',
        padding: '15px 10px',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="font-display font-bold"
            style={{
              background: 'linear-gradient(135deg, #7c6dfa, #fa6d8f)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            SM
          </span>
          <span style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>
            · Suyash Mishra · 
          </span>
        </div>

        <div style={{ color: 'white', fontSize: '0.8rem', fontFamily: 'JetBrains Mono' }}>
          mishrasuyash713@gmail.com
        </div>

        <div className="flex items-center gap-5">
          {[
            { icon: Github, href: 'https://github.com/Suyash1933', title: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/suyash-mishra-9399ab362/', title: 'LinkedIn' },
            { icon: Mail, href: 'mailto:mishrasuyash713@gmail.com', title: 'Email' },
          ].map(({ icon: Icon, href, title }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              title={title}
              style={{ color: 'white' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'purple')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
