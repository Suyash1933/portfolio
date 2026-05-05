'use client'
import { useState, useEffect } from 'react'
import { Monitor } from 'lucide-react'

/* ── Custom macOS-style dock icons ── */
function ImageIcon({ size, src, bg }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.22, background: bg || 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center',  overflow: 'hidden' }}>
      <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} draggable={false} />
    </div>
  )
}

function TerminalIcon({ size }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.22, background: 'linear-gradient(145deg, #2d2d2d, #0d0d0d)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
      <svg viewBox="0 0 32 32" width={size * 0.55} height={size * 0.55}>
        <path d="M6 8 L14 16 L6 24" stroke="#4af626" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="24" x2="26" y2="24" stroke="#4af626" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function SettingsIcon({ size }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.22, background: 'linear-gradient(145deg, #636366, #48484a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 32 32" width={size * 0.6} height={size * 0.6}>
        <path
          d="M16 4 L18.5 6 L21.5 5.5 L22.5 8.5 L25.5 9.5 L25 12.5 L27.5 14.5 L26 17.5 L27.5 20 L25 22 L25.5 25 L22.5 26 L21 28.5 L18 27.5 L16 30 L14 27.5 L11 28.5 L9.5 26 L6.5 25 L7 22 L4.5 20 L6 17.5 L4.5 14.5 L7 12.5 L6.5 9.5 L9.5 8.5 L10.5 5.5 L13.5 6 Z"
          fill="rgba(255,255,255,0.2)"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1"
        />
        <circle cx="16" cy="16.5" r="5" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="16" cy="16.5" r="2" fill="rgba(255,255,255,0.6)" />
      </svg>
    </div>
  )
}

function WindowsContactIcon({ size }) {
  return <ImageIcon size={size} src="/icon-windows.png" />
}

function PlainViewIcon({ size }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.22, background: 'linear-gradient(145deg, #6e5494, #483d6b)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(110,84,148,0.3)' }}>
      <Monitor size={size * 0.5} style={{ color: 'rgba(255,255,255,0.85)' }} />
    </div>
  )
}

function LinuxIcon({ size }) {
  return <ImageIcon size={size} src="/icon-linux.png" />
}

function VSCodeRealIcon({ size }) {
  return <ImageIcon size={size} src="/icon-vscode.png" />
}

const DOCK_ICON_MAP = {
  about: LinuxIcon,
  projects: VSCodeRealIcon,
  experience: TerminalIcon,
  skills: SettingsIcon,
  contact: WindowsContactIcon,
}

export default function Dock({ apps, openWindows, activeWindow, onOpen, onSwitchView }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const iconSize = isMobile ? 40 : 50

  return (
    <div
      style={{
        position: 'absolute',
        bottom: isMobile ? 6 : 10,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999998,
        display: 'flex',
        alignItems: 'flex-end',
        gap: isMobile ? 4 : 8,
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: isMobile ? 16 : 22,
        padding: isMobile ? '6px 10px 5px' : '10px 14px 8px',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      {apps.map((app) => {
        const CustomIcon = DOCK_ICON_MAP[app.id]
        return (
          <DockItem
            key={app.id}
            label={app.title}
            color={app.color}
            isOpen={!!openWindows[app.id]}
            isActive={activeWindow === app.id}
            onClick={() => onOpen(app.id)}
            isMobile={isMobile}
          >
            {CustomIcon ? <CustomIcon size={iconSize} /> : null}
          </DockItem>
        )
      })}

      {/* Plain View button on mobile */}
      {isMobile && onSwitchView && (
        <>
          <div style={{ width: 1, height: isMobile ? 30 : 40, background: 'rgba(255,255,255,0.1)', alignSelf: 'center' }} />
          <DockItem
            label="Plain View"
            color="#905895"
            isOpen={false}
            isActive={false}
            onClick={onSwitchView}
            isMobile={isMobile}
          >
            <PlainViewIcon size={iconSize} />
          </DockItem>
        </>
      )}
    </div>
  )
}

function DockItem({ children, label, color, isOpen, isActive, onClick, isMobile }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: isMobile ? 3 : 5,
        position: 'relative',
      }}
    >
      {/* Tooltip — desktop only */}
      {hovered && !isMobile && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            marginBottom: 10,
            background: 'rgba(20,20,30,0.92)',
            backdropFilter: 'blur(10px)',
            color: '#e8e8f0',
            padding: '5px 12px',
            borderRadius: 6,
            fontSize: '0.68rem',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            whiteSpace: 'nowrap',
            border: '1px solid rgba(255,255,255,0.08)',
            pointerEvents: 'none',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          }}
        >
          {label}
        </div>
      )}

      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          outline: 'none',
          transform: hovered && !isMobile
            ? 'translateY(-10px) scale(1.18)'
            : 'translateY(0) scale(1)',
          transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
          filter: hovered && !isMobile ? 'brightness(1.15)' : 'brightness(1)',
        }}
      >
        {children}
      </button>

      {/* Active indicator */}
      <div
        style={{
          width: isMobile ? 4 : 5,
          height: isMobile ? 4 : 5,
          borderRadius: '50%',
          background: isOpen ? '#fff' : 'transparent',
          boxShadow: isOpen ? '0 0 6px rgba(255,255,255,0.6)' : 'none',
          transition: 'all 0.3s ease',
        }}
      />
    </div>
  )
}
