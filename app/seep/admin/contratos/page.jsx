'use client';

import Link from 'next/link';
import { FileText, Plus, Calendar, DollarSign } from 'lucide-react';
import Card, { CardBody, CardHeader } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { contratos, formatCurrency, formatDate } from '@/lib/seep/mock-data';

export default function ContratosPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
            Contratos
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--seep-text-med)' }}>
            {contratos.length} contratos ativos
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Novo Contrato
        </Button>
      </div>

      <Card>
        <CardBody className="!p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'var(--seep-light-bg)' }}>
                  <th className="text-left px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>ID</th>
                  <th className="text-left px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Contratante</th>
                  <th className="text-left px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Agente</th>
                  <th className="text-left px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Regime</th>
                  <th className="text-left px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Período</th>
                  <th className="text-right px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Valor</th>
                  <th className="text-center px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--seep-border)]">
                {contratos.map((c) => (
                  <tr key={c.id} className="hover:bg-[var(--seep-light-bg)] transition-colors">
                    <td className="px-4 py-3" style={{ fontFamily: 'var(--font-mono)', color: 'var(--seep-text-med)', fontSize: 12 }}>
                      {c.id}
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/seep/admin/contratantes/${c.contratanteId}`} className="font-medium hover:underline" style={{ color: 'var(--seep-text-dark)' }}>
                        {c.contratante}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/seep/admin/agentes/${c.agenteId}`} className="font-medium hover:underline" style={{ color: 'var(--seep-gold)' }}>
                        {c.agente}
                      </Link>
                    </td>
                    <td className="px-4 py-3" style={{ color: 'var(--seep-text-med)' }}>{c.regime}</td>
                    <td className="px-4 py-3" style={{ fontFamily: 'var(--font-mono)', color: 'var(--seep-text-med)', fontSize: 12 }}>
                      {formatDate(c.inicio)} — {formatDate(c.fim)}
                    </td>
                    <td className="px-4 py-3 text-right font-bold" style={{ fontFamily: 'var(--font-mono)', color: 'var(--seep-text-dark)' }}>
                      {formatCurrency(c.valorMensal)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge color="green" dot>{c.status}</Badge>
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
