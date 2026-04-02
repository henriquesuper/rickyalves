'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  LayoutDashboard,
  MapPin,
  Users,
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Building2,
  CheckCircle,
  Clock,
  CreditCard,
  Server,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../../components/ui/Badge';
import { agentes, contratantes, financeiro, atividadeRecente, alertasAtivos, formatCurrency } from '@/lib/seep/mock-data';

const OperationsMap = dynamic(() => import('../../components/maps/OperationsMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#1B1B2F' }}>
      <p className="text-white/40 text-sm">Carregando...</p>
    </div>
  ),
});

const tabs = [
  { key: 'dashboard', icon: LayoutDashboard, label: 'Painel' },
  { key: 'mapa', icon: MapPin, label: 'Mapa' },
  { key: 'agentes', icon: Users, label: 'Agentes' },
  { key: 'alertas', icon: AlertTriangle, label: 'Alertas' },
  { key: 'financeiro', icon: DollarSign, label: 'Financeiro' },
];

function getActivityIcon(tipo) {
  switch (tipo) {
    case 'checkin': return <CheckCircle className="w-3.5 h-3.5" style={{ color: 'var(--seep-success)' }} />;
    case 'alerta': return <AlertTriangle className="w-3.5 h-3.5" style={{ color: 'var(--seep-gold)' }} />;
    case 'pagamento': return <CreditCard className="w-3.5 h-3.5" style={{ color: 'var(--seep-success)' }} />;
    default: return <Server className="w-3.5 h-3.5" style={{ color: 'var(--seep-text-med)' }} />;
  }
}

