'use client'

type Props = {
  title: string
  category: string
  year: string
  isVisible: boolean
}

export default function ShowcaseOverlay({ title, category, year, isVisible }: Props) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '20px',
        gap: '6px',
        pointerEvents: 'none',
        zIndex: 2,
        // Bottom gradient
        background: isVisible
          ? 'linear-gradient(to top, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.6) 45%, rgba(5,5,5,0.1) 75%, transparent 100%)'
          : 'linear-gradient(to top, rgba(5,5,5,0.3) 0%, transparent 60%)',
        transition: 'background 0.4s ease',
      }}
    >
      {/* Year — top right corner */}
      <span
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          color: 'rgba(160,160,160,0.7)',
          fontSize: '0.65rem',
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: '0.1em',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-6px)',
          transition: 'opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s',
        }}
      >
        {year}
      </span>

      {/* Category badge */}
      <span
        style={{
          display: 'inline-block',
          width: 'fit-content',
          background: 'rgba(111, 60, 255, 0.2)',
          border: '1px solid rgba(111, 60, 255, 0.45)',
          color: '#bf9fff',
          fontSize: '0.58rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          padding: '3px 10px',
          borderRadius: '100px',
          fontFamily: "'DM Sans', sans-serif",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.35s ease 0.08s, transform 0.4s cubic-bezier(0.16,1,0.3,1) 0.08s',
        }}
      >
        {category}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(1rem, 2vw, 1.35rem)',
          color: '#ffffff',
          letterSpacing: '0.05em',
          lineHeight: 1.1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.35s ease 0.13s, transform 0.4s cubic-bezier(0.16,1,0.3,1) 0.13s',
        }}
      >
        {title}
      </h3>

      {/* View Work row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.35s ease 0.18s, transform 0.4s cubic-bezier(0.16,1,0.3,1) 0.18s',
        }}
      >
        <span
          style={{
            color: '#6f3cff',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
          }}
        >
          View Work
        </span>
        <span
          style={{
            color: '#6f3cff',
            fontSize: '0.8rem',
            display: 'inline-block',
            transform: isVisible ? 'translateX(3px)' : 'translateX(0)',
            transition: 'transform 0.3s ease 0.2s',
          }}
        >
          →
        </span>
      </div>
    </div>
  )
}