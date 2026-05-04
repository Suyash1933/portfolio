'use client'
import { useState, useCallback } from 'react'
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
  const [openWindows, setOpenWindows] = useState({ about: true })
  const [activeWindow, setActiveWindow] = useState('about')
  const [zIndices, setZIndices] = useState({ about: 10 })
  const [zCounter, setZCounter] = useState(11)

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
        {/* ===== LAPTOP FRAME ===== */}
        <div
          style={{
            width: 'calc(100% - 16px)',
            height: 'calc(100% - 16px)',
            borderRadius: 22,
            overflow: 'hidden',
            background: '#0c0c0c',
            border: '3px solid #585894',
            display: 'flex',
            flexDirection: 'column',
            boxShadow:
              '0 0 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.04)',
          }}
        >
          {/* TOP BEZEL — camera notch */}
          <div
            style={{
              height: 34,
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
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#1a1a24',
                border: '1.5px solid #2a2a38',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.6)',
              }}
            />
          </div>

          {/* SCREEN — wallpaper + all OS content */}
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
              transition: 'filter 0.3s ease',
            }}
          >
            {/* Menu bar */}
            <MenuBar />

            {/* Desktop icon — switch to plain view */}
            <button
              onClick={onSwitchView}
              style={{
                position: 'absolute',
                top: 48,
                left: 20,
                zIndex: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 7,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#e8e8f0',
                padding: 14,
                borderRadius: 14,
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'none')
              }
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                }}
              >
                <Monitor size={24} style={{ color: '#905895' }} />
              </div>
              <span
                style={{
                  fontSize: '0.82rem',
                  color: '#aeaec7',
                  whiteSpace: 'nowrap',
                  fontWeight: 600,
                  textShadow: '0 1px 6px rgba(0,0,0,0.7)',
                }}
              >
                Plain View
              </span>
            </button>

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

            {/* Dock */}
            <Dock
              apps={APP_CONFIG}
              openWindows={openWindows}
              activeWindow={activeWindow}
              onOpen={openWindow}
            />
          </div>

          {/* BOTTOM BEZEL — name */}
          <div
            style={{
              height: 30,
              background: '#0c0c0c',
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
        </div>
    </div>
  )
}
