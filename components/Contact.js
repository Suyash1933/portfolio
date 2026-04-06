'use client'
import { useEffect, useRef } from 'react'
import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mishrasuyash713@gmail.com',
    href: 'mailto:mishrasuyash713@gmail.com',
    color: '#7c6dfa',
    tag: 'Preferred contact',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/suyash-mishra',
    href: 'https://www.linkedin.com/in/suyash-mishra-9399ab362/',
    color: '#0a66c2',
    tag: 'Professional network',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Suyash1933',
    href: 'https://github.com/Suyash1933',
    color: '#fa6d8f',
    tag: 'Open source',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6266174671',
    href: 'tel:+916266174671',
    color: '#6dfabd',
    tag: 'Call / WhatsApp',
  },
]

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-28 relative" ref={sectionRef}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 70%, rgba(124,109,250,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="section-reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Send size={18} style={{ color: 'var(--accent)' }} />
            <span className="tag">Get In Touch</span>
          </div>
          <h2
            className="font-display font-extrabold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Contact Me
          </h2>
          <p className="text-muted mt-3" style={{ maxWidth: '520px', lineHeight: 1.7 }}>
            I'm currently open to new opportunities — whether it's a full-time role, internship, or an
            interesting project to collaborate on. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact links */}
          <div className="section-reveal flex flex-col gap-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon
              return (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="card-hover flex items-center gap-4 p-5 rounded-2xl"
                  style={{
                    background: 'var(--card)',
                    textDecoration: 'none',
                    color: 'var(--text)',
                    borderRadius: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: `${link.color}18`,
                      border: `1px solid ${link.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} style={{ color: link.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'var(--muted)', marginBottom: '3px' }}>
                      {link.label}
                    </p>
                    <p style={{ fontSize: '0.88rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {link.value}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono',
                      fontSize: '0.62rem',
                      padding: '2px 8px',
                      borderRadius: '100px',
                      background: `${link.color}10`,
                      color: link.color,
                      border: `1px solid ${link.color}25`,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                  >
                    {link.tag}
                  </span>
                </a>
              )
            })}
          </div>

          {/* Right side — Meeting Scheduler + coding profiles */}
          <div className="section-reveal flex flex-col gap-6" style={{ transitionDelay: '0.2s' }}>
            {/* Meeting Scheduler Card */}
            <div
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '24px',
                overflow: 'hidden',
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <div
                  className="font-display font-extrabold mb-2"
                  style={{ fontSize: '1.2rem', letterSpacing: '-0.02em' }}
                >
                  Schedule a Meeting
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  Let's discuss opportunities, projects, or collaborations. Pick a time that works best for you.
                </p>
              </div>
              <iframe
                src="https://calendly.com/mishrasuyash713/30min"
                width="100%"
                height="650"
                frameBorder="0"
                style={{
                  borderRadius: '12px',
                  marginTop: '12px',
                  background: 'var(--surface)',
                }}
              />
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
