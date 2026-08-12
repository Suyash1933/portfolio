'use client'
import { useState, useEffect, useCallback } from 'react'
import { Monitor } from 'lucide-react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Desktop from '../components/os/Desktop'

export default function Home() {
  const [view, setView] = useState('os')
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 2200)
    const t2 = setTimeout(() => setLoading(false), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (loading) {
    return (
      <div className={`loader-screen ${fadeOut ? 'fade-out' : ''}`}>
        <div className="loader-logo">
          <div className="loader-ring" />
          <div className="loader-ring" />
          <div className="loader-ring" />
          <div className="loader-diamond" />
          <div className="loader-dot" />
          <div className="loader-bracket" />
          <div className="loader-bracket" />
          <div className="loader-bracket" />
          <div className="loader-bracket" />
        </div>
        <div className="loader-name">Suyash Mishra</div>
        <div className="loader-bar-track">
          <div className="loader-bar-fill" />
        </div>
      </div>
    )
  }

  if (view === 'os') {
    return <Desktop onSwitchView={() => setView('plain')} />
  }

  return (
    <main className="noise grid-bg">
      {/* Floating toggle to switch to OS view */}
      <div
        style={{
          position: 'fixed',
          bottom: 58,
          right: 24,
          zIndex: 99999,
        }}
      >
        {/* Ping ring */}
        <div
          style={{
            position: 'absolute',
            inset: -4,
            borderRadius: 16,
            border: '2px solid rgba(124,109,250,0.6)',
            animation: 'os-ping 2s cubic-bezier(0,0,0.2,1) infinite',
            pointerEvents: 'none',
          }}
        />
        <button
          onClick={() => setView('os')}
          className="os-view-btn"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 24px',
            borderRadius: 14,
            background: 'linear-gradient(135deg, #7c6dfa 0%, #a855f7 50%, #fa6d8f 100%)',
            backgroundSize: '200% 200%',
            animation: 'os-gradient 3s ease infinite',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
            boxShadow: '0 0 20px rgba(124,109,250,0.4), 0 0 60px rgba(124,109,250,0.15), 0 4px 20px rgba(0,0,0,0.3)',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
            e.currentTarget.style.boxShadow = '0 0 30px rgba(124,109,250,0.6), 0 0 80px rgba(124,109,250,0.25), 0 8px 30px rgba(0,0,0,0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(124,109,250,0.4), 0 0 60px rgba(124,109,250,0.15), 0 4px 20px rgba(0,0,0,0.3)'
          }}
        >
          {/* Shimmer overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
              backgroundSize: '200% 100%',
              animation: 'os-shimmer 2.5s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />
          <Monitor size={19} style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.4))' }} />
          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Try OS View</span>
          <span style={{ fontSize: '1.7rem', lineHeight: 1 }}>→</span>
        </button>
      </div>

      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
