'use client';

import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle,
} from 'lucide-react';
import Card, { CardBody, CardHeader } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { complianceDocumentos } from '@/lib/seep/mock-data';

function StatusIcon({ status }) {
  switch (status) {
    case 'ok':
      return <CheckCircle className="w-4 h-4" style={{ color: 'var(--seep-success)' }} />;
    case 'atencao':
      return <Clock className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />;
    case 'urgente':
      return <AlertTriangle className="w-4 h-4" style={{ color: 'var(--seep-danger)' }} />;
    case 'vencido':
      return <XCircle className="w-4 h-4" style={{ color: 'var(--seep-danger)' }} />;
    default:
      return null;
  }
}

function statusBadge(status, dias) {
  switch (status) {
    case 'ok':
      return <Badge color="green">{dias} dias restantes</Badge>;
    case 'atencao':
      return <Badge color="yellow">{dias} dias restantes</Badge>;
    case 'urgente':
      return <Badge color="red">{dias} dias restantes</Badge>;
    case 'vencido':
      return <Badge color="red">Vencido há {Math.abs(dias)} dias</Badge>;
    default:
      return null;
  }
}

export default function CompliancePage() {
  const urgentes = complianceDocumentos.filter((d) => d.status === 'urgente' || d.status === 'vencido');
  const atencao = complianceDocumentos.filter((d) => d.status === 'atencao');
  const ok = complianceDocumentos.filter((d) => d.status === 'ok');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
          Compliance
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--seep-text-med)' }}>
          Controle de documentação e certificações dos agentes
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(201,68,68,0.1)' }}>
              <AlertTriangle className="w-5 h-5" style={{ color: 'var(--seep-danger)' }} />
            </div>
            <div>
              <p className="text-xl font-bold" style={{ color: 'var(--seep-danger)' }}>{urgentes.length}</p>
              <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>Urgentes / Vencidos</p>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(198,169,77,0.1)' }}>
              <Clock className="w-5 h-5" style={{ color: 'var(--seep-gold)' }} />
            </div>
            <div>
              <p className="text-xl font-bold" style={{ color: 'var(--seep-gold)' }}>{atencao.length}</p>
              <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>Atenção</p>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(74,155,110,0.1)' }}>
              <CheckCircle className="w-5 h-5" style={{ color: 'var(--seep-success)' }} />
            </div>
            <div>
              <p className="text-xl font-bold" style={{ color: 'var(--seep-success)' }}>{ok.length}</p>
              <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>Em dia</p>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <h2 className="text-base font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
            Documentação dos Agentes
          </h2>
        </CardHeader>
        <CardBody className="!p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'var(--seep-light-bg)' }}>
                  <th className="text-left px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Status</th>
                  <th className="text-left px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Agente</th>
                  <th className="text-left px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Documento</th>
                  <th className="text-left px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Validade</th>
                  <th className="text-right px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Situação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--seep-border)]">
                {[...urgentes, ...atencao, ...ok].map((doc, i) => (
                  <tr key={i} className="hover:bg-[var(--seep-light-bg)] transition-colors">
                    <td className="px-4 py-3"><StatusIcon status={doc.status} /></td>
                    <td className="px-4 py-3 font-medium" style={{ color: 'var(--seep-text-dark)' }}>{doc.nome}</td>
                    <td className="px-4 py-3" style={{ color: 'var(--seep-text-dark)' }}>{doc.documento}</td>
                    <td className="px-4 py-3" style={{ fontFamily: 'var(--font-mono)', color: 'var(--seep-text-med)' }}>
                      {new Date(doc.validade).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {statusBadge(doc.status, doc.diasRestantes)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
