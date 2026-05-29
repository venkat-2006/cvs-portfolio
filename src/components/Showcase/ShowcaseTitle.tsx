export default function ShowcaseTitle() {
  return (
    <div
      style={{
        padding: '0 clamp(20px, 5vw, 80px)',
        marginBottom: '48px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '32px',
            height: '1px',
            background: '#6f3cff',
          }}
        />
        <span
          style={{
            color: '#6f3cff',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
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
          }}
        >
          SELECTED
          <br />
          <span style={{ color: '#6f3cff' }}>WORKS</span>
        </h2>

        <p
          style={{
            color: '#a0a0a0',
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
            maxWidth: '320px',
            lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            paddingBottom: '8px',
          }}
        >
          A curated collection of brand identities,
          motion work, and visual campaigns crafted
          with obsession.
        </p>
      </div>
    </div>
  )
}