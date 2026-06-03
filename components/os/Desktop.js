'use client'
import { useState, useEffect, useCallback } from 'react'
import { User, Code2, Briefcase, Cpu, Mail, Monitor } from 'lucide-react'
import MenuBar from './MenuBar'
import Dock from './Dock'
import Window from './Window'
import AboutWindow from './windows/AboutWindow'
import ProjectsWindow from './windows/ProjectsWindow'
import ExperienceWindow from './windows/ExperienceWindow'
import SkillsWindow from './windows/SkillsWindow'
import ContactWindow from './windows/ContactWindow'

const APP_CONFIG = [
  {
    id: 'about',
    title: 'About Me',
    icon: User,
    color: '#7c6dfa',
    defaultPos: { x: 340, y: 70 },
    defaultSize: { w: 560, h: 520 },
    component: AboutWindow,
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: Code2,
    color: '#fa6d8f',
    defaultPos: { x: 180, y: 55 },
    defaultSize: { w: 740, h: 500 },
    component: ProjectsWindow,
  },
  {
    id: 'experience',
    title: 'Experience',
    icon: Briefcase,
    color: '#6dfabd',
    defaultPos: { x: 220, y: 65 },
    defaultSize: { w: 700, h: 490 },
    component: ExperienceWindow,
  },
  {
    id: 'skills',
    title: 'Skills & Tools',
    icon: Cpu,
    color: '#fad96d',
    defaultPos: { x: 260, y: 50 },
    defaultSize: { w: 660, h: 510 },
    component: SkillsWindow,
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: Mail,
    color: '#6db8fa',
    defaultPos: { x: 400, y: 80 },
    defaultSize: { w: 500, h: 460 },
    component: ContactWindow,
  },
]

export default function Desktop({ onSwitchView }) {
  const [openWindows, setOpenWindows] = useState({})
  const [activeWindow, setActiveWindow] = useState(null)
  const [zIndices, setZIndices] = useState({})
  const [zCounter, setZCounter] = useState(11)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const focusWindow = useCallback((id) => {
    setZCounter((prev) => {
      const next = prev + 1
      setZIndices((z) => ({ ...z, [id]: next }))
      return next
    })
    setActiveWindow(id)
  }, [])

  const openWindow = useCallback(
    (id) => {
      setOpenWindows((prev) => ({ ...prev, [id]: true }))
      focusWindow(id)
    },
    [focusWindow]
  )

  const closeWindow = useCallback(
    (id) => {
      setOpenWindows((prev) => ({ ...prev, [id]: false }))
      setActiveWindow((curr) => (curr === id ? null : curr))
    },
    []
  )

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* LAPTOP FRAME */}
      <div
        style={{
          width: isMobile ? '100%' : 'calc(100% - 16px)',
          height: isMobile ? '100%' : 'calc(100% - 16px)',
          borderRadius: isMobile ? 0 : 22,
          overflow: 'hidden',
          background: '#0c0c0c',
          border: isMobile ? 'none' : '3px solid #949496',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isMobile
            ? 'none'
            : '0 0 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      >
        {/* TOP BEZEL — hidden on mobile */}
        {!isMobile && (
          <div
            style={{
              height: 38,
              background: '#0c0c0c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              borderBottom: '1px solid #1a1a1a',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#111112',
                border: '1.5px solid #2e2e2e',
                boxShadow: 'inset 0 1px 3px rgba(50, 50, 50, 0.6)',
              }}
            />
          </div>
        )}

        {/* SCREEN */}
        <div
          data-os-screen
          style={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: "url('/wallpaper.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#0a0a18',
            imageRendering: 'auto',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Brightness overlay — dims without blurring the wallpaper */}
          <div
            data-os-brightness-overlay
            style={{
              position: 'absolute',
              inset: 0,
              background: '#000',
              opacity: 0,
              pointerEvents: 'none',
              zIndex: 1,
              transition: 'opacity 0.3s ease',
            }}
          />
          <MenuBar />

          {/* Desktop icon — switch to plain view */}
          {!isMobile && (
            <div
              style={{
                position: 'absolute',
                top: 48,
                left: 20,
                zIndex: 5,
              }}
            >
              {/* Ping ring */}
              <div
                style={{
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  border: '2px solid rgba(124,109,250,0.6)',
                  animation: 'os-ping 2s cubic-bezier(0,0,0.2,1) infinite',
                  pointerEvents: 'none',
                }}
              />
              <button
                onClick={onSwitchView}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#e8e8f0',
                  padding: 14,
                  borderRadius: 14,
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: 'linear-gradient(135deg, #7c6dfa 0%, #a855f7 50%, #fa6d8f 100%)',
                    backgroundSize: '200% 200%',
                    animation: 'os-gradient 3s ease infinite',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(124,109,250,0.5), 0 0 50px rgba(124,109,250,0.15), 0 4px 16px rgba(0,0,0,0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Shimmer */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)',
                      backgroundSize: '200% 100%',
                      animation: 'os-shimmer 2.5s ease-in-out infinite',
                      pointerEvents: 'none',
                    }}
                  />
                  <Monitor size={26} style={{ color: '#fff', filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.5))' }} />
                </div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#fff',
                    whiteSpace: 'nowrap',
                    fontWeight: 700,
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '0.03em',
                    textShadow: '0 0 12px rgba(124,109,250,0.8), 0 1px 6px rgba(0,0,0,0.7)',
                  }}
                >
                  Plain View
                </span>
              </button>
            </div>
          )}

          {/* Windows */}
          {APP_CONFIG.map((app) => {
            const Content = app.component
            return (
              openWindows[app.id] && (
                <Window
                  key={app.id}
                  title={app.title}
                  icon={app.icon}
                  color={app.color}
                  isActive={activeWindow === app.id}
                  onClose={() => closeWindow(app.id)}
                  onFocus={() => focusWindow(app.id)}
                  zIndex={zIndices[app.id] || 1}
                  defaultPos={app.defaultPos}
                  defaultSize={app.defaultSize}
                >
                  <Content />
                </Window>
              )
            )
          })}

          <Dock
            apps={APP_CONFIG}
            openWindows={openWindows}
            activeWindow={activeWindow}
            onOpen={openWindow}
            onSwitchView={isMobile ? onSwitchView : null}
          />
        </div>

        {/* BOTTOM BEZEL — hidden on mobile */}
        {!isMobile && (
          <div
            style={{
              height: 38,
              background: '#151414',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              borderTop: '1px solid #1a1a1a',
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.1rem',
                color: '#d3d3e5',
                letterSpacing: '0.12em',
                fontWeight: 300,
              }}
            >
              Suyash Mishra
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
