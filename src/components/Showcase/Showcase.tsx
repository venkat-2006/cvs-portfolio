// "use client";

// import ShowcaseTitle from './ShowcaseTitle'
// import ShowcaseRow from './ShowcaseRow'
// import { showcaseRows } from '@/data/showcase'

// const rowSpeeds = [0.55, 0.4, 0.65, 0.45, 0.5]

// export default function Showcase() {
//   return (
//     <section
//       id="work"
//       style={{
//         padding: 'clamp(60px, 10vw, 120px) 0',
//         position: 'relative',
//         overflow: 'hidden',
//         background: '#050505',
//       }}
//     >
//       {/* Background glow blobs */}
//       <div
//         style={{
//           position: 'absolute',
//           top: '-10%',
//           left: '-5%',
//           width: '500px',
//           height: '500px',
//           background:
//             'radial-gradient(circle, rgba(111, 60, 255, 0.12) 0%, transparent 70%)',
//           pointerEvents: 'none',
//           zIndex: 0,
//         }}
//       />

//       <div
//         style={{
//           position: 'absolute',
//           bottom: '-10%',
//           right: '-5%',
//           width: '600px',
//           height: '600px',
//           background:
//             'radial-gradient(circle, rgba(60, 100, 255, 0.1) 0%, transparent 70%)',
//           pointerEvents: 'none',
//           zIndex: 0,
//         }}
//       />

//       {/* Noise */}
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
//           pointerEvents: 'none',
//           zIndex: 0,
//           opacity: 0.4,
//         }}
//       />

//       <div style={{ position: 'relative', zIndex: 1 }}>
//         <ShowcaseTitle />

//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '20px',
//           }}
//         >
//           {showcaseRows.map((row, i) => (
//             <ShowcaseRow
//               key={i}
//               items={row}
//               direction={i % 2 === 0 ? 'right' : 'left'}
//               baseSpeed={rowSpeeds[i]}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import ShowcaseTitle from './ShowcaseTitle'
import ShowcaseRow from './ShowcaseRow'
import { showcaseRows } from '@/data/showcase'

const rowSpeeds = [1.6, 1.2, 1.9]

export default function Showcase() {
  return (
    <section
      id="work"
      style={{
        padding: 'clamp(40px, 6vw, 80px) 0',
        position: 'relative',
        overflow: 'hidden',
        background: '#050505',
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(111, 60, 255, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(60, 100, 255, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.4,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <ShowcaseTitle />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {showcaseRows.map((row, i) => (
            <ShowcaseRow
              key={i}
              items={row}
              direction={i % 2 === 0 ? 'right' : 'left'}
              baseSpeed={rowSpeeds[i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}