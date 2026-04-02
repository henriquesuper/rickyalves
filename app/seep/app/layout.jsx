'use client';

export default function MobileAppLayout({ children }) {
  return (
    <div
      className="mx-auto relative"
      style={{
        maxWidth: '430px',
        minHeight: '100vh',
        backgroundColor: 'var(--seep-warm-bg)',
        boxShadow: '0 0 40px rgba(0,0,0,0.1)',
      }}
    >
      {children}
    </div>
  );
}
