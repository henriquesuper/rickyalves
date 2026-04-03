'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronLeft,
  Shield,
  Award,
  Clock,
  Phone,
  MapPin,
  FileText,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Crosshair,
  CreditCard,
  Calendar,
} from 'lucide-react';
import Card, { CardBody, CardHeader } from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';
import { getAgenteById, formatDate } from '@/lib/seep/mock-data';

const tabs = [
  { key: 'geral', label: 'Visão Geral', icon: Shield },
  { key: 'operacoes', label: 'Operações', icon: MapPin },
  { key: 'documentos', label: 'Documentos', icon: FileText },
  { key: 'financeiro', label: 'Financeiro', icon: DollarSign },
];

// Mock data for expanded tabs
const mockOperacoes = [
  { id: 1, contratante: 'Dr. Henrique Fernandes', periodo: 'Fev 2026 — Atual', horas: 186, status: 'ativa' },
  { id: 2, contratante: 'Monteiro Corp', periodo: 'Nov 2025 — Jan 2026', horas: 312, status: 'concluida' },
  { id: 3, contratante: 'Família Rodrigues', periodo: 'Ago 2025 — Out 2025', horas: 240, status: 'concluida' },
];

const mockDocumentosAgente = [
  { id: 1, nome: 'Contrato de Prestação de Serviços', tipo: 'Contrato', data: '2026-01-10', status: 'vigente' },
  { id: 2, nome: 'Certificado Curso Condução Evasiva', tipo: 'Certificação', data: '2025-08-20', status: 'valido' },
  { id: 3, nome: 'CRAF - Registro de Arma', tipo: 'Documento', data: '2025-06-15', status: 'vigente' },
  { id: 4, nome: 'Ficha Cadastral Completa', tipo: 'Cadastro', data: '2026-01-10', status: 'completo' },
];

const mockFinanceiro = [
  { id: 1, mes: 'Março 2026', horas: 168, valorHora: 65, total: 10920, status: 'pago' },
  { id: 2, mes: 'Fevereiro 2026', horas: 176, valorHora: 65, total: 11440, status: 'pago' },
  { id: 3, mes: 'Janeiro 2026', horas: 152, valorHora: 65, total: 9880, status: 'pago' },
];