export default function AdminMobilePage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const agentesAtivos = agentes.filter((a) => a.status === 'ativo' && a.operacaoAtual);

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
            {/* DASHBOARD */}
            {activeTab === 'dashboard' && (
              <div>
                <div className="px-5 pt-12 pb-6" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <p className="text-xs mb-1" style={{ color: '#C6A94D', fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}>S.E.E.P.</p>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Central de Comando</h1>
                </div>

                <div className="px-5 space-y-4 -mt-2">
                  {/* KPIs */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Users, label: 'Agentes Ativos', value: agentesAtivos.length, color: '#4A9B6E' },
                      { icon: Building2, label: 'Contratantes', value: contratantes.length, color: '#C6A94D' },
                      { icon: TrendingUp, label: 'Receita', value: formatCurrency(financeiro.receitaMensal), color: '#4A9B6E' },
                      { icon: AlertTriangle, label: 'Alertas', value: alertasAtivos.length, color: '#C6A94D' },
                    ].map((kpi, i) => (
                      <div key={i} className="bg-white rounded-xl p-3 border border-[var(--seep-border)]">
                        <kpi.icon className="w-5 h-5 mb-2" style={{ color: kpi.color }} />
                        <p className="text-lg font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-mono)' }}>
                          {kpi.value}
                        </p>
                        <p className="text-[10px]" style={{ color: 'var(--seep-text-med)' }}>{kpi.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Activity */}
                  <div className="bg-white rounded-xl border border-[var(--seep-border)]">
                    <div className="px-4 py-3 border-b border-[var(--seep-border)]">
                      <p className="text-sm font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                        Atividade Recente
                      </p>
                    </div>
                    <div className="divide-y divide-[var(--seep-border)]">
                      {atividadeRecente.slice(0, 5).map((a, i) => (
                        <div key={i} className="flex items-start gap-2.5 px-4 py-2.5">
                          <div className="mt-0.5">{getActivityIcon(a.tipo)}</div>
                          <p className="text-xs flex-1" style={{ color: a.tipo === 'alerta' ? 'var(--seep-gold)' : 'var(--seep-text-dark)' }}>
                            {a.descricao}
                          </p>
                          <span className="text-[10px] shrink-0" style={{ fontFamily: 'var(--font-mono)', color: 'var(--seep-text-med)' }}>
                            {a.hora}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MAPA */}
            {activeTab === 'mapa' && (
              <div>
                <div className="px-5 pt-12 pb-4" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Mapa</h1>
                  <p className="text-xs mt-1" style={{ color: '#B0B0C0' }}>Todos os agentes em campo</p>
                </div>
                <div style={{ height: 'calc(100vh - 180px)' }}>
                  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossOrigin="" />
                  <OperationsMap agentes={agentes} />
                </div>
              </div>
            )}

            {/* AGENTES */}
            {activeTab === 'agentes' && (
              <div>
                <div className="px-5 pt-12 pb-4" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Agentes</h1>
                </div>
                <div className="px-5 py-4 space-y-3">
                  {agentes.map((a) => (
                    <div key={a.id} className="bg-white rounded-xl p-4 border border-[var(--seep-border)] flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                        style={{ backgroundColor: 'var(--seep-light-gold)', color: '#8B7028', fontFamily: 'var(--font-montserrat)' }}>
                        {a.nomeGuerra[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold truncate" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                          {a.nomeGuerra}
                        </p>
                        <p className="text-xs truncate" style={{ color: 'var(--seep-text-med)' }}>
                          {a.operacaoAtual || a.observacao || 'Sem operação'}
                        </p>
                      </div>
                      <Badge color={a.status === 'ativo' ? (a.alertas?.length ? 'yellow' : 'green') : 'gray'} dot>
                        {a.status === 'ativo' ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ALERTAS */}
            {activeTab === 'alertas' && (
              <div>
                <div className="px-5 pt-12 pb-4" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Alertas</h1>
                </div>
                <div className="px-5 py-4 space-y-3">
                  {alertasAtivos.map((a) => (
                    <div key={a.id} className="bg-white rounded-xl p-4 border-l-4" style={{
                      borderColor: a.severidade === 'vermelho' ? 'var(--seep-danger)' : 'var(--seep-gold)',
                      borderTop: '1px solid var(--seep-border)',
                      borderRight: '1px solid var(--seep-border)',
                      borderBottom: '1px solid var(--seep-border)',
                    }}>
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-sm font-bold" style={{ color: 'var(--seep-text-dark)' }}>{a.titulo}</h3>
                        <Badge color={a.severidade === 'vermelho' ? 'red' : 'yellow'}>
                          {a.tipo}
                        </Badge>
                      </div>
                      <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>{a.descricao}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FINANCEIRO */}
            {activeTab === 'financeiro' && (
              <div>
                <div className="px-5 pt-12 pb-6" style={{ background: 'linear-gradient(135deg, #1B1B2F, #162447)' }}>
                  <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Financeiro</h1>
                  <div className="mt-3 flex gap-3">
                    <div className="flex-1 rounded-lg p-3" style={{ backgroundColor: 'rgba(198,169,77,0.15)' }}>
                      <p className="text-[10px] text-white/60">Receita</p>
                      <p className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
                        {formatCurrency(financeiro.receitaMensal)}
                      </p>
                    </div>
                    <div className="flex-1 rounded-lg p-3" style={{ backgroundColor: 'rgba(74,155,110,0.15)' }}>
                      <p className="text-[10px] text-white/60">Margem</p>
                      <p className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
                        {formatCurrency(financeiro.margemBruta)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-5 space-y-3 -mt-2">
                  {contratantes.map((c) => (
                    <div key={c.id} className="bg-white rounded-xl p-4 border border-[var(--seep-border)]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)' }}>{c.nome}</span>
                        <Badge color={c.statusPagamento === 'Em dia' ? 'green' : 'red'} dot>{c.statusPagamento}</Badge>
                      </div>
                      <p className="text-lg font-bold" style={{ fontFamily: 'var(--font-mono)', color: 'var(--seep-text-dark)' }}>
                        {formatCurrency(c.contrato.valorMensal)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white border-t z-40" style={{ maxWidth: '430px', borderColor: 'var(--seep-border)' }}>
        <div className="flex items-center justify-around h-16">
          {tabs.map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} className="flex flex-col items-center gap-0.5 py-1 px-3">
              <tab.icon className="w-5 h-5" style={{ color: activeTab === tab.key ? 'var(--seep-gold)' : 'var(--seep-text-med)' }} />
              <span className="text-[10px] font-medium" style={{ color: activeTab === tab.key ? 'var(--seep-gold)' : 'var(--seep-text-med)' }}>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
