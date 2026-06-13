// 'use client'

// import { useState } from 'react'
// import { ShowcaseItem } from '@/data/showcase'
// import ShowcaseOverlay from './ShowcaseOverlay'

// type Props = {
//   item: ShowcaseItem
//   onHover: (hovered: boolean) => void
// }

// export default function ShowcaseCard({ item, onHover }: Props) {
//   const [isHovered, setIsHovered] = useState(false)

//   const handleMouseEnter = () => {
//     setIsHovered(true)
//     onHover(true)
//   }

//   const handleMouseLeave = () => {
//     setIsHovered(false)
//     onHover(false)
//   }

//   return (
//     <>
//       <div
//         className="showcase-card"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           position: 'relative',
//           borderRadius: '24px',
//           overflow: 'hidden',
//           flexShrink: 0,
//           cursor: 'pointer',
//           border: isHovered
//             ? '1px solid rgba(111, 60, 255, 0.6)'
//             : '1px solid rgba(30, 30, 30, 0.8)',
//           transform: isHovered ? 'scale(1.06)' : 'scale(1)',
//           transition:
//             'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), border 0.4s ease, box-shadow 0.4s ease',
//           boxShadow: isHovered
//             ? '0 0 50px rgba(111, 60, 255, 0.3), 0 0 100px rgba(111, 60, 255, 0.1)'
//             : '0 4px 24px rgba(0,0,0,0.4)',
//           background: '#0d0d0d',
//         }}
//       >
//         {/* Image / Placeholder */}
//         <div
//           style={{
//             width: '100%',
//             height: '100%',
//             background: `linear-gradient(135deg,
//               hsl(${(item.title.charCodeAt(0) * 7) % 360}, 40%, 12%) 0%,
//               hsl(${(item.title.charCodeAt(2) * 13) % 360}, 50%, 8%) 100%)`,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             transform: isHovered ? 'scale(1.08)' : 'scale(1)',
//             transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
//           }}
//         >
//           {/* Swap this with <Image /> when you have real images */}
//           <span style={{ opacity: 0.2, fontSize: '2.5rem' }}>🎨</span>
//         </div>

//         {/* Overlay component */}
//         <ShowcaseOverlay
//           title={item.title}
//           category={item.category}
//           year={item.year}
//           isVisible={isHovered}
//         />

//         {/* Purple glow layer */}
//         <div
//           style={{
//             position: 'absolute',
//             inset: 0,
//             borderRadius: '24px',
//             background:
//               'radial-gradient(circle at center, rgba(111,60,255,0.07) 0%, transparent 70%)',
//             opacity: isHovered ? 1 : 0,
//             transition: 'opacity 0.4s ease',
//             pointerEvents: 'none',
//             zIndex: 1,
//           }}
//         />
//       </div>

//       <style jsx>{`
//         .showcase-card {
//           width: 420px;
//           height: 260px;
//         }
//         @media (max-width: 1024px) {
//           .showcase-card {
//             width: 340px;
//             height: 210px;
//           }
//         }
//         @media (max-width: 640px) {
//           .showcase-card {
//             width: 260px;
//             height: 165px;
//           }
//         }
//         @media (max-width: 380px) {
//           .showcase-card {
//             width: 220px;
//             height: 140px;
//           }
//         }
//       `}</style>
//     </>
//   )
// }
'use client'

import { useState } from 'react'
import { ShowcaseItem } from '@/data/showcase'
import Image from 'next/image'

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
          borderRadius: '20px',
          overflow: 'hidden',
          flexShrink: 0,
          cursor: 'pointer',
          border: isHovered
            ? '1px solid rgba(111, 60, 255, 0.7)'
            : '1px solid rgba(255,255,255,0.06)',
          transform: isHovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), border 0.4s ease, box-shadow 0.4s ease',
          boxShadow: isHovered
            ? '0 0 40px rgba(111, 60, 255, 0.35), 0 0 80px rgba(111, 60, 255, 0.15)'
            : '0 4px 24px rgba(0,0,0,0.5)',
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
          <span style={{ opacity: 0.15, fontSize: '2rem' }}>🎨</span>
        </div>

        {/* Hover overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isHovered
              ? 'linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.5) 50%, rgba(111,60,255,0.08) 100%)'
              : 'linear-gradient(to top, rgba(5,5,5,0.4) 0%, transparent 60%)',
            transition: 'background 0.4s ease',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Content on hover */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          {/* Category pill */}
          <span
            style={{
              display: 'inline-block',
              width: 'fit-content',
              background: 'rgba(111, 60, 255, 0.25)',
              border: '1px solid rgba(111, 60, 255, 0.5)',
              color: '#bf9fff',
              fontSize: '0.55rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '3px 10px',
              borderRadius: '100px',
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: '6px',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.35s ease 0.05s, transform 0.4s cubic-bezier(0.16,1,0.3,1) 0.05s',
            }}
          >
            {item.category}
          </span>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
              color: '#ffffff',
              letterSpacing: '0.06em',
              lineHeight: 1.1,
              margin: 0,
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.35s ease 0.1s, transform 0.4s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}
          >
            {item.title}
          </h3>

          {/* Year */}
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.6rem',
              color: 'rgba(160,160,160,0.7)',
              letterSpacing: '0.12em',
              marginTop: '4px',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.35s ease 0.15s, transform 0.4s cubic-bezier(0.16,1,0.3,1) 0.15s',
            }}
          >
            {item.year}
          </span>
        </div>

        {/* Purple glow layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '20px',
            background: 'radial-gradient(circle at 50% 0%, rgba(111,60,255,0.12) 0%, transparent 70%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      </div>

      <style jsx>{`
        .showcase-card {
          width: 300px;
          height: 185px;
        }
        @media (max-width: 1024px) {
          .showcase-card {
            width: 260px;
            height: 160px;
          }
        }
        @media (max-width: 640px) {
          .showcase-card {
            width: 200px;
            height: 125px;
          }
        }
        @media (max-width: 380px) {
          .showcase-card {
            width: 170px;
            height: 106px;
          }
        }
      `}</style>
    </>
  )
}