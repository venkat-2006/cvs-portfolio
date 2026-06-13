export default function ShowcaseTitle() {
  return (
    <div
      style={{
        padding: '0 clamp(20px, 5vw, 80px)',
        marginBottom: '48px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '40px',
            height: '1px',
            background: 'linear-gradient(to right, #6f3cff, transparent)',
          }}
        />
        <span
          style={{
            color: '#6f3cff',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            background: 'rgba(111, 60, 255, 0.1)',
            border: '1px solid rgba(111, 60, 255, 0.25)',
            padding: '4px 12px',
            borderRadius: '100px',
          }}
        >
          Portfolio
        </span>
      </div>

      {/* Main heading + subtext row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            color: '#ffffff',
            letterSpacing: '0.02em',
            lineHeight: 0.9,
            margin: 0,
          }}
        >
          SELECTED
          <br />
          <span
            style={{
              color: 'transparent',
              WebkitTextStroke: '1px #6f3cff',
              textShadow: '0 0 40px rgba(111,60,255,0.4)',
            }}
          >
            WORKS
          </span>
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            paddingBottom: '8px',
            maxWidth: '320px',
          }}
        >
          <p
            style={{
              color: '#a0a0a0',
              fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
              lineHeight: 1.8,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              margin: 0,
              borderLeft: '2px solid rgba(111,60,255,0.4)',
              paddingLeft: '16px',
            }}
          >
            A curated collection of brand identities,
            motion work, and visual campaigns crafted
            with obsession.
          </p>

          <div style={{ display: 'flex', gap: '24px' }}>
            {[['500+', 'Projects'], ['40+', 'Clients'], ['2+', 'Years']].map(([num, label]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.4rem',
                  color: '#ffffff',
                  letterSpacing: '0.05em',
                  lineHeight: 1,
                }}>
                  {num}
                </span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.65rem',
                  color: '#666',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}