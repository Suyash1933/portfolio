'use client'
import { useState } from 'react'

export default function Dock({ apps, openWindows, activeWindow, onOpen }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999998,
        display: 'flex',
        alignItems: 'flex-end',
        gap: 6,
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: 20,
        padding: '8px 12px 6px',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow:
          '0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      {apps.map((app) => (
        <DockItem
          key={app.id}
          icon={app.icon}
          color={app.color}
          label={app.title}
          isOpen={!!openWindows[app.id]}
          isActive={activeWindow === app.id}
          onClick={() => onOpen(app.id)}
        />
      ))}
    </div>
  )
}

function DockItem({ icon: Icon, color, label, isOpen, isActive, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        position: 'relative',
      }}
    >
      {/* Tooltip */}
      {hovered && (
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
          width: 50,
          height: 50,
          borderRadius: 13,
          background: hovered
            ? 'rgba(255,255,255,0.12)'
            : isActive
            ? 'rgba(255,255,255,0.08)'
            : 'rgba(255,255,255,0.04)',
          border: isActive
            ? `1px solid ${color}50`
            : '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transform: hovered
            ? 'translateY(-8px) scale(1.15)'
            : 'translateY(0) scale(1)',
          transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
          boxShadow: hovered ? `0 10px 28px ${color}25` : 'none',
          outline: 'none',
        }}
      >
        <Icon size={22} style={{ color }} />
      </button>

      {/* Active indicator */}
      <div
        style={{
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: isOpen ? color : 'transparent',
          boxShadow: isOpen ? `0 0 6px ${color}60` : 'none',
          transition: 'all 0.3s ease',
        }}
      />
    </div>
  )
}
