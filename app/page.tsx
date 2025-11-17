export default function HomePage() {
  return (
    <main style={{
      minHeight: '100svh',
      display: 'grid',
      placeItems: 'center',
      padding: '2rem',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji'
    }}>
      <section style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '0.75rem' }}>Hi ??</h1>
        <p style={{ color: '#555', fontSize: '1.125rem' }}>
          Your app is live. Deployed via automated Next.js + Vercel setup.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <a href="https://vercel.com" target="_blank" rel="noreferrer" style={{
            background: 'black', color: 'white', padding: '0.75rem 1rem',
            borderRadius: 8, textDecoration: 'none'
          }}>Open Vercel</a>
        </div>
      </section>
    </main>
  );
}
