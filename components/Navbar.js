'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['about', 'experience', 'projects', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30,30,42,0.8)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-lg tracking-tight">
          <span className="gradient-text">SM</span>
          <span className="text-muted ml-1" style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem' }}>
            
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              style={{ color: activeSection === item.href.slice(1) ? 'var(--text)' : undefined }}
            >
              {item.label}
            </a>
          ))}
          <a href="https://drive.google.com/file/d/1VBwv3-naX5JWu5w8jvb8BLodwfMKUQLX/view?usp=sharing" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-muted hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{ background: 'rgba(10,10,15,0.98)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted hover:text-white transition-colors text-sm py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="https://drive.google.com/file/d/1VBwv3-naX5JWu5w8jvb8BLodwfMKUQLX/view?usp=sharing" className="btn-primary" style={{ width: 'fit-content' }}>
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
