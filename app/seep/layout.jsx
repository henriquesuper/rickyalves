import SeepClientLayout from './SeepClientLayout';

export const metadata = {
  title: 'S.E.E.P. – Serviço Executivo de Eficiência Pessoal',
  description:
    'Plataforma de segurança executiva personalizada – gestão de operações, agentes e protocolos em tempo real.',
  openGraph: {
    title: 'S.E.E.P.',
    description: 'Serviço Executivo de Eficiência Pessoal',
    url: 'https://www.rickyalves.com/seep',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S.E.E.P.',
    description: 'Serviço Executivo de Eficiência Pessoal',
  },
};

export default function SeepLayout({ children }) {
  return <SeepClientLayout>{children}</SeepClientLayout>;
}
