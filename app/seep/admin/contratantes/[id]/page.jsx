'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronLeft,
  Building2,
  User,
  Shield,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  FileText,
} from 'lucide-react';
import Card, { CardBody, CardHeader } from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import { getContratanteById, getAgenteById, formatCurrency, formatDate } from '@/lib/seep/mock-data';

export default function ContratanteProfilePage() {
  const { id } = useParams();
  const contratante = getContratanteById(id);
  const agente = contratante ? getAgenteById(contratante.agenteDesignado) : null;

  if (!contratante) {
    return (
      <div className="text-center py-20">
        <p style={{ color: 'var(--seep-text-med)' }}>Contratante não encontrado.</p>
        <Link href="/seep/admin/contratantes" className="text-sm mt-2 inline-block" style={{ color: 'var(--seep-gold)' }}>
          Voltar para lista
        </Link>
      </div>
    );
  }

  const riskColor = contratante.riskScore <= 35 ? 'green' : contratante.riskScore <= 60 ? 'yellow' : 'red';

  return (
    <div className="space-y-6">
      <Link
        href="/seep/admin/contratantes"
        className="inline-flex items-center gap-1 text-sm hover:underline"
        style={{ color: 'var(--seep-gold)' }}
      >
        <ChevronLeft className="w-4 h-4" />
        Voltar para Contratantes
      </Link>

      {/* Header */}
      <Card>
        <CardBody>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: 'var(--seep-light-gold)' }}
            >
              {contratante.tipo === 'Pessoa Jurídica' ? (
                <Building2 className="w-8 h-8" style={{ color: '#8B7028' }} />
              ) : (
                <User className="w-8 h-8" style={{ color: '#8B7028' }} />
              )}
            </div>
            <div className="flex-1">
              <h1
                className="text-2xl font-bold"
                style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
              >
                {contratante.nome}
              </h1>
              <p className="text-sm mt-1" style={{ color: 'var(--seep-text-med)' }}>
                {contratante.tipo} &middot; Responsável: {contratante.responsavel}
              </p>
              <div className="flex gap-2 mt-3">
                <Badge color={contratante.statusPagamento === 'Em dia' ? 'green' : 'red'} dot>
                  {contratante.statusPagamento}
                </Badge>
                <Badge color={riskColor}>
                  Risk Score: {contratante.riskScore}
                </Badge>
                <Badge color="gold">
                  {contratante.nivelDiscricao}
                </Badge>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contract Info */}
        <Card>
          <CardHeader>
            <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
              <FileText className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
              Contrato
            </h2>
          </CardHeader>
          <CardBody className="space-y-3">
            <InfoRow label="Início" value={formatDate(contratante.contrato.inicio)} />
            <InfoRow label="Fim" value={formatDate(contratante.contrato.fim)} />
            <InfoRow label="Regime" value={contratante.contrato.regime} />
            <InfoRow label="Valor Mensal" value={formatCurrency(contratante.contrato.valorMensal)} mono />
          </CardBody>
        </Card>

        {/* Designated Agent */}
        <Card>
          <CardHeader>
            <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
              <Shield className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
              Agente Designado
            </h2>
          </CardHeader>
          <CardBody>
            {agente ? (
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{ backgroundColor: 'var(--seep-light-gold)', color: '#8B7028', fontFamily: 'var(--font-montserrat)' }}
                >
                  {agente.nomeGuerra[0]}
                </div>
                <div>
                  <p className="font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                    {agente.nomeGuerra}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--seep-text-med)' }}>
                    {agente.nome}
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--seep-text-med)' }}>
                    {agente.especialidade}
                  </p>
                  <Link
                    href={`/seep/admin/agentes/${agente.id}`}
                    className="text-xs mt-1 inline-block"
                    style={{ color: 'var(--seep-gold)' }}
                  >
                    Ver perfil completo
                  </Link>
                </div>
              </div>
            ) : (
              <p className="text-sm" style={{ color: 'var(--seep-text-med)' }}>
                Nenhum agente designado.
              </p>
            )}
          </CardBody>
        </Card>

        {/* Risk Assessment */}
        <Card>
          <CardHeader>
            <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
              <TrendingUp className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
              Avaliação de Risco
            </h2>
          </CardHeader>
          <CardBody className="space-y-3">
            <InfoRow label="Grau de Exposição" value={contratante.grauExposicao} />
            <InfoRow label="Nível de Discrição" value={contratante.nivelDiscricao} />
            <InfoRow label="Risk Score" value={`${contratante.riskScore}/100`} mono />
          </CardBody>
        </Card>

        {/* Payment Status */}
        {contratante.statusPagamento === 'Atrasado' && (
          <Card>
            <CardHeader>
              <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-danger)', fontFamily: 'var(--font-montserrat)' }}>
                <AlertTriangle className="w-4 h-4" />
                Pagamento Atrasado
              </h2>
            </CardHeader>
            <CardBody>
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(201,68,68,0.05)', border: '1px solid rgba(201,68,68,0.2)' }}>
                <p className="text-sm font-medium" style={{ color: 'var(--seep-danger)' }}>
                  Fatura de {formatCurrency(contratante.contrato.valorMensal)} com {contratante.diasAtraso} dias de atraso.
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--seep-text-med)' }}>
                  Cobrança PIX enviada automaticamente pelo sistema.
                </p>
              </div>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
}

function InfoRow({ label, value, mono = false }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>{label}</span>
      <span className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)', fontFamily: mono ? 'var(--font-mono)' : 'inherit' }}>
        {value}
      </span>
    </div>
  );
}
