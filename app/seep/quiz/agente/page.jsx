'use client';

import { useState } from 'react';
import { Shield, CheckCircle, Send } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input, { Textarea, Select } from '../../components/ui/Input';
import Card, { CardBody } from '../../components/ui/Card';

const certificacaoOptions = [
  'Proteção VIP',
  'Direção Evasiva',
  'Tiro Tático',
  'APH',
  'Inteligência',
  'Gestão de Crises',
];

export default function QuizAgentePage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    nome: '',
    telefone: '',
    email: '',
    experiencia: '',
    escolaridade: '',
    cursos: '',
    certificacoes: [],
    armamentoProprio: '',
    statusAtual: '',
    disponibilidade: '',
    cidadeUf: '',
  });

  const update = (field, value) => setData((prev) => ({ ...prev, [field]: value }));

  const toggleCert = (cert) => {
    setData((prev) => ({
      ...prev,
      certificacoes: prev.certificacoes.includes(cert)
        ? prev.certificacoes.filter((c) => c !== cert)
        : [...prev.certificacoes, cert],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Try to save to Firestore
    try {
      const res = await fetch('/api/seep/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {
      // OK for demo
    }
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
    setLoading(false);
  };

  if (sent) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6"
        style={{ backgroundColor: 'var(--seep-warm-bg)' }}
      >
        <div className="text-center max-w-md">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: 'var(--seep-light-gold)' }}
          >
            <CheckCircle className="w-10 h-10" style={{ color: 'var(--seep-gold)' }} />
          </div>
          <h1
            className="text-2xl font-bold mb-3"
            style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
          >
            Dados recebidos com sucesso
          </h1>
          <p className="text-sm mb-6" style={{ color: 'var(--seep-text-med)' }}>
            A equipe SEEP analisará seu perfil e entrará em contato em breve.
            Obrigado pelo interesse em fazer parte do nosso time.
          </p>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
            style={{ backgroundColor: 'var(--seep-light-gold)', color: '#6B1A2A' }}
          >
            <Shield className="w-4 h-4" />
            S.E.E.P. — Serviço Executivo de Eficiência Pessoal
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-6" style={{ backgroundColor: 'var(--seep-warm-bg)' }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-3xl font-bold tracking-wider mb-2"
            style={{ color: 'var(--seep-gold)', fontFamily: 'var(--font-montserrat)' }}
          >
            S.E.E.P.
          </h1>
          <h2
            className="text-xl font-bold mb-2"
            style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
          >
            Triagem de Agente
          </h2>
          <p className="text-sm" style={{ color: 'var(--seep-text-med)' }}>
            Preencha seus dados para avaliação. Todas as informações são confidenciais.
          </p>
        </div>

        <Card>
          <CardBody className="p-8!">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input label="Nome completo *" required value={data.nome} onChange={(e) => update('nome', e.target.value)} placeholder="Seu nome completo" />
                <Input label="Telefone *" required value={data.telefone} onChange={(e) => update('telefone', e.target.value)} placeholder="(11) 99999-0000" />
                <Input label="E-mail *" type="email" required value={data.email} onChange={(e) => update('email', e.target.value)} placeholder="seu@email.com" />
                <Input label="Anos de experiência" type="number" value={data.experiencia} onChange={(e) => update('experiencia', e.target.value)} placeholder="Ex: 10" />
                <Select
                  label="Escolaridade"
                  value={data.escolaridade}
                  onChange={(e) => update('escolaridade', e.target.value)}
                  options={[
                    { value: 'fundamental', label: 'Ensino Fundamental' },
                    { value: 'medio', label: 'Ensino Médio' },
                    { value: 'superior', label: 'Ensino Superior' },
                    { value: 'pos', label: 'Pós-graduação' },
                  ]}
                />
                <Input label="Cidade / UF" value={data.cidadeUf} onChange={(e) => update('cidadeUf', e.target.value)} placeholder="Ex: São Paulo, SP" />
              </div>

              <Textarea
                label="Cursos de segurança executiva"
                value={data.cursos}
                onChange={(e) => update('cursos', e.target.value)}
                placeholder="Liste os cursos relevantes que você possui..."
              />

              {/* Certifications checkboxes */}
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--seep-text-dark)' }}>
                  Certificações
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {certificacaoOptions.map((cert) => (
                    <label
                      key={cert}
                      className="flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all duration-200"
                      style={{
                        borderColor: data.certificacoes.includes(cert) ? 'var(--seep-gold)' : 'var(--seep-border)',
                        backgroundColor: data.certificacoes.includes(cert) ? 'rgba(139,35,54,0.08)' : 'transparent',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={data.certificacoes.includes(cert)}
                        onChange={() => toggleCert(cert)}
                        className="sr-only"
                      />
                      <div
                        className="w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all"
                        style={{
                          borderColor: data.certificacoes.includes(cert) ? 'var(--seep-gold)' : 'var(--seep-border)',
                          backgroundColor: data.certificacoes.includes(cert) ? 'var(--seep-gold)' : 'transparent',
                        }}
                      >
                        {data.certificacoes.includes(cert) && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-xs font-medium" style={{ color: 'var(--seep-text-dark)' }}>
                        {cert}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Select
                  label="Armamento próprio"
                  value={data.armamentoProprio}
                  onChange={(e) => update('armamentoProprio', e.target.value)}
                  options={[
                    { value: 'sim', label: 'Sim' },
                    { value: 'nao', label: 'Não' },
                  ]}
                />
                <Select
                  label="Status atual"
                  value={data.statusAtual}
                  onChange={(e) => update('statusAtual', e.target.value)}
                  options={[
                    { value: 'ativo', label: 'Ativo' },
                    { value: 'aposentado', label: 'Aposentado' },
                  ]}
                />
                <Select
                  label="Disponibilidade"
                  value={data.disponibilidade}
                  onChange={(e) => update('disponibilidade', e.target.value)}
                  options={[
                    { value: 'integral', label: 'Integral' },
                    { value: 'parcial', label: 'Parcial' },
                    { value: 'sob_demanda', label: 'Sob demanda' },
                  ]}
                />
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full" type="submit" disabled={loading}>
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar dados
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
