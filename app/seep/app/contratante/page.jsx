'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  Home,
  MapPin,
  MessageSquare,
  FileText,
  DollarSign,
  AlertOctagon,
  Shield,
  Phone,
  Send,
  ChevronRight,
  CheckCircle,
  Clock,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../../components/ui/Badge';
import { getAgenteById, getContratanteById, formatCurrency } from '@/lib/seep/mock-data';

const OperationsMap = dynamic(() => import('../../components/maps/OperationsMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#1B1B2F' }}>
      <p className="text-white/40 text-sm">Carregando mapa...</p>
    </div>
  ),
});

const contratante = getContratanteById('cl-001');
const agente = getAgenteById('ag-001');

const tabs = [
  { key: 'home', icon: Home, label: 'Início' },
  { key: 'mapa', icon: MapPin, label: 'Mapa' },
  { key: 'chat', icon: MessageSquare, label: 'Chat' },
  { key: 'docs', icon: FileText, label: 'Docs' },
  { key: 'financeiro', icon: DollarSign, label: 'Pagar' },
];

// ─── Chat messages mock ─────────────────────────────────────
const chatMessages = [
  { id: 1, from: 'agente', text: 'Bom dia, Dr. Fernandes. Check-in realizado às 07:45. Perímetro seguro.', time: '07:45' },
  { id: 2, from: 'contratante', text: 'Bom dia, Falcon. Obrigado pela atualização.', time: '07:50' },
  { id: 3, from: 'agente', text: 'Estarei na recepção do escritório às 09:00 conforme programado.', time: '08:15' },
  { id: 4, from: 'contratante', text: 'Perfeito. Hoje tenho uma reunião externa às 14h na Av. Paulista.', time: '08:20' },
  { id: 5, from: 'agente', text: 'Entendido. Vou preparar a rota e verificar o local antecipadamente.', time: '08:22' },
];

// ─── Faturas mock ────────────────────────────────────────────
const faturas = [
  { mes: 'Jan/2026', valor: 18500, status: 'Pago', dataPago: '15/01/2026' },
  { mes: 'Fev/2026', valor: 18500, status: 'Pago', dataPago: '15/02/2026' },
  { mes: 'Mar/2026', valor: 18500, status: 'Pago', dataPago: '15/03/2026' },
  { mes: 'Abr/2026', valor: 18500, status: 'Pendente', vencimento: '15/04/2026' },
];

const docs = [
  { nome: 'Contrato de Prestação de Serviço', data: '15/01/2026', tipo: 'PDF' },
  { nome: 'Plano de Segurança — Diagnóstico Inicial', data: '20/01/2026', tipo: 'PDF' },
  { nome: 'Relatório Mensal — Fevereiro 2026', data: '05/03/2026', tipo: 'PDF' },
];

