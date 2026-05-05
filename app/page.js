'use client'
import { useState } from 'react'
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

  if (view === 'os') {
    return <Desktop onSwitchView={() => setView('plain')} />
  }

  return (
    <main className="noise grid-bg">
      {/* Floating toggle to switch to OS view */}
      <button
        onClick={() => setView('os')}
        style={{
          position: 'fixed',
          bottom: 58,
          right: 24,
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 20px',
          borderRadius: 12,
          background: 'rgba(17,17,24,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(156, 156, 159, 0.25)',
          color: '#95959b',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.75rem',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(124,109,250,0.5)'
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(124,109,250,0.2)'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(124,109,250,0.25)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <Monitor size={15} />
        OS View
      </button>

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
