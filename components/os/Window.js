'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { ArrowLeft } from 'lucide-react'

export default function Window({
  title,
  icon: Icon,
  color = '#7c6dfa',
  isActive,
  onClose,
  onFocus,
  zIndex,
  defaultPos,
  defaultSize,
  children,
}) {
  const [pos, setPos] = useState(defaultPos)
  const [maximized, setMaximized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dragRef = useRef({ active: false, ox: 0, oy: 0 })
  const windowRef = useRef(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleDragStart = useCallback(
    (e) => {
      if (maximized || isMobile || e.target.closest('.win-btn')) return
      onFocus?.()
      dragRef.current = { active: true, ox: e.clientX - pos.x, oy: e.clientY - pos.y }

      const onMove = (ev) => {
        if (!dragRef.current.active) return
        const parent = windowRef.current?.parentElement
        const maxX = parent ? parent.clientWidth - 100 : 9999
        const maxY = parent ? parent.clientHeight - 50 : 9999
        setPos({
          x: Math.max(-200, Math.min(ev.clientX - dragRef.current.ox, maxX)),
          y: Math.max(28, Math.min(ev.clientY - dragRef.current.oy, maxY)),
        })
      }
      const onUp = () => {
        dragRef.current.active = false
        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseup', onUp)
      }
      document.addEventListener('mousemove', onMove)
      document.addEventListener('mouseup', onUp)
    },
    [pos, maximized, isMobile, onFocus]
  )

  const full = isMobile || maximized

  const trafficLights = [
    { bg: '#ff5f57', hoverBg: '#ff3b30', action: onClose },
    { bg: '#ffbd2e', hoverBg: '#ff9500', action: () => onClose?.() },
    { bg: '#28c840', hoverBg: '#34c759', action: () => setMaximized((m) => !m) },
  ]

  return (
    <div
      ref={windowRef}
      onMouseDown={() => onFocus?.()}
      style={{
        position: 'absolute',
        left: full ? 0 : pos.x,
        top: full ? 28 : pos.y,
        width: full ? '100%' : defaultSize.w,
        height: full ? (isMobile ? 'calc(100% - 28px - 58px)' : 'calc(100% - 28px - 76px)') : defaultSize.h,
        zIndex,
        borderRadius: full ? 0 : 12,
        background: '#111119',
        overflow: 'hidden',
        border: full
          ? 'none'
          : isActive
          ? '1px solid rgba(124,109,250,0.35)'
          : '1px solid rgba(255,255,255,0.06)',
        boxShadow: full
          ? 'none'
          : isActive
          ? '0 25px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,109,250,0.08)'
          : '0 10px 40px rgba(0,0,0,0.35)',
        display: 'flex',
        flexDirection: 'column',
        transition:
          'left 0.3s ease, top 0.3s ease, width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, box-shadow 0.25s ease',
      }}
    >
      {/* Title bar */}
      <div
        onMouseDown={handleDragStart}
        style={{
          height: isMobile ? 38 : 42,
          background: isActive ? 'rgba(26,26,44,0.95)' : 'rgba(18,18,28,0.95)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          padding: isMobile ? '0 10px' : '0 14px',
          cursor: full ? 'default' : 'grab',
          userSelect: 'none',
          flexShrink: 0,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {isMobile ? (
          /* Mobile: back button + title */
          <>
            <button
              className="win-btn"
              onClick={(e) => {
                e.stopPropagation()
                onClose()
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: color,
                fontSize: '0.76rem',
                fontFamily: "'DM Sans', sans-serif",
                padding: '4px 8px',
                borderRadius: 6,
              }}
            >
              <ArrowLeft size={16} />
            </button>
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
              }}
            >
              {Icon && <Icon size={13} style={{ color, opacity: 0.8 }} />}
              <span
                style={{
                  fontSize: '0.78rem',
                  color: '#e8e8f0',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                }}
              >
                {title}
              </span>
            </div>
            <div style={{ width: 40 }} />
          </>
        ) : (
          /* Desktop: traffic lights + title */
          <>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {trafficLights.map((btn, i) => (
                <button
                  key={i}
                  className="win-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    btn.action()
                  }}
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: '50%',
                    background: isActive ? btn.bg : 'rgba(255,255,255,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.15s, background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.25)'
                    e.target.style.background = btn.hoverBg
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)'
                    e.target.style.background = isActive
                      ? btn.bg
                      : 'rgba(255,255,255,0.15)'
                  }}
                />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 7,
                marginRight: 54,
              }}
            >
              {Icon && <Icon size={13} style={{ color, opacity: 0.8 }} />}
              <span
                style={{
                  fontSize: '0.76rem',
                  color: isActive ? '#e8e8f0' : '#555566',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                }}
              >
                {title}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div
        className="os-window-content"
        style={{ flex: 1, overflow: 'auto', background: '#0e0e18' }}
      >
        {children}
      </div>
    </div>
  )
}
