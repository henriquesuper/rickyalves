import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "Ricky's Code Chronicles";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 700, letterSpacing: -1 }}>
          {"Ricky's Code Chronicles"}
        </div>
        <div style={{ fontSize: 26, marginTop: 16, opacity: 0.6 }}>
          Personal portfolio and blog
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 18,
            marginTop: 40,
            opacity: 0.4,
          }}
        >
          www.rickyalves.com
        </div>
      </div>
    ),
    { ...size }
  );
}
