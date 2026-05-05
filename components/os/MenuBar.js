'use client'
import { useState, useEffect, useRef } from 'react'
import { Battery, BatteryCharging, Sun, RotateCw } from 'lucide-react'

export default function MenuBar() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const [showBatteryMenu, setShowBatteryMenu] = useState(false)
  const [brightness, setBrightness] = useState(100)
  const [batteryLevel, setBatteryLevel] = useState(100)
  const [isCharging, setIsCharging] = useState(false)
  const [batterySupported, setBatterySupported] = useState(true)
  const menuRef = useRef(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      )
      setDate(
        now.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        })
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!navigator.getBattery) {
      setBatterySupported(false)
      return
    }
    let battery = null
    const updateBattery = (b) => {
      setBatteryLevel(Math.round(b.level * 100))
      setIsCharging(b.charging)
    }
    navigator.getBattery().then((b) => {
      battery = b
      updateBattery(b)
      b.addEventListener('levelchange', () => updateBattery(b))
      b.addEventListener('chargingchange', () => updateBattery(b))
    }).catch(() => setBatterySupported(false))

    return () => {
      if (battery) {
        battery.removeEventListener('levelchange', () => {})
        battery.removeEventListener('chargingchange', () => {})
      }
    }
  }, [])

  useEffect(() => {
    const screen = document.querySelector('[data-os-screen]')
    if (screen) screen.style.filter = `brightness(${brightness / 100})`
  }, [brightness])

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setShowBatteryMenu(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const BatteryIcon = isCharging ? BatteryCharging : Battery
  const batteryColor =
    batteryLevel <= 15 ? '#ff5f57' : batteryLevel <= 30 ? '#ffbd2e' : '#a0a0b8'

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 34,
        zIndex: 999999,
        background: 'rgba(16,16,24,0.82)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '0 10px' : '0 18px',
        borderBottom: '1px solid rgba(218, 193, 193, 0.06)',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'DM Sans', sans-serif",
        fontSize: isMobile ? '0.72rem' : '0.92rem',
        color: '#e8e8f0',
      }}
    >
      {/* Left: Apple icon */}
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 14, flex: 1 }}>
        <img
          src="/icon-apple.png"
          alt=""
          style={{
            width: 15,
            height: 15,
            objectFit: 'contain',
            flexShrink: 0,
            filter: 'brightness(0) invert(1)',
            opacity: 0.9,
          }}
          draggable={false}
        />
      </div>

      {/* Center: Date + Time */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          color: '#c8c8d8',
          fontWeight: 500,
          fontSize: isMobile ? '0.68rem' : undefined,
        }}
      >
        {!isMobile && <span>{date}</span>}
        <span style={{ color: '#e8e8f0' }}>{isMobile ? `${date} ${time}` : time}</span>
      </div>

      {/* Right: Battery */}
      <div
        ref={menuRef}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          position: 'relative',
        }}
      >
        <button
          onClick={() => setShowBatteryMenu((v) => !v)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            background: showBatteryMenu ? 'rgba(255,255,255,0.1)' : 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#d2d2de',
            padding: '2px 5px',
            borderRadius: 4,
            transition: 'background 0.15s',
            fontSize: isMobile ? '0.68rem' : '0.98rem',
          }}
          onMouseEnter={(e) => {
            if (!showBatteryMenu)
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
          }}
          onMouseLeave={(e) => {
            if (!showBatteryMenu) e.currentTarget.style.background = 'none'
          }}
        >
          <BatteryIcon size={isMobile ? 14 : 20} style={{ color: batteryColor }} />
          <span style={{ fontWeight: 500, color: batteryColor }}>
            {batteryLevel}%
          </span>
        </button>

        {/* BATTERY DROPDOWN */}
        {showBatteryMenu && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: 6,
              width: isMobile ? 'calc(100vw - 20px)' : 240,
              maxWidth: 280,
              background: 'rgba(240,240,248,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: 12,
              boxShadow: '0 10px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.08)',
              padding: '14px 16px',
              color: '#1a1a2e',
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
              zIndex: 9999999,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <BatteryIcon size={22} style={{ color: batteryLevel <= 15 ? '#ff3b30' : '#1a1a2e' }} />
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{batteryLevel}%</div>
                <div style={{ fontSize: '0.68rem', color: '#666', marginTop: 1 }}>
                  {isCharging ? 'Charging' : batterySupported ? 'Battery' : 'Battery N/A'}
                </div>
              </div>
              {isCharging && (
                <span style={{ marginLeft: 'auto', fontSize: '0.6rem', padding: '2px 7px', borderRadius: 100, background: '#34c75920', color: '#28a745', fontWeight: 600, border: '1px solid #34c75940' }}>
                  ⚡ Plugged In
                </span>
              )}
            </div>
            <div style={{ height: 6, background: '#d4d4dc', borderRadius: 3, overflow: 'hidden', marginBottom: 16 }}>
              <div style={{ height: '100%', width: `${batteryLevel}%`, borderRadius: 3, background: batteryLevel <= 15 ? '#ff3b30' : batteryLevel <= 30 ? '#ff9500' : isCharging ? '#34c759' : '#007AFF', transition: 'width 0.5s ease' }} />
            </div>
            <div style={{ height: 1, background: '#d4d4dc', marginBottom: 14 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Sun size={15} style={{ color: '#888', flexShrink: 0 }} />
              <input type="range" min="20" max="100" value={brightness} onChange={(e) => setBrightness(Number(e.target.value))} style={{ flex: 1, height: 4, appearance: 'none', WebkitAppearance: 'none', background: `linear-gradient(to right, #007AFF ${((brightness - 20) / 80) * 100}%, #d4d4dc ${((brightness - 20) / 80) * 100}%)`, borderRadius: 2, outline: 'none', cursor: 'pointer' }} />
              <Sun size={18} style={{ color: '#555', flexShrink: 0 }} />
            </div>
            <div style={{ height: 1, background: '#d4d4dc', marginBottom: 10 }} />
            <button onClick={() => { setShowBatteryMenu(false); window.location.reload() }} style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '8px 10px', borderRadius: 8, border: 'none', background: 'transparent', cursor: 'pointer', color: '#1a1a2e', fontSize: '0.82rem', fontFamily: 'inherit', fontWeight: 500, transition: 'background 0.15s' }} onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.06)')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
              <RotateCw size={14} style={{ color: '#555' }} />
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
