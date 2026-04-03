'use client';

import { useState } from 'react';
import {
  FolderArchive,
  FileText,
  Users,
  Building2,
  Handshake,
  Lock,
  DollarSign,
  CreditCard,
  Download,
  Eye,
  Search,
  Filter,
  Calendar,
} from 'lucide-react';
import Card, { CardBody, CardHeader } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const categories = [
  { key: 'todos', label: 'Todos', icon: FolderArchive },
  { key: 'administrativo', label: 'Administrativo', icon: Lock },
  { key: 'contratos', label: 'Contratos', icon: FileText },
  { key: 'cadastros', label: 'Fichas Cadastrais', icon: Users },
  { key: 'financeiro', label: 'Dados Bancários', icon: CreditCard },
  { key: 'candidatos', label: 'Candidatos', icon: Building2 },
];

const mockDocumentos = [
  // Administrativo
  { id: 1, nome: 'Balanço Mensal - Março 2026', categoria: 'administrativo', tipo: 'Contabilidade', data: '2026-03-31', status: 'aprovado', sigiloso: true },
  { id: 2, nome: 'Relatório Operacional Q1 2026', categoria: 'administrativo', tipo: 'Relatório', data: '2026-03-28', status: 'aprovado', sigiloso: false },
  { id: 3, nome: 'Ata de Reunião Diretoria', categoria: 'administrativo', tipo: 'Ata', data: '2026-03-15', status: 'aprovado', sigiloso: true },

  // Contratos
  { id: 4, nome: 'Contrato Agente #001 - Falcon', categoria: 'contratos', tipo: 'Contrato Agente', data: '2026-01-10', status: 'vigente', sigiloso: false },
  { id: 5, nome: 'Contrato Agente #002 - Shadow', categoria: 'contratos', tipo: 'Contrato Agente', data: '2025-11-05', status: 'vigente', sigiloso: false },
  { id: 6, nome: 'Contrato Contratante - Dr. Henrique', categoria: 'contratos', tipo: 'Contrato Contratante', data: '2026-02-01', status: 'vigente', sigiloso: false },
  { id: 7, nome: 'Contrato Contratante - Monteiro Corp', categoria: 'contratos', tipo: 'Contrato Contratante', data: '2025-12-15', status: 'vigente', sigiloso: false },
  { id: 8, nome: 'Parceria - Blindagem Veicular SP', categoria: 'contratos', tipo: 'Contrato Parceria', data: '2026-01-20', status: 'vigente', sigiloso: false },
  { id: 9, nome: 'Parceria - Segurança Eletrônica BR', categoria: 'contratos', tipo: 'Contrato Parceria', data: '2025-10-10', status: 'expirado', sigiloso: false },

  // Fichas Cadastrais
  { id: 10, nome: 'Ficha Cadastral - Falcon (Ricardo)', categoria: 'cadastros', tipo: 'Ficha Agente', data: '2026-01-10', status: 'completo', sigiloso: false },
  { id: 11, nome: 'Ficha Cadastral - Shadow (André)', categoria: 'cadastros', tipo: 'Ficha Agente', data: '2025-11-05', status: 'completo', sigiloso: false },
  { id: 12, nome: 'Ficha Cadastral - Dr. Henrique Fernandes', categoria: 'cadastros', tipo: 'Ficha Contratante', data: '2026-02-01', status: 'completo', sigiloso: false },

  // Dados Bancários
  { id: 13, nome: 'Dados Bancários - Falcon', categoria: 'financeiro', tipo: 'Dados Bancários', data: '2026-01-10', status: 'verificado', sigiloso: true },
  { id: 14, nome: 'Dados Bancários - Shadow', categoria: 'financeiro', tipo: 'Dados Bancários', data: '2025-11-05', status: 'verificado', sigiloso: true },
  { id: 15, nome: 'Dados Bancários - Monteiro Corp', categoria: 'financeiro', tipo: 'Dados Bancários', data: '2025-12-15', status: 'verificado', sigiloso: true },

  // Candidatos
  { id: 16, nome: 'Formulário Candidato - João Silva', categoria: 'candidatos', tipo: 'Candidatura', data: '2026-03-20', status: 'em_analise', sigiloso: false },
  { id: 17, nome: 'Formulário Candidato - Pedro Santos', categoria: 'candidatos', tipo: 'Candidatura', data: '2026-03-18', status: 'aprovado', sigiloso: false },
  { id: 18, nome: 'Formulário Candidato - Lucas Oliveira', categoria: 'candidatos', tipo: 'Candidatura', data: '2026-03-25', status: 'reprovado', sigiloso: false },
];

