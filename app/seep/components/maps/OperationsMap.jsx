'use client';

import { useEffect, useState } from 'react';

export default function OperationsMap({ agentes = [] }) {
  const [MapComponents, setMapComponents] = useState(null);

  useEffect(() => {
    Promise.all([
      import('react-leaflet'),
      import('leaflet'),
    ]).then(([rl, L]) => {
      delete L.default.Icon.Default.prototype._getIconUrl;
      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl: '',
        iconUrl: '',
        shadowUrl: '',
      });

      setMapComponents({ rl, L: L.default });
    });
  }, []);

  if (!MapComponents) {
    return (
      <div
        className="w-full h-full rounded-lg flex items-center justify-center"
        style={{ backgroundColor: '#F2F0EA' }}
      >
        <p className="text-sm" style={{ color: 'var(--seep-text-med)' }}>Carregando mapa...</p>
      </div>
    );
  }

  const { rl, L } = MapComponents;
  const { MapContainer, TileLayer, Marker, Popup } = rl;

  const createAgentIcon = (label) =>
    L.divIcon({
      className: '',
      html: `
        <div style="
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        ">
          <!-- Pill badge -->
          <div style="
            display: flex;
            align-items: center;
            gap: 7px;
            background: #1B1B2F;
            color: #F5E6B8;
            font-weight: 700;
            font-size: 11px;
            letter-spacing: 0.5px;
            padding: 6px 14px;
            border-radius: 24px;
            white-space: nowrap;
            box-shadow: 0 4px 14px rgba(0,0,0,0.3), 0 0 0 2px rgba(139,35,54,0.4);
            font-family: var(--font-montserrat), system-ui;
            text-transform: uppercase;
          ">
            <div style="
              position: relative;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #4A9B6E;
              flex-shrink: 0;
            ">
              <div style="
                position: absolute;
                inset: -3px;
                border-radius: 50%;
                border: 1.5px solid #4A9B6E;
                opacity: 0.4;
                animation: seep-pulse 2s ease-in-out infinite;
              "></div>
            </div>
            ${label}
          </div>
          <!-- Arrow pointer -->
          <div style="
            width: 0;
            height: 0;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-top: 8px solid #1B1B2F;
            margin-top: -1px;
            filter: drop-shadow(0 2px 2px rgba(0,0,0,0.2));
          "></div>
          <!-- Ground shadow -->
          <div style="
            width: 16px;
            height: 4px;
            border-radius: 50%;
            background: rgba(0,0,0,0.15);
            margin-top: 2px;
          "></div>
        </div>
        <style>
          @keyframes seep-pulse {
            0%, 100% { transform: scale(1); opacity: 0.4; }
            50% { transform: scale(1.8); opacity: 0; }
          }
        </style>
      `,
      iconSize: [100, 50],
      iconAnchor: [50, 50],
    });

  const agentesAtivos = agentes.filter((a) => a.localizacaoAtual);

  return (
    <MapContainer
      center={[-23.565, -46.655]}
      zoom={13}
      style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {agentesAtivos.map((agente) => (
        <Marker
          key={agente.id}
          position={[agente.localizacaoAtual.lat, agente.localizacaoAtual.lng]}
          icon={createAgentIcon(agente.nomeGuerra)}
        >
          <Popup>
            <div style={{ fontFamily: 'var(--font-inter), system-ui', minWidth: 200, padding: '4px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8B2336, #A02840)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#1B1B2F', fontWeight: 800, fontSize: 14,
                  fontFamily: 'var(--font-montserrat), system-ui',
                }}>
                  {agente.nomeGuerra[0]}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, margin: 0, color: '#1B1B2F' }}>
                    {agente.nomeGuerra}
                  </p>
                  <p style={{ fontSize: 11, color: '#6B7280', margin: 0 }}>
                    {agente.nome}
                  </p>
                </div>
              </div>
              <div style={{
                background: '#F8F7F4', borderRadius: 8, padding: '8px 10px',
                border: '1px solid #E5E0D4',
              }}>
                <p style={{ fontSize: 11, color: '#6B1A2A', fontWeight: 600, margin: '0 0 2px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Operação
                </p>
                <p style={{ fontSize: 12, color: '#2C2C2C', margin: 0 }}>
                  {agente.operacaoAtual || 'Sem operação ativa'}
                </p>
              </div>
              {agente.ultimoCheckIn && (
                <p style={{
                  fontSize: 10, color: '#9CA3AF', margin: '8px 0 0 0',
                  fontFamily: 'var(--font-mono), monospace',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: '#4A9B6E' }}></span>
                  Último check-in: {new Date(agente.ultimoCheckIn).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
