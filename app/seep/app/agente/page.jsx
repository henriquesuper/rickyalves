'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  Home,
  MapPin,
  AlertTriangle,
  MessageSquare,
  Calendar,
  User,
  Clock,
  CheckCircle,
  AlertOctagon,
  Camera,
  Mic,
  Send,
  LogIn,
  LogOut as LogOutIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const OperationsMap = dynamic(() => import('../../components/maps/OperationsMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#1B1B2F' }}>
      <p className="text-white/40 text-sm">Carregando mapa...</p>
    </div>
  ),
});

const agenteData = {
  nomeGuerra: 'Falcon',
  nome: 'Carlos Eduardo Mendes',
  contratante: 'Dr. Henrique Fernandes',
  localizacaoAtual: { lat: -23.5505, lng: -46.6333 },
};

const tabs = [
  { key: 'home', icon: Home, label: 'Início' },
  { key: 'mapa', icon: MapPin, label: 'Mapa' },
  { key: 'ocorrencias', icon: AlertTriangle, label: 'Ocorrências' },
  { key: 'chat', icon: MessageSquare, label: 'Chat' },
  { key: 'escala', icon: Calendar, label: 'Escala' },
];

const proximosCompromissos = [
  { hora: '14:00', descricao: 'Escolta — Av. Paulista', tipo: 'escolta' },
  { hora: '17:00', descricao: 'Retorno à base', tipo: 'retorno' },
];

const chatMessages = [
  { id: 1, from: 'central', text: 'Falcon, confirme chegada ao ponto de encontro.', time: '07:30' },
  { id: 2, from: 'agente', text: 'Chegada confirmada. Perímetro verificado, sem anomalias.', time: '07:45' },
  { id: 3, from: 'central', text: 'Entendido. Mantenha protocolo padrão.', time: '07:47' },
];

const escala = [
  { data: '27/03 (Hoje)', turno: '06:00 — 18:00', contratante: 'Dr. Henrique Fernandes', status: 'ativo' },
  { data: '28/03 (Amanhã)', turno: '06:00 — 18:00', contratante: 'Dr. Henrique Fernandes', status: 'confirmado' },
  { data: '29/03 (Sábado)', turno: 'Folga', contratante: '—', status: 'folga' },
  { data: '30/03 (Domingo)', turno: 'Folga', contratante: '—', status: 'folga' },
  { data: '31/03 (Segunda)', turno: '06:00 — 18:00', contratante: 'Dr. Henrique Fernandes', status: 'confirmado' },
];

