import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'S.E.E.P. – Serviço Executivo de Eficiência Pessoal';
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
          background: 'linear-gradient(135deg, #1B1B2F 0%, #162447 50%, #1B1B2F 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: '#8B2336',
            letterSpacing: 12,
          }}
        >
          S.E.E.P.
        </div>
        <div
          style={{
            display: 'flex',
            width: 120,
            height: 2,
            background: '#8B2336',
            marginTop: 24,
            marginBottom: 24,
            opacity: 0.5,
          }}
        />
        <div style={{ fontSize: 22, color: '#B0B0C0', letterSpacing: 2 }}>
          {'Serviço Executivo de Eficiência Pessoal'}
        </div>
      </div>
    ),
    { ...size }
  );
}
