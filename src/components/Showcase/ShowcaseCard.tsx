'use client'

import { useState } from 'react'
import { ShowcaseItem } from '@/data/showcase'
import ShowcaseOverlay from './ShowcaseOverlay'

type Props = {
  item: ShowcaseItem
  onHover: (hovered: boolean) => void
}

export default function ShowcaseCard({ item, onHover }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHover(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onHover(false)
  }

  return (
    <>
      <div
        className="showcase-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          flexShrink: 0,
          cursor: 'pointer',
          border: isHovered
            ? '1px solid rgba(111, 60, 255, 0.6)'
            : '1px solid rgba(30, 30, 30, 0.8)',
          transform: isHovered ? 'scale(1.06)' : 'scale(1)',
          transition:
            'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), border 0.4s ease, box-shadow 0.4s ease',
          boxShadow: isHovered
            ? '0 0 50px rgba(111, 60, 255, 0.3), 0 0 100px rgba(111, 60, 255, 0.1)'
            : '0 4px 24px rgba(0,0,0,0.4)',
          background: '#0d0d0d',
        }}
      >
        {/* Image / Placeholder */}
        <div
          style={{
            width: '100%',
            height: '100%',
            background: `linear-gradient(135deg,
              hsl(${(item.title.charCodeAt(0) * 7) % 360}, 40%, 12%) 0%,
              hsl(${(item.title.charCodeAt(2) * 13) % 360}, 50%, 8%) 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Swap this with <Image /> when you have real images */}
          <span style={{ opacity: 0.2, fontSize: '2.5rem' }}>🎨</span>
        </div>

        {/* Overlay component */}
        <ShowcaseOverlay
          title={item.title}
          category={item.category}
          year={item.year}
          isVisible={isHovered}
        />

        {/* Purple glow layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '24px',
            background:
              'radial-gradient(circle at center, rgba(111,60,255,0.07) 0%, transparent 70%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      </div>

      <style jsx>{`
        .showcase-card {
          width: 420px;
          height: 260px;
        }
        @media (max-width: 1024px) {
          .showcase-card {
            width: 340px;
            height: 210px;
          }
        }
        @media (max-width: 640px) {
          .showcase-card {
            width: 260px;
            height: 165px;
          }
        }
        @media (max-width: 380px) {
          .showcase-card {
            width: 220px;
            height: 140px;
          }
        }
      `}</style>
    </>
  )
}