export default function AgenteProfilePage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('geral');
  const agente = getAgenteById(id);

  if (!agente) {
    return (
      <div className="text-center py-20">
        <p style={{ color: 'var(--seep-text-med)' }}>Agente não encontrado.</p>
        <Link href="/seep/admin/agentes" className="text-sm mt-2 inline-block" style={{ color: 'var(--seep-gold)' }}>
          Voltar para lista
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back button */}
      <Link
        href="/seep/admin/agentes"
        className="inline-flex items-center gap-1 text-sm hover:underline"
        style={{ color: 'var(--seep-gold)' }}
      >
        <ChevronLeft className="w-4 h-4" />
        Voltar para Agentes
      </Link>

      {/* Header Card */}
      <Card>
        <CardBody>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold shrink-0"
              style={{
                backgroundColor: 'var(--seep-light-gold)',
                color: '#8B7028',
                fontFamily: 'var(--font-montserrat)',
              }}
            >
              {agente.nomeGuerra[0]}{agente.nomeGuerra[1]}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h1
                  className="text-2xl font-bold"
                  style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
                >
                  {agente.nomeGuerra}
                </h1>
                <Badge
                  color={agente.status === 'ativo' ? 'green' : 'gray'}
                  dot
                >
                  {agente.status === 'ativo' ? 'Ativo' : 'Inativo'}
                </Badge>
              </div>
              <p className="text-sm" style={{ color: 'var(--seep-text-med)' }}>
                {agente.nome}
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--seep-text-med)' }}>
                {agente.especialidade} &middot; {agente.anosExperiencia} anos de experiência
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <Phone className="w-3.5 h-3.5" style={{ color: 'var(--seep-gold)' }} />
                <span className="text-xs" style={{ color: 'var(--seep-text-med)', fontFamily: 'var(--font-mono)' }}>
                  {agente.telefone}
                </span>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-[var(--seep-border)] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap"
            style={{
              borderColor: activeTab === tab.key ? 'var(--seep-gold)' : 'transparent',
              color: activeTab === tab.key ? 'var(--seep-gold)' : 'var(--seep-text-med)',
            }}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'geral' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Certifications */}
          <Card>
            <CardHeader>
              <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                <Award className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                Certificações
              </h2>
            </CardHeader>
            <CardBody>
              <div className="flex flex-wrap gap-2">
                {agente.certificacoes.map((cert) => (
                  <Badge key={cert} color="gold">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Armament */}
          {agente.armamento && (
            <Card>
              <CardHeader>
                <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                  <Crosshair className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                  Armamento
                </h2>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  <InfoRow label="Tipo" value={agente.armamento.tipo} />
                  <InfoRow label="Calibre" value={agente.armamento.calibre} />
                  <InfoRow label="Registro" value={agente.armamento.registro} mono />
                  <InfoRow label="Validade" value={formatDate(agente.armamento.validade)} />
                </div>
              </CardBody>
            </Card>
          )}

          {/* Current Operation */}
          <Card>
            <CardHeader>
              <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                <Shield className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                Operação Atual
              </h2>
            </CardHeader>
            <CardBody>
              {agente.operacaoAtual ? (
                <div className="space-y-3">
                  <InfoRow label="Contrato" value={agente.operacaoAtual} />
                  <InfoRow
                    label="Último Check-in"
                    value={agente.ultimoCheckIn ? new Date(agente.ultimoCheckIn).toLocaleString('pt-BR') : '—'}
                    mono
                  />
                  <InfoRow label="Horas este mês" value={`${agente.horasEsteMes}h`} />
                </div>
              ) : (
                <p className="text-sm" style={{ color: 'var(--seep-text-med)' }}>
                  {agente.observacao || 'Sem operação ativa no momento.'}
                </p>
              )}
            </CardBody>
          </Card>

          {/* Alerts */}
          {agente.alertas?.length > 0 && (
            <Card>
              <CardHeader>
                <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                  <AlertTriangle className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                  Alertas
                </h2>
              </CardHeader>
              <CardBody className="space-y-2">
                {agente.alertas.map((alerta, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg flex items-center gap-2"
                    style={{ backgroundColor: 'rgba(198,169,77,0.1)', border: '1px solid rgba(198,169,77,0.2)' }}
                  >
                    <AlertTriangle className="w-4 h-4 shrink-0" style={{ color: 'var(--seep-gold)' }} />
                    <span className="text-sm" style={{ color: 'var(--seep-gold)' }}>
                      {alerta.mensagem}
                    </span>
                  </div>
                ))}
              </CardBody>
            </Card>
          )}
        </div>
      )}

      {activeTab === 'operacoes' && (
        <Card>
          <CardHeader>
            <h2 className="text-base font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
              Histórico de Operações
            </h2>
          </CardHeader>
          <CardBody className="!p-0">
            <div className="divide-y divide-[var(--seep-border)]">
              {mockOperacoes.map((op) => (
                <div key={op.id} className="flex items-center justify-between px-6 py-4 hover:bg-[var(--seep-light-bg)] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--seep-light-gold)' }}>
                      <Shield className="w-5 h-5" style={{ color: 'var(--seep-gold)' }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)' }}>{op.contratante}</p>
                      <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>{op.periodo}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm" style={{ color: 'var(--seep-text-med)', fontFamily: 'var(--font-mono)' }}>
                      {op.horas}h
                    </span>
                    <Badge color={op.status === 'ativa' ? 'green' : 'gray'} dot>
                      {op.status === 'ativa' ? 'Ativa' : 'Concluída'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      )}

      {activeTab === 'documentos' && (
        <Card>
          <CardHeader>
            <h2 className="text-base font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
              Documentos e Contratos
            </h2>
          </CardHeader>
          <CardBody className="!p-0">
            <div className="divide-y divide-[var(--seep-border)]">
              {mockDocumentosAgente.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between px-6 py-4 hover:bg-[var(--seep-light-bg)] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--seep-light-gold)' }}>
                      <FileText className="w-5 h-5" style={{ color: 'var(--seep-gold)' }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)' }}>{doc.nome}</p>
                      <p className="text-xs flex items-center gap-1" style={{ color: 'var(--seep-text-med)' }}>
                        {doc.tipo} &middot; {new Date(doc.data).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                  <Badge color={doc.status === 'vigente' || doc.status === 'valido' || doc.status === 'completo' ? 'green' : 'yellow'}>
                    {doc.status === 'vigente' ? 'Vigente' : doc.status === 'valido' ? 'Válido' : 'Completo'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      )}

      {activeTab === 'financeiro' && (
        <Card>
          <CardHeader>
            <h2 className="text-base font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
              Histórico Financeiro
            </h2>
          </CardHeader>
          <CardBody className="!p-0">
            <div className="divide-y divide-[var(--seep-border)]">
              {mockFinanceiro.map((f) => (
                <div key={f.id} className="flex items-center justify-between px-6 py-4 hover:bg-[var(--seep-light-bg)] transition-colors">
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)' }}>{f.mes}</p>
                    <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
                      {f.horas}h &times; R$ {f.valorHora},00
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-mono)' }}>
                      R$ {f.total.toLocaleString('pt-BR')}
                    </span>
                    <Badge color="green">Pago</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
}

function InfoRow({ label, value, mono = false }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>
        {label}
      </span>
      <span
        className="text-sm font-medium"
        style={{
          color: 'var(--seep-text-dark)',
          fontFamily: mono ? 'var(--font-mono)' : 'inherit',
        }}
      >
        {value}
      </span>
    </div>
  );
}