export default function ContratanteAppPage() {
  const [activeTab, setActiveTab] = useState('home');
  const [sosActive, setSosActive] = useState(false);
  const [sosCountdown, setSosCountdown] = useState(0);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState(chatMessages);

  // SOS countdown
  useEffect(() => {
    if (sosCountdown > 0) {
      const t = setTimeout(() => setSosCountdown(sosCountdown - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [sosCountdown]);

  const triggerSOS = () => {
    setSosActive(true);
    setSosCountdown(10);
  };

  const cancelSOS = () => {
    setSosActive(false);
    setSosCountdown(0);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setMessages([...messages, {
      id: messages.length + 1,
      from: 'contratante',
      text: chatInput,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    }]);
    setChatInput('');
  };

  // ─── SOS Screen ─────────────────────────────────────────
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
          A central SEEP e seu agente foram notificados.
          <br />Sua localização GPS foi compartilhada.
        </p>
        {sosCountdown > 0 && (
          <button
            onClick={cancelSOS}
            className="px-8 py-3 rounded-full text-white border-2 border-white/50 font-medium text-sm"
          >
            Cancelar alerta ({sosCountdown}s)
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Content area */}
      <div className="flex-1 pb-20 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.15 }}
          >
            {/* HOME TAB */}
            {activeTab === 'home' && (
              <div>
                {/* Header */}
                <div className="px-5 pt-12 pb-6" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm" style={{ color: '#B0B0C0' }}>Olá,</p>
                    <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'rgba(198,169,77,0.15)', color: '#C6A94D', fontFamily: 'var(--font-montserrat)', fontWeight: 700, fontSize: 10 }}>
                      S.E.E.P.
                    </span>
                  </div>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Dr. Fernandes
                  </h1>
                </div>

                <div className="px-5 space-y-4 -mt-2">
                  {/* Agent card */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-[var(--seep-border)]">
                    <p className="text-xs font-medium mb-3" style={{ color: 'var(--seep-text-med)' }}>Seu agente</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold" style={{ backgroundColor: 'var(--seep-light-gold)', color: '#8B7028', fontFamily: 'var(--font-montserrat)' }}>
                        F
                      </div>
                      <div className="flex-1">
                        <p className="font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                          Falcon
                        </p>
                        <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
                          Carlos Eduardo Mendes
                        </p>
                      </div>
                      <Badge color="green" dot>Em operação</Badge>
                    </div>
                    <div className="mt-3 pt-3 border-t border-[var(--seep-border)] flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" style={{ color: 'var(--seep-text-med)' }} />
                      <span className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
                        Em operação desde 07:45 &middot; Última atualização: há 2 minutos
                      </span>
                    </div>
                  </div>

                  {/* Mini map */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[var(--seep-border)]" onClick={() => setActiveTab('mapa')}>
                    <div className="h-40">
                      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossOrigin="" />
                      <OperationsMap agentes={[agente]} />
                    </div>
                    <div className="px-4 py-2.5 flex items-center justify-between">
                      <span className="text-xs font-medium" style={{ color: 'var(--seep-text-med)' }}>
                        Localização do agente
                      </span>
                      <ChevronRight className="w-4 h-4" style={{ color: 'var(--seep-text-med)' }} />
                    </div>
                  </div>

                  {/* Financial card */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-[var(--seep-border)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>Próxima fatura</p>
                        <p className="text-lg font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-mono)' }}>
                          {formatCurrency(18500)}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>Vence em 15/04/2026</p>
                      </div>
                      <button
                        onClick={() => setActiveTab('financeiro')}
                        className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                        style={{ background: 'linear-gradient(135deg, #C6A94D 0%, #D4B96A 100%)' }}
                      >
                        Pagar agora
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MAP TAB */}
            {activeTab === 'mapa' && (
              <div>
                <div className="px-5 pt-12 pb-4" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Localização
                  </h1>
                  <p className="text-xs mt-1" style={{ color: '#B0B0C0' }}>
                    Falcon — Última atualização: agora
                  </p>
                </div>
                <div style={{ height: 'calc(100vh - 180px)' }}>
                  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossOrigin="" />
                  <OperationsMap agentes={[agente]} />
                </div>
              </div>
            )}

            {/* CHAT TAB */}
            {activeTab === 'chat' && (
              <div className="flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
                <div className="px-5 pt-12 pb-4 flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: 'var(--seep-gold)', color: '#1B1B2F' }}>
                    F
                  </div>
                  <div>
                    <h1 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Falcon</h1>
                    <p className="text-[10px]" style={{ color: '#B0B0C0' }}>Online</p>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ backgroundColor: 'var(--seep-light-bg)' }}>
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.from === 'contratante' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className="max-w-[80%] rounded-2xl px-4 py-2.5"
                        style={{
                          backgroundColor: msg.from === 'contratante' ? 'var(--seep-gold)' : '#FFF',
                          color: msg.from === 'contratante' ? '#FFF' : 'var(--seep-text-dark)',
                          borderBottomRightRadius: msg.from === 'contratante' ? 4 : 16,
                          borderBottomLeftRadius: msg.from === 'contratante' ? 16 : 4,
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
                  <button
                    type="submit"
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--seep-gold)' }}
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </form>
              </div>
            )}

            {/* DOCS TAB */}
            {activeTab === 'docs' && (
              <div>
                <div className="px-5 pt-12 pb-4" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Documentos
                  </h1>
                </div>
                <div className="px-5 py-4 space-y-3">
                  {docs.map((doc, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 border border-[var(--seep-border)] flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(198,169,77,0.1)' }}>
                        <FileText className="w-5 h-5" style={{ color: 'var(--seep-gold)' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate" style={{ color: 'var(--seep-text-dark)' }}>
                          {doc.nome}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
                          {doc.data} &middot; {doc.tipo}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 shrink-0" style={{ color: 'var(--seep-text-med)' }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FINANCEIRO TAB */}
            {activeTab === 'financeiro' && (
              <div>
                <div className="px-5 pt-12 pb-4" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Financeiro
                  </h1>
                </div>
                <div className="px-5 py-4 space-y-3">
                  {faturas.map((f, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 border border-[var(--seep-border)]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold" style={{ color: 'var(--seep-text-dark)' }}>
                          {f.mes}
                        </span>
                        <Badge color={f.status === 'Pago' ? 'green' : 'yellow'} dot>
                          {f.status}
                        </Badge>
                      </div>
                      <p className="text-lg font-bold" style={{ fontFamily: 'var(--font-mono)', color: 'var(--seep-text-dark)' }}>
                        {formatCurrency(f.valor)}
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'var(--seep-text-med)' }}>
                        {f.status === 'Pago' ? `Pago em ${f.dataPago}` : `Vence em ${f.vencimento}`}
                      </p>
                      {f.status === 'Pendente' && (
                        <button
                          className="mt-3 w-full py-2.5 rounded-lg text-sm font-semibold text-white"
                          style={{ background: 'linear-gradient(135deg, #C6A94D 0%, #D4B96A 100%)' }}
                        >
                          Pagar agora
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SOS Button */}
      <button
        onClick={triggerSOS}
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50"
        style={{
          backgroundColor: 'var(--seep-danger)',
          maxWidth: '430px',
          boxShadow: '0 4px 20px rgba(201,68,68,0.4)',
        }}
      >
        <AlertOctagon className="w-6 h-6 text-white" />
      </button>

      {/* Bottom Navigation */}
      <nav
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white border-t z-40 safe-area-bottom"
        style={{ maxWidth: '430px', borderColor: 'var(--seep-border)' }}
      >
        <div className="flex items-center justify-around h-16">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex flex-col items-center gap-0.5 py-1 px-3 transition-colors"
            >
              <tab.icon
                className="w-5 h-5"
                style={{ color: activeTab === tab.key ? 'var(--seep-gold)' : 'var(--seep-text-med)' }}
              />
              <span
                className="text-[10px] font-medium"
                style={{ color: activeTab === tab.key ? 'var(--seep-gold)' : 'var(--seep-text-med)' }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
