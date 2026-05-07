'use client'
import { useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, ArrowDown, Code2 } from 'lucide-react'

const TECH_MARQUEE = [
  'React.js', 'Next.js', 'Node.js', 'TypeScript', 'Java', 'Python',
  'PostgreSQL', 'MongoDB', 'WebSockets', 'REST APIs', 'Machine Learning',
  'Express.js', 'Tailwind CSS', 'Git', 'Docker', 'Algorithms',
  'React.js', 'Next.js', 'Node.js', 'TypeScript', 'Java', 'Python',
  'PostgreSQL', 'MongoDB', 'WebSockets', 'REST APIs', 'Machine Learning',
  'Express.js', 'Tailwind CSS', 'Git', 'Docker', 'Algorithms',
]

export default function Hero() {
  const blobRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current) return
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 30
      const y = (clientY / window.innerHeight - 0.5) * 30
      blobRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg noise"
      style={{ paddingTop: '80px' }}
    >
      {/* Ambient blobs */}
      <div
        ref={blobRef}
        className="absolute top-1/4 right-1/4 w-96 h-96 blob transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(124,109,250,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-72 h-72"
        style={{
          background: 'radial-gradient(circle, rgba(250,109,143,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left — text */}
          <div style={{ animation: 'slideUp 0.8s ease forwards' }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="tag">Available for opportunities</span>
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            <h1
              className="font-display font-extrabold leading-none mb-4"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', letterSpacing: '-0.02em' }}
            >
              Hi, I'm{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #7c6dfa 0%, #fa6d8f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Suyash
              </span>
              <br />
              Mishra
            </h1>

            <div className="flex items-center gap-2 mb-5">
              <Code2 size={16} className="text-accent" style={{ color: 'var(--accent)' }} />
              <p
                className="font-mono"
                style={{ color: 'var(--accent)', fontSize: '0.9rem', fontFamily: 'JetBrains Mono' }}
              >
                Software Developer &amp; AI Enthusiast
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-8" style={{ fontSize: '1.05rem', maxWidth: '480px' }}>
              B.Tech IT student at IIIT Allahabad, building scalable full-stack systems, AI-powered tools,
              and real-time applications. Passionate about clean architecture and impactful software.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#projects" className="btn-primary">
                View My Work
                <ArrowDown size={16} />
              </a>
              <a href="#contact" className="btn-ghost">
                Let's Talk
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5">
              <a
                href="https://linkedin.com/in/suyash-mishra"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                title="LinkedIn"
              >
                {/* <Linkedin size={20} /> */}
              </a>
              <a
                href="https://github.com/Suyash-1933"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                title="GitHub"
              >
                {/* <Github size={20} /> */}
              </a>
              <a
                href="mailto:mishrasuyash713@gmail.com"
                style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                title="Email"
              >
                {/* <Mail size={20} /> */}
              </a>
              <div style={{ width: '1px', height: '20px', background: 'var(--border)' }} />
            </div>
          </div>

          {/* Right — floating card */}
          <div
            className="hidden md:flex flex-col gap-4 items-end"
            style={{ animation: 'slideUp 1s ease 0.2s forwards', opacity: 0 }}
          >
            {/* Profile card */}
            <div
              className="card-hover animate-float"
              style={{
                background: 'var(--card)',
                borderRadius: '20px',
                padding: '32px',
                width: '320px',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #7c6dfa, #fa6d8f)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Syne',
                    fontWeight: 800,
                    fontSize: '1.5rem',
                    color: 'white',
                    flexShrink: 0,
                  }}
                >
                  SM
                </div>
                <div>
                  <p className="font-display font-bold text-sm">Suyash Mishra</p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>IIIT Prayagraj</p>
                </div>
              </div>

              <div className="glow-line mb-5" />

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Location', value: 'Prayagraj, UP 🇮🇳' },
                  { label: 'Degree', value: 'B.Tech IT, 2026' },
                  { label: 'CGPA', value: '8.10 / 10.0' },
                  { label: 'Status', value: 'Open to Work' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center">
                    <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{label}</span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>
                      {value === 'Open to Work' ? (
                        <span style={{ color: 'var(--accent-3)' }}>● {value}</span>
                      ) : value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-3" style={{ width: '320px' }}>
              {[
                { label: 'Internships', value: '3' },
                { label: 'Live Projects', value: '2+' },
                { label: 'Users Onboarded', value: '140+' },
                { label: 'Coding Profiles', value: '3' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '16px',
                    textAlign: 'center',
                  }}
                >
                  <p
                    className="font-display font-extrabold"
                    style={{
                      fontSize: '1.6rem',
                      background: 'linear-gradient(135deg, #7c6dfa, #fa6d8f)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {value}
                  </p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.72rem', marginTop: '2px' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden py-3"
        style={{ borderTop: '1px solid var(--border)', background: 'rgba(17,17,24,0.6)' }}
      >
        <div className="marquee-track">
          {TECH_MARQUEE.map((tech, i) => (
            <span
              key={i}
              style={{
                whiteSpace: 'nowrap',
                marginRight: '32px',
                color: i % 3 === 0 ? 'var(--accent)' : i % 3 === 1 ? 'var(--accent-2)' : 'var(--accent-3)',
                fontFamily: 'JetBrains Mono',
                fontSize: '0.75rem',
                opacity: 0.8,
              }}
            >
              {tech} ·
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
