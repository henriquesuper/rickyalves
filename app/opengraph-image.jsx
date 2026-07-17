import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ricky Alves — Software Engineer in Los Angeles';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const FONT_URL =
  'https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-700-normal.ttf';

export default async function Image() {
  let fonts;
  try {
    const fontData = await fetch(FONT_URL).then((res) => res.arrayBuffer());
    fonts = [{ name: 'JetBrains Mono', data: fontData, style: 'normal', weight: 700 }];
  } catch {
    fonts = undefined;
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: '#050505',
          fontFamily: fonts ? 'JetBrains Mono' : 'monospace',
        }}
      >
        {/* Terminal window */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 1000,
            borderRadius: 16,
            border: '1px solid rgba(34,197,94,0.4)',
            background: '#0a0f0a',
            boxShadow: '0 0 80px rgba(34,197,94,0.15)',
            overflow: 'hidden',
          }}
        >
          {/* Title bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px 28px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, background: '#ef4444' }} />
              <div style={{ width: 18, height: 18, borderRadius: 9, background: '#eab308' }} />
              <div style={{ width: 18, height: 18, borderRadius: 9, background: '#22c55e' }} />
            </div>
            <div style={{ display: 'flex', fontSize: 20, color: '#737373', letterSpacing: 2 }}>
              visitor@ricky-os: ~/secure_shell
            </div>
            <div style={{ display: 'flex', width: 66 }} />
          </div>

          {/* Body */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '48px 56px 56px',
            }}
          >
            <div style={{ display: 'flex', fontSize: 26, color: '#4ade80', marginBottom: 18 }}>
              $ whoami
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 92,
                fontWeight: 700,
                color: '#f5f5f5',
                letterSpacing: -2,
              }}
            >
              RICKY ALVES
              <div
                style={{
                  display: 'flex',
                  width: 40,
                  height: 14,
                  background: '#22c55e',
                  marginLeft: 18,
                  marginTop: 48,
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 40,
                color: '#4ade80',
                marginTop: 14,
              }}
            >
              {'> The Digital Alchemist'}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 24,
                color: '#a3a3a3',
                marginTop: 34,
              }}
            >
              Full-stack software engineer · Based in Los Angeles
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 44,
                paddingTop: 26,
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div style={{ display: 'flex', fontSize: 20, color: '#4ade80' }}>
                www.rickyalves.com
              </div>
              <div style={{ display: 'flex', fontSize: 18, color: '#525252', letterSpacing: 3 }}>
                SYS_ONLINE · ENCRYPTION: AES-256
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