const statusConfig = {
  aprovado: { color: 'green', label: 'Aprovado' },
  vigente: { color: 'green', label: 'Vigente' },
  completo: { color: 'green', label: 'Completo' },
  verificado: { color: 'green', label: 'Verificado' },
  em_analise: { color: 'yellow', label: 'Em Análise' },
  expirado: { color: 'red', label: 'Expirado' },
  reprovado: { color: 'red', label: 'Reprovado' },
};

const tipoIcons = {
  'Contabilidade': DollarSign,
  'Relatório': FileText,
  'Ata': FileText,
  'Contrato Agente': Users,
  'Contrato Contratante': Building2,
  'Contrato Parceria': Handshake,
  'Ficha Agente': Users,
  'Ficha Contratante': Building2,
  'Dados Bancários': CreditCard,
  'Candidatura': Users,
};

export default function DocumentosPage() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = mockDocumentos.filter((doc) => {
    const matchCategory = activeCategory === 'todos' || doc.categoria === activeCategory;
    const matchSearch = doc.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tipo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const counts = categories.reduce((acc, cat) => {
    acc[cat.key] = cat.key === 'todos'
      ? mockDocumentos.length
      : mockDocumentos.filter((d) => d.categoria === cat.key).length;
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-2xl font-bold"
          style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
        >
          Documentos
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--seep-text-med)' }}>
          Gestão de documentos administrativos, contratos, fichas cadastrais e dados sigilosos.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 border"
              style={{
                borderColor: isActive ? 'var(--seep-gold)' : 'var(--seep-border)',
                backgroundColor: isActive ? 'rgba(198,169,77,0.08)' : 'white',
                color: isActive ? 'var(--seep-gold)' : 'var(--seep-text-med)',
              }}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
              <span
                className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                style={{
                  backgroundColor: isActive ? 'var(--seep-gold)' : 'var(--seep-light-bg)',
                  color: isActive ? 'white' : 'var(--seep-text-med)',
                }}
              >
                {counts[cat.key]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
          style={{ color: 'var(--seep-text-med)' }}
        />
        <input
          type="text"
          placeholder="Buscar documento..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 text-sm border border-[var(--seep-border)] rounded-lg bg-white text-[var(--seep-text-dark)] placeholder:text-[var(--seep-text-med)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--seep-gold)] focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Documents List */}
      <Card>
        <CardBody className="!p-0">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <FolderArchive className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--seep-text-med)' }} />
              <p className="text-sm" style={{ color: 'var(--seep-text-med)' }}>
                Nenhum documento encontrado.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[var(--seep-border)]">
              {filtered.map((doc) => {
                const TipoIcon = tipoIcons[doc.tipo] || FileText;
                const status = statusConfig[doc.status] || { color: 'gray', label: doc.status };

                return (
                  <div
                    key={doc.id}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-[var(--seep-light-bg)] transition-colors"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'var(--seep-light-gold)' }}
                    >
                      <TipoIcon className="w-5 h-5" style={{ color: 'var(--seep-gold)' }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p
                          className="text-sm font-medium truncate"
                          style={{ color: 'var(--seep-text-dark)' }}
                        >
                          {doc.nome}
                        </p>
                        {doc.sigiloso && (
                          <Lock className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--seep-danger)' }} />
                        )}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
                          {doc.tipo}
                        </span>
                        <span className="text-xs flex items-center gap-1" style={{ color: 'var(--seep-text-med)' }}>
                          <Calendar className="w-3 h-3" />
                          {new Date(doc.data).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>

                    <Badge color={status.color}>
                      {status.label}
                    </Badge>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        className="p-2 rounded-lg hover:bg-[var(--seep-light-bg)] transition-colors"
                        title="Visualizar"
                      >
                        <Eye className="w-4 h-4" style={{ color: 'var(--seep-text-med)' }} />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-[var(--seep-light-bg)] transition-colors"
                        title="Download"
                      >
                        <Download className="w-4 h-4" style={{ color: 'var(--seep-text-med)' }} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardBody>
      </Card>

      {/* Access Notice */}
      <div
        className="flex items-start gap-3 p-4 rounded-lg border"
        style={{
          backgroundColor: 'rgba(198,169,77,0.05)',
          borderColor: 'rgba(198,169,77,0.2)',
        }}
      >
        <Lock className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--seep-gold)' }} />
        <div>
          <p className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)' }}>
            Acesso Restrito
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--seep-text-med)' }}>
            Documentos marcados com o ícone de cadeado contêm dados sigilosos e são reservados
            ao administrador. O acesso é registrado e auditado pelo sistema.
          </p>
        </div>
      </div>
    </div>
  );
}
