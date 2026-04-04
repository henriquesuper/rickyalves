'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  User,
  Building,
  Shield,
  AlertTriangle,
  ClipboardList,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Target,
} from 'lucide-react';
import Button from '../../components/ui/Button';
import Input, { Textarea, Select, Toggle, CheckboxGroup } from '../../components/ui/Input';
import Card, { CardBody } from '../../components/ui/Card';

const stepsMeta = [
  { title: 'Dados do Cliente', icon: User },
  { title: 'Objetivo', icon: Target },
  { title: 'Estrutura Física', icon: Building },
  { title: 'Segurança Atual', icon: Shield },
  { title: 'Riscos', icon: AlertTriangle },
  { title: 'Especificações', icon: ClipboardList },
  { title: 'Revisão', icon: CheckCircle },
];

const objetivoOptions = [
  { value: 'patrimonial', label: 'Segurança Patrimonial' },
  { value: 'eletronica', label: 'Segurança Eletrônica' },
  { value: 'controle_acesso', label: 'Controle de Acesso' },
  { value: 'monitoramento', label: 'Monitoramento' },
  { value: 'incendio', label: 'Prevenção de Incêndios' },
  { value: 'outros', label: 'Outros' },
];

const estadosBR = [
  { value: 'AC', label: 'AC' }, { value: 'AL', label: 'AL' }, { value: 'AM', label: 'AM' },
  { value: 'AP', label: 'AP' }, { value: 'BA', label: 'BA' }, { value: 'CE', label: 'CE' },
  { value: 'DF', label: 'DF' }, { value: 'ES', label: 'ES' }, { value: 'GO', label: 'GO' },
  { value: 'MA', label: 'MA' }, { value: 'MG', label: 'MG' }, { value: 'MS', label: 'MS' },
  { value: 'MT', label: 'MT' }, { value: 'PA', label: 'PA' }, { value: 'PB', label: 'PB' },
  { value: 'PE', label: 'PE' }, { value: 'PI', label: 'PI' }, { value: 'PR', label: 'PR' },
  { value: 'RJ', label: 'RJ' }, { value: 'RN', label: 'RN' }, { value: 'RO', label: 'RO' },
  { value: 'RR', label: 'RR' }, { value: 'RS', label: 'RS' }, { value: 'SC', label: 'SC' },
  { value: 'SE', label: 'SE' }, { value: 'SP', label: 'SP' }, { value: 'TO', label: 'TO' },
];