export default function AgenteAppPage() {
  const [activeTab, setActiveTab] = useState('home');
  const [checkedIn, setCheckedIn] = useState(true);
  const [checkInTime, setCheckInTime] = useState('07:45');
  const [sosActive, setSosActive] = useState(false);
  const [sosCountdown, setSosCountdown] = useState(0);
  const [messages, setMessages] = useState(chatMessages);
  const [chatInput, setChatInput] = useState('');
  const [ocorrenciaTipo, setOcorrenciaTipo] = useState('');

  useEffect(() => {
    if (sosCountdown > 0) {
      const t = setTimeout(() => setSosCountdown(sosCountdown - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [sosCountdown]);

  const handleCheckToggle = () => {
    if (checkedIn) {
      setCheckedIn(false);
    } else {
      setCheckedIn(true);
      setCheckInTime(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    }
  };

  const triggerSOS = () => {
    setSosActive(true);
    setSosCountdown(10);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setMessages([...messages, {
      id: messages.length + 1,
      from: 'agente',
      text: chatInput,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    }]);
    setChatInput('');
  };

  // SOS Screen
  if (sosActive) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: 'var(--seep-danger)' }}>
        <motion.div
          className="w-32 h-32 rounded-full flex items-center justify-center mb-8"
          style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <AlertOctagon className="w-16 h-16 text-white" />
        </motion.div>
        <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
          ALERTA ENVIADO
        </h1>
        <p className="text-white/80 text-center mb-8">
          Central SEEP e contratante foram notificados.
          <br />Localização GPS compartilhada.
        </p>
        {sosCountdown > 0 && (
          <button onClick={() => { setSosActive(false); setSosCountdown(0); }}
            className="px-8 py-3 rounded-full text-white border-2 border-white/50 font-medium text-sm">
            Cancelar ({sosCountdown}s)
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 pb-20 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.15 }}
          >
            {/* HOME */}
            {activeTab === 'home' && (
              <div>
                <div className="px-5 pt-12 pb-6" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <p className="text-sm" style={{ color: '#B0B0C0' }}>Bom dia,</p>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {agenteData.nomeGuerra}
                  </h1>
                </div>

                <div className="px-5 space-y-4 -mt-2">
                  {/* Status card */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-[var(--seep-border)]">
                    <div className="flex items-center justify-between mb-3">
                      <Badge color={checkedIn ? 'green' : 'gray'} dot>
                        {checkedIn ? 'Em operação' : 'Fora de operação'}
                      </Badge>
                      {checkedIn && (
                        <span className="text-xs" style={{ color: 'var(--seep-text-med)', fontFamily: 'var(--font-mono)' }}>
                          desde {checkInTime}
                        </span>
                      )}
                    </div>
                    {checkedIn && (
                      <>
                        <p className="text-sm" style={{ color: 'var(--seep-text-med)' }}>
                          Contratante: <strong style={{ color: 'var(--seep-text-dark)' }}>{agenteData.contratante}</strong>
                        </p>
                        <p className="text-xs mt-1" style={{ color: 'var(--seep-text-med)' }}>
                          Horas acumuladas hoje: 4h 15min
                        </p>
                      </>
                    )}
                    <button
                      onClick={handleCheckToggle}
                      className="w-full mt-4 py-3 rounded-xl text-base font-bold text-white transition-all"
                      style={{
                        background: checkedIn
                          ? 'linear-gradient(135deg, #C94444, #B73A3A)'
                          : 'linear-gradient(135deg, #C6A94D, #D4B96A)',
                      }}
                    >
                      {checkedIn ? (
                        <span className="flex items-center justify-center gap-2">
                          <LogOutIcon className="w-5 h-5" /> CHECK-OUT
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <LogIn className="w-5 h-5" /> CHECK-IN
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Next */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-[var(--seep-border)]">
                    <p className="text-xs font-medium mb-2" style={{ color: 'var(--seep-text-med)' }}>Próximos compromissos</p>
                    {proximosCompromissos.map((c, i) => (
                      <div key={i} className="flex items-center gap-3 py-2">
                        <span className="text-sm font-bold" style={{ color: 'var(--seep-gold)', fontFamily: 'var(--font-mono)' }}>{c.hora}</span>
                        <span className="text-sm" style={{ color: 'var(--seep-text-dark)' }}>{c.descricao}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* MAP */}
            {activeTab === 'mapa' && (
              <div>
                <div className="px-5 pt-12 pb-4" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Mapa</h1>
                  <p className="text-xs mt-1" style={{ color: '#B0B0C0' }}>Sua posição atual</p>
                </div>
                <div style={{ height: 'calc(100vh - 180px)' }}>
                  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossOrigin="" />
                  <OperationsMap agentes={[{ ...agenteData, id: 'ag-001', status: 'ativo', operacaoAtual: 'Contrato Fernandes', ultimoCheckIn: '2026-03-27T07:45:00' }]} />
                </div>
              </div>
            )}

            {/* OCORRENCIAS */}
            {activeTab === 'ocorrencias' && (
              <div>
                <div className="px-5 pt-12 pb-4" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Registrar Ocorrência</h1>
                </div>
                <div className="px-5 py-4 space-y-4">
                  {/* Type selector */}
                  <div>
                    <p className="text-sm font-medium mb-2" style={{ color: 'var(--seep-text-dark)' }}>Tipo</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { key: 'alerta', label: 'Alerta', icon: AlertTriangle, color: '#C6A94D' },
                        { key: 'incidente', label: 'Incidente', icon: AlertOctagon, color: '#C94444' },
                        { key: 'observacao', label: 'Observação', icon: CheckCircle, color: '#4A9B6E' },
                      ].map((t) => (
                        <button
                          key={t.key}
                          onClick={() => setOcorrenciaTipo(t.key)}
                          className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all"
                          style={{
                            borderColor: ocorrenciaTipo === t.key ? t.color : 'var(--seep-border)',
                            backgroundColor: ocorrenciaTipo === t.key ? `${t.color}10` : 'white',
                          }}
                        >
                          <t.icon className="w-6 h-6" style={{ color: t.color }} />
                          <span className="text-xs font-medium" style={{ color: 'var(--seep-text-dark)' }}>{t.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2" style={{ color: 'var(--seep-text-dark)' }}>Descrição</p>
                    <textarea
                      rows={4}
                      placeholder="Descreva a ocorrência..."
                      className="w-full px-4 py-3 text-sm border border-[var(--seep-border)] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[var(--seep-gold)] resize-none"
                      style={{ color: 'var(--seep-text-dark)' }}
                    />
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-[var(--seep-border)] bg-white">
                      <Camera className="w-5 h-5" style={{ color: 'var(--seep-text-med)' }} />
                      <span className="text-sm" style={{ color: 'var(--seep-text-med)' }}>Foto</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-[var(--seep-border)] bg-white">
                      <Mic className="w-5 h-5" style={{ color: 'var(--seep-text-med)' }} />
                      <span className="text-sm" style={{ color: 'var(--seep-text-med)' }}>Áudio</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: 'var(--seep-light-bg)' }}>
                    <MapPin className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                    <span className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
                      Localização: -23.5505, -46.6333 (automática)
                    </span>
                  </div>

                  <button
                    className="w-full py-3 rounded-xl text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #C6A94D, #D4B96A)' }}
                  >
                    Registrar Ocorrência
                  </button>
                </div>
              </div>
            )}

            {/* CHAT */}
            {activeTab === 'chat' && (
              <div className="flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
                <div className="px-5 pt-12 pb-4 flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: 'var(--seep-gold)', color: '#1B1B2F' }}>
                    C
                  </div>
                  <div>
                    <h1 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Central SEEP</h1>
                    <p className="text-[10px]" style={{ color: '#B0B0C0' }}>Online</p>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ backgroundColor: 'var(--seep-light-bg)' }}>
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.from === 'agente' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className="max-w-[80%] rounded-2xl px-4 py-2.5"
                        style={{
                          backgroundColor: msg.from === 'agente' ? 'var(--seep-gold)' : '#FFF',
                          color: msg.from === 'agente' ? '#FFF' : 'var(--seep-text-dark)',
                          borderBottomRightRadius: msg.from === 'agente' ? 4 : 16,
                          borderBottomLeftRadius: msg.from === 'agente' ? 16 : 4,
                        }}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p className="text-[10px] mt-1" style={{ opacity: 0.6 }}>{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <form onSubmit={sendMessage} className="px-4 py-3 flex gap-2 bg-white border-t border-[var(--seep-border)]">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Digite uma mensagem..."
                    className="flex-1 px-4 py-2.5 text-sm border border-[var(--seep-border)] rounded-full bg-[var(--seep-light-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--seep-gold)]"
                    style={{ color: 'var(--seep-text-dark)' }}
                  />
                  <button type="submit" className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--seep-gold)' }}>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </form>
              </div>
            )}

            {/* ESCALA */}
            {activeTab === 'escala' && (
              <div>
                <div className="px-5 pt-12 pb-4" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Escala</h1>
                </div>
                <div className="px-5 py-4 space-y-3">
                  {escala.map((e, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-[var(--seep-border)]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold" style={{ color: 'var(--seep-text-dark)' }}>{e.data}</span>
                        <Badge
                          color={e.status === 'ativo' ? 'green' : e.status === 'folga' ? 'gray' : 'gold'}
                          dot
                        >
                          {e.status === 'ativo' ? 'Em andamento' : e.status === 'folga' ? 'Folga' : 'Confirmado'}
                        </Badge>
                      </div>
                      <p className="text-sm" style={{ color: 'var(--seep-text-med)', fontFamily: 'var(--font-mono)' }}>
                        {e.turno}
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'var(--seep-text-med)' }}>
                        {e.contratante}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Panic Button */}
      <button
        onClick={triggerSOS}
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50"
        style={{ backgroundColor: 'var(--seep-danger)', boxShadow: '0 4px 20px rgba(201,68,68,0.4)' }}
      >
        <AlertOctagon className="w-6 h-6 text-white" />
      </button>

      {/* Bottom Nav */}
      <nav
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white border-t z-40"
        style={{ maxWidth: '430px', borderColor: 'var(--seep-border)' }}
      >
        <div className="flex items-center justify-around h-16">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex flex-col items-center gap-0.5 py-1 px-3"
            >
              <tab.icon className="w-5 h-5" style={{ color: activeTab === tab.key ? 'var(--seep-gold)' : 'var(--seep-text-med)' }} />
              <span className="text-[10px] font-medium" style={{ color: activeTab === tab.key ? 'var(--seep-gold)' : 'var(--seep-text-med)' }}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