// ─── Risk Level Selector ────────────────────────────────────
function RiskLevel({ label, value, onChange }) {
  const levels = ['Baixo', 'Médio', 'Alto'];
  const colors = { Baixo: '#4A9B6E', Médio: '#8B2336', Alto: '#C94444' };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[var(--seep-text-dark)]">{label}</label>
      <div className="flex gap-2">
        {levels.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => onChange(l)}
            className="flex-1 py-2 text-xs font-bold rounded-lg border-2 transition-all duration-200"
            style={{
              borderColor: value === l ? colors[l] : 'var(--seep-border)',
              backgroundColor: value === l ? `${colors[l]}15` : 'transparent',
              color: value === l ? colors[l] : 'var(--seep-text-med)',
            }}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Section Heading ────────────────────────────────────────
function SectionHeading({ children }) {
  return (
    <p
      className="text-sm font-bold uppercase tracking-wider pt-4 pb-1 border-t border-[var(--seep-border)]"
      style={{ color: 'var(--seep-gold)', fontFamily: 'var(--font-montserrat)' }}
    >
      {children}
    </p>
  );
}

// ─── Stepper ────────────────────────────────────────────────
function Stepper({ current, steps }) {
  return (
    <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
      {steps.map((step, i) => {
        const isActive = i === current;
        const isDone = i < current;
        const Icon = step.icon;
        return (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5 min-w-[70px]">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: isDone
                    ? 'var(--seep-success)'
                    : isActive
                    ? 'var(--seep-gold)'
                    : 'var(--seep-light-bg)',
                  color: isDone || isActive ? '#FFF' : 'var(--seep-text-med)',
                }}
              >
                {isDone ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
              </div>
              <span
                className="text-[10px] font-medium text-center leading-tight"
                style={{ color: isActive ? 'var(--seep-gold)' : 'var(--seep-text-med)' }}
              >
                {step.title}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className="w-6 lg:w-12 h-0.5 mx-0.5"
                style={{
                  backgroundColor: i < current ? 'var(--seep-success)' : 'var(--seep-border)',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────
export default function DiagnosticoPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    // Step 0 - Dados do Cliente
    nome: '',
    cpfCnpj: '',
    responsavel: '',
    telefone: '',
    email: '',
    tipoLocal: 'residencia',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    // Step 1 - Objetivo da Avaliação
    objetivos: [],
    objetivosOutros: '',
    // Step 2 - Estrutura Física
    tipoConstrucao: '',
    pavimentos: '',
    area: '',
    muros: false,
    alturaMuros: '',
    portoes: 'manual',
    iluminacao: 'adequada',
    // Step 3 - Segurança Atual
    controlePessoas: false,
    controleVeiculos: false,
    identificacaoVisitantes: false,
    cameras: false,
    alarmes: false,
    sensores: false,
    fragilidadesAcesso: '',
    fragilidadesPerimetral: '',
    // Step 4 - Riscos
    criminalidade: 'Médio',
    historicoOcorrencias: '',
    riscoRoubo: 'Médio',
    riscoInvasao: 'Médio',
    riscoIncendio: 'Baixo',
    riscoFalhas: 'Baixo',
    riscoInfoSec: 'Baixo',
    areasSensiveis: '',
    controleAcessoInterno: false,
    fragilidadesInternos: '',
    fragilidadesExternos: '',
    // Step 5 - Especificações (Residência)
    horariosAusencia: '',
    moradores: '',
    criancasIdosos: false,
    empregados: false,
    fechadurasReforcadas: false,
    interfonePorteiro: false,
    camerasDetalhes: '',
    iluminacaoAutomatica: '',
    fragilidadesResidencia: '',
    // Step 5 - Especificações (Empresa)
    ramoAtividade: '',
    funcionarios: '',
    horarioFuncionamento: '',
    turnos: false,
    segurancaTerceirizada: false,
    monitoramento24h: false,
    controleCracha: false,
    controleEstoqueAtivos: false,
    riscoVazamentoInfo: false,
    riscoFraudesInternas: false,
    riscoAcessoNaoAutorizado: false,
    fragilidadesEmpresa: '',
    // Step 6 - Revisão
    observacoesGerais: '',
  });

  const update = (field, value) => setData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    setLoading(true);
    sessionStorage.setItem('seep-diagnostico', JSON.stringify(data));
    await new Promise((r) => setTimeout(r, 2500));
    router.push('/seep/admin/diagnostico/resultado');
  };

  const lastStep = stepsMeta.length - 1;

  // ─── Steps ──────────────────────────────────────────────
  const renderStep = () => {
    switch (step) {
      case 0: // Dados do Cliente
        return (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Nome / Razão Social" value={data.nome} onChange={(e) => update('nome', e.target.value)} placeholder="Nome completo ou razão social" />
              <Input label="CPF / CNPJ" value={data.cpfCnpj} onChange={(e) => update('cpfCnpj', e.target.value)} placeholder="000.000.000-00" />
              <Input label="Responsável" value={data.responsavel} onChange={(e) => update('responsavel', e.target.value)} placeholder="Nome do responsável" />
              <Input label="Telefone" value={data.telefone} onChange={(e) => update('telefone', e.target.value)} placeholder="(11) 99999-0000" />
              <Input label="E-mail" type="email" value={data.email} onChange={(e) => update('email', e.target.value)} placeholder="email@exemplo.com" />
              <Select
                label="Tipo de Local"
                value={data.tipoLocal}
                onChange={(e) => update('tipoLocal', e.target.value)}
                options={[
                  { value: 'residencia', label: 'Residência' },
                  { value: 'empresa', label: 'Empresa' },
                ]}
              />
            </div>
            <SectionHeading>Endereço</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input className="md:col-span-2" label="Endereço" value={data.endereco} onChange={(e) => update('endereco', e.target.value)} placeholder="Rua, Avenida..." />
              <Input label="Número" value={data.numero} onChange={(e) => update('numero', e.target.value)} placeholder="123" />
              <Input label="Complemento" value={data.complemento} onChange={(e) => update('complemento', e.target.value)} placeholder="Apto, Sala..." />
              <Input label="Bairro" value={data.bairro} onChange={(e) => update('bairro', e.target.value)} placeholder="Bairro" />
              <Input label="Cidade" value={data.cidade} onChange={(e) => update('cidade', e.target.value)} placeholder="Cidade" />
              <Select label="Estado" value={data.estado} onChange={(e) => update('estado', e.target.value)} options={estadosBR} />
              <Input label="CEP" value={data.cep} onChange={(e) => update('cep', e.target.value)} placeholder="00000-000" />
            </div>
          </div>
        );

      case 1: // Objetivo da Avaliação
        return (
          <div className="space-y-5">
            <p className="text-sm" style={{ color: 'var(--seep-text-med)' }}>
              Selecione os objetivos principais desta avaliação de segurança.
            </p>
            <CheckboxGroup
              label="Objetivo da Avaliação"
              options={objetivoOptions}
              selected={data.objetivos}
              onChange={(v) => update('objetivos', v)}
            />
            {data.objetivos.includes('outros') && (
              <Textarea
                label="Descreva outros objetivos"
                value={data.objetivosOutros}
                onChange={(e) => update('objetivosOutros', e.target.value)}
                placeholder="Descreva os objetivos adicionais..."
              />
            )}
          </div>
        );

      case 2: // Estrutura Física
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Select
              label="Tipo de Construção"
              value={data.tipoConstrucao}
              onChange={(e) => update('tipoConstrucao', e.target.value)}
              options={[
                { value: 'casa', label: 'Casa' },
                { value: 'apartamento', label: 'Apartamento' },
                { value: 'condominio', label: 'Condomínio' },
                { value: 'comercial', label: 'Prédio Comercial' },
                { value: 'galpao', label: 'Galpão / Depósito' },
              ]}
            />
            <Input label="Número de Pavimentos" type="number" value={data.pavimentos} onChange={(e) => update('pavimentos', e.target.value)} placeholder="Ex: 2" />
            <Input label="Área Aproximada (m²)" value={data.area} onChange={(e) => update('area', e.target.value)} placeholder="Ex: 350" />
            <Input label="Altura dos Muros (m)" value={data.alturaMuros} onChange={(e) => update('alturaMuros', e.target.value)} placeholder="Ex: 3" />
            <div className="flex flex-col gap-4">
              <Toggle label="Muros / Cercas" checked={data.muros} onChange={(e) => update('muros', e.target.checked)} />
            </div>
            <Select
              label="Portões"
              value={data.portoes}
              onChange={(e) => update('portoes', e.target.value)}
              options={[
                { value: 'manual', label: 'Manual' },
                { value: 'automatico', label: 'Automático' },
              ]}
            />
            <Select
              label="Iluminação Externa"
              value={data.iluminacao}
              onChange={(e) => update('iluminacao', e.target.value)}
              options={[
                { value: 'adequada', label: 'Adequada' },
                { value: 'deficiente', label: 'Deficiente' },
              ]}
            />
          </div>
        );

      case 3: // Segurança Atual
        return (
          <div className="space-y-6">
            <SectionHeading>Acesso e Controle</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Toggle label="Controle de entrada de pessoas" checked={data.controlePessoas} onChange={(e) => update('controlePessoas', e.target.checked)} />
              <Toggle label="Controle de veículos" checked={data.controleVeiculos} onChange={(e) => update('controleVeiculos', e.target.checked)} />
              <Toggle label="Identificação de visitantes" checked={data.identificacaoVisitantes} onChange={(e) => update('identificacaoVisitantes', e.target.checked)} />
            </div>
            <Textarea label="Fragilidades de Controle de Acesso" value={data.fragilidadesAcesso} onChange={(e) => update('fragilidadesAcesso', e.target.value)} placeholder="Descreva fragilidades de acesso e controle..." />

            <SectionHeading>Segurança Perimetral</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Toggle label="Câmeras" checked={data.cameras} onChange={(e) => update('cameras', e.target.checked)} />
              <Toggle label="Alarmes" checked={data.alarmes} onChange={(e) => update('alarmes', e.target.checked)} />
              <Toggle label="Sensores" checked={data.sensores} onChange={(e) => update('sensores', e.target.checked)} />
            </div>
            <Textarea label="Fragilidades Perimetrais" value={data.fragilidadesPerimetral} onChange={(e) => update('fragilidadesPerimetral', e.target.value)} placeholder="Descreva fragilidades perimetrais observadas..." />
          </div>
        );

      case 4: // Riscos
        return (
          <div className="space-y-6">
            <SectionHeading>Riscos Externos</SectionHeading>
            <RiskLevel label="Índice de criminalidade da região" value={data.criminalidade} onChange={(v) => update('criminalidade', v)} />
            <Textarea label="Histórico de ocorrências" value={data.historicoOcorrencias} onChange={(e) => update('historicoOcorrencias', e.target.value)} placeholder="Descreva ocorrências anteriores relevantes..." />
            <Textarea label="Fragilidades de Riscos Externos" value={data.fragilidadesExternos} onChange={(e) => update('fragilidadesExternos', e.target.value)} placeholder="Descreva fragilidades externas identificadas..." />

            <SectionHeading>Riscos Internos</SectionHeading>
            <Input label="Áreas sensíveis (cofre, estoque, servidores, etc.)" value={data.areasSensiveis} onChange={(e) => update('areasSensiveis', e.target.value)} placeholder="Descreva áreas sensíveis do local..." />
            <Toggle label="Controle de acesso interno" checked={data.controleAcessoInterno} onChange={(e) => update('controleAcessoInterno', e.target.checked)} />
            <Textarea label="Fragilidades de Riscos Internos" value={data.fragilidadesInternos} onChange={(e) => update('fragilidadesInternos', e.target.value)} placeholder="Descreva fragilidades internas identificadas..." />

            <SectionHeading>Classificação de Riscos</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <RiskLevel label="Roubo / Furto" value={data.riscoRoubo} onChange={(v) => update('riscoRoubo', v)} />
              <RiskLevel label="Invasão" value={data.riscoInvasao} onChange={(v) => update('riscoInvasao', v)} />
              <RiskLevel label="Incêndio" value={data.riscoIncendio} onChange={(v) => update('riscoIncendio', v)} />
              <RiskLevel label="Falhas Operacionais" value={data.riscoFalhas} onChange={(v) => update('riscoFalhas', v)} />
              <RiskLevel label="Segurança da Informação" value={data.riscoInfoSec} onChange={(v) => update('riscoInfoSec', v)} />
            </div>
          </div>
        );

      case 5: // Especificações
        return data.tipoLocal === 'residencia' ? (
          <div className="space-y-6">
            <SectionHeading>Rotina dos Moradores</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Horários de ausência" value={data.horariosAusencia} onChange={(e) => update('horariosAusencia', e.target.value)} placeholder="Ex: 07:00 às 19:00" />
              <Input label="Número de moradores" type="number" value={data.moradores} onChange={(e) => update('moradores', e.target.value)} placeholder="Ex: 4" />
              <Toggle label="Presença de crianças / idosos" checked={data.criancasIdosos} onChange={(e) => update('criancasIdosos', e.target.checked)} />
              <Toggle label="Empregados domésticos" checked={data.empregados} onChange={(e) => update('empregados', e.target.checked)} />
            </div>

            <SectionHeading>Segurança Residencial</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Toggle label="Fechaduras reforçadas" checked={data.fechadurasReforcadas} onChange={(e) => update('fechadurasReforcadas', e.target.checked)} />
              <Toggle label="Interfone / Porteiro eletrônico" checked={data.interfonePorteiro} onChange={(e) => update('interfonePorteiro', e.target.checked)} />
              <Input label="Câmeras externas / internas (detalhes)" value={data.camerasDetalhes} onChange={(e) => update('camerasDetalhes', e.target.value)} placeholder="Quantidade, localização..." />
              <Input label="Iluminação automática (detalhes)" value={data.iluminacaoAutomatica} onChange={(e) => update('iluminacaoAutomatica', e.target.value)} placeholder="Sensores, temporizadores..." />
            </div>
            <Textarea label="Fragilidades específicas" value={data.fragilidadesResidencia} onChange={(e) => update('fragilidadesResidencia', e.target.value)} placeholder="Descreva fragilidades específicas da residência..." />
          </div>
        ) : (
          <div className="space-y-6">
            <SectionHeading>Operação</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Ramo de atividade" value={data.ramoAtividade} onChange={(e) => update('ramoAtividade', e.target.value)} placeholder="Ex: Tecnologia" />
              <Input label="Número de funcionários" type="number" value={data.funcionarios} onChange={(e) => update('funcionarios', e.target.value)} placeholder="Ex: 50" />
              <Input label="Horário de funcionamento" value={data.horarioFuncionamento} onChange={(e) => update('horarioFuncionamento', e.target.value)} placeholder="Ex: 08:00 às 18:00" />
              <Toggle label="Trabalho em turnos" checked={data.turnos} onChange={(e) => update('turnos', e.target.checked)} />
            </div>

            <SectionHeading>Controle e Segurança</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Toggle label="Controle de acesso por crachá" checked={data.controleCracha} onChange={(e) => update('controleCracha', e.target.checked)} />
              <Toggle label="Segurança terceirizada" checked={data.segurancaTerceirizada} onChange={(e) => update('segurancaTerceirizada', e.target.checked)} />
              <Toggle label="Monitoramento 24h" checked={data.monitoramento24h} onChange={(e) => update('monitoramento24h', e.target.checked)} />
              <Toggle label="Controle de estoque / ativos" checked={data.controleEstoqueAtivos} onChange={(e) => update('controleEstoqueAtivos', e.target.checked)} />
            </div>

            <SectionHeading>Riscos Corporativos</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Toggle label="Vazamento de informações" checked={data.riscoVazamentoInfo} onChange={(e) => update('riscoVazamentoInfo', e.target.checked)} />
              <Toggle label="Fraudes internas" checked={data.riscoFraudesInternas} onChange={(e) => update('riscoFraudesInternas', e.target.checked)} />
              <Toggle label="Acesso não autorizado" checked={data.riscoAcessoNaoAutorizado} onChange={(e) => update('riscoAcessoNaoAutorizado', e.target.checked)} />
            </div>
            <Textarea label="Fragilidades específicas" value={data.fragilidadesEmpresa} onChange={(e) => update('fragilidadesEmpresa', e.target.value)} placeholder="Descreva fragilidades específicas da empresa..." />
          </div>
        );

      case 6: // Revisão
        return (
          <div className="space-y-6">
            <SummaryBlock title="Dados do Cliente">
              <SummaryItem label="Nome" value={data.nome} />
              <SummaryItem label="CPF/CNPJ" value={data.cpfCnpj} />
              <SummaryItem label="Responsável" value={data.responsavel} />
              <SummaryItem label="Telefone" value={data.telefone} />
              <SummaryItem label="E-mail" value={data.email} />
              <SummaryItem label="Tipo de local" value={data.tipoLocal === 'residencia' ? 'Residência' : 'Empresa'} />
            </SummaryBlock>

            <SummaryBlock title="Endereço">
              <SummaryItem label="Endereço" value={[data.endereco, data.numero].filter(Boolean).join(', ')} />
              <SummaryItem label="Complemento" value={data.complemento} />
              <SummaryItem label="Bairro" value={data.bairro} />
              <SummaryItem label="Cidade/UF" value={[data.cidade, data.estado].filter(Boolean).join(' - ')} />
              <SummaryItem label="CEP" value={data.cep} />
            </SummaryBlock>

            <SummaryBlock title="Objetivo da Avaliação">
              <SummaryItem
                label="Objetivos"
                value={data.objetivos.map((o) => objetivoOptions.find((opt) => opt.value === o)?.label).filter(Boolean).join(', ')}
              />
              {data.objetivos.includes('outros') && (
                <SummaryItem label="Outros" value={data.objetivosOutros} />
              )}
            </SummaryBlock>

            <SummaryBlock title="Segurança Atual">
              <SummaryItem label="Controle de pessoas" value={data.controlePessoas ? 'Sim' : 'Não'} />
              <SummaryItem label="Controle de veículos" value={data.controleVeiculos ? 'Sim' : 'Não'} />
              <SummaryItem label="Câmeras" value={data.cameras ? 'Sim' : 'Não'} />
              <SummaryItem label="Alarmes" value={data.alarmes ? 'Sim' : 'Não'} />
              <SummaryItem label="Sensores" value={data.sensores ? 'Sim' : 'Não'} />
            </SummaryBlock>

            <SummaryBlock title="Riscos">
              <SummaryItem label="Criminalidade" value={data.criminalidade} />
              <SummaryItem label="Roubo/Furto" value={data.riscoRoubo} />
              <SummaryItem label="Invasão" value={data.riscoInvasao} />
              <SummaryItem label="Incêndio" value={data.riscoIncendio} />
              <SummaryItem label="Falhas Operacionais" value={data.riscoFalhas} />
              <SummaryItem label="Seg. da Informação" value={data.riscoInfoSec} />
              <SummaryItem label="Áreas sensíveis" value={data.areasSensiveis} />
              <SummaryItem label="Controle acesso interno" value={data.controleAcessoInterno ? 'Sim' : 'Não'} />
            </SummaryBlock>

            <Textarea
              label="Observações Gerais"
              value={data.observacoesGerais}
              onChange={(e) => update('observacoesGerais', e.target.value)}
              placeholder="Observações adicionais sobre o diagnóstico..."
            />
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1
          className="text-2xl font-bold"
          style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
        >
          Diagnóstico de Risco
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--seep-text-med)' }}>
          Preencha as informações para gerar uma análise completa de segurança.
        </p>
      </div>

      <Stepper current={step} steps={stepsMeta} />

      <Card>
        <CardBody className="!p-8">
          <h2
            className="text-lg font-bold mb-6"
            style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
          >
            {stepsMeta[step].title}
          </h2>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2
                className="w-12 h-12 animate-spin mb-4"
                style={{ color: 'var(--seep-gold)' }}
              />
              <p
                className="text-lg font-medium"
                style={{ color: 'var(--seep-text-dark)' }}
              >
                Analisando dados de segurança...
              </p>
              <p className="text-sm mt-2" style={{ color: 'var(--seep-text-med)' }}>
                Nosso sistema de inteligência está processando as informações.
              </p>
            </div>
          ) : (
            renderStep()
          )}

          {/* Navigation */}
          {!loading && (
            <div className="flex justify-between mt-8 pt-6 border-t border-[var(--seep-border)]">
              <Button
                variant="ghost"
                onClick={() => setStep((s) => s - 1)}
                disabled={step === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Anterior
              </Button>

              {step < lastStep ? (
                <Button onClick={() => setStep((s) => s + 1)}>
                  Próximo
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button size="lg" onClick={handleSubmit}>
                  Gerar Análise de Risco
                </Button>
              )}
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

// ─── Summary Components ─────────────────────────────────────
function SummaryBlock({ title, children }) {
  return (
    <div className="rounded-lg border border-[var(--seep-border)] overflow-hidden">
      <div
        className="px-4 py-2 text-sm font-bold"
        style={{ backgroundColor: 'var(--seep-light-bg)', color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
      >
        {title}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 p-4">{children}</div>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>
        {label}
      </p>
      <p className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)' }}>
        {value || '—'}
      </p>
    </div>
  );
}
