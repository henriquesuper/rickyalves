'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import {
  Shield,
  ShieldCheck,
  Car,
  Brain,
  UserCheck,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Search,
  FileText,
  Radio,
  Eye,
  Crosshair,
  Zap,
  Crown,
  Target,
  Lock,
  Clock,
  Briefcase,
  Route,
  HeartHandshake,
  Users,
  Lightbulb,
  BookOpen,
  Globe,
  RefreshCw,
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Button from './components/ui/Button';
import Link from 'next/link';

// ─── Animation Variants ─────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// ─── Animated Counter Component ─────────────────────────────
function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value}{suffix}
        </motion.span>
      ) : '0'}
    </motion.span>
  );
}

// ─── Gold Divider Component ─────────────────────────────────
function GoldDivider() {
  return (
    <motion.div
      className="w-20 h-0.5 mx-auto"
      style={{ backgroundColor: 'var(--seep-gold)' }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
    />
  );
}

// ─── Hero Section ───────────────────────────────────────────
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0E' }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        >
          <source src="/seep/seep_video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,10,14,0.4) 0%, rgba(10,10,14,0.7) 50%, rgba(10,10,14,0.95) 100%)',
          }}
        />
      </div>

      {/* Animated accent line top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] z-20"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #8B2336 50%, transparent 100%)' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,14,0.6) 100%)',
        }}
      />

      <motion.div className="relative z-10 w-full max-w-md md:max-w-5xl mx-auto px-5 md:px-6 pt-16 md:pt-0 text-center" style={{ opacity }}>
        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-[0.08em] sm:tracking-[0.12em] md:tracking-wider mb-3 md:mb-2"
            style={{ fontFamily: 'var(--font-montserrat)', color: '#FFFFFF' }}
          >
            {'S.E.E.P.'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.06, ease: [0.25, 0.4, 0.25, 1] }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.h2
          className="text-[11px] sm:text-xs md:text-xl font-medium tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.25em] uppercase mb-4 md:mb-3"
          style={{ color: '#B8B8C4', fontFamily: 'var(--font-montserrat)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Serviço Executivo | Eficiência Pessoal
        </motion.h2>

        <motion.div
          className="w-20 md:w-24 h-px mx-auto mb-6 md:mb-8"
          style={{ backgroundColor: 'rgba(139,35,54,0.5)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />

        <motion.p
          className="text-lg sm:text-xl md:text-xl mb-10 md:mb-12 max-w-[19rem] sm:max-w-xl md:max-w-2xl mx-auto leading-[1.45] md:leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.6)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          Mobilidade segura, proteção executiva e eficiência pessoal
          com a filosofia <span className="font-semibold text-white">Silverback</span> —
          presença firme, resposta calibrada, excelência inabalável.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm sm:max-w-none mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <a href="#silverback" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">
              Descubra a Filosofia Silverback
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <Link href="/seep/login" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Área do contratante
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 rounded-full"
            style={{ backgroundColor: 'rgba(139,35,54,0.7)' }}
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// ─── Services Section ───────────────────────────────────────
const services = [
  {
    icon: Car,
    title: 'Condução Evasiva',
    desc: 'Condução tática defensiva e evasiva com planejamento de rotas, contra-vigilância veicular e protocolos de evasão.',
  },
  {
    icon: ShieldCheck,
    title: 'Proteção Direta',
    desc: 'Agentes de segurança pessoal com treinamento avançado para proteção executiva e familiar em ambientes dinâmicos.',
  },
  {
    icon: Route,
    title: 'Inteligência de Itinerário',
    desc: 'Monitoramento de rotas em tempo real, sincronia com compromissos e pontualidade absoluta em deslocamentos.',
  },
  {
    icon: Briefcase,
    title: 'Concierge Executivo',
    desc: 'Gestão de reservas, triagem de prestadores, apoio a tarefas operacionais — devolvemos tempo ao executivo.',
  },
];

function ServicesSection() {
  return (
    <section id="servicos" className="py-28 px-6" style={{ backgroundColor: 'var(--seep-warm-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h3
            className="text-sm font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: 'var(--seep-gold)' }}
          >
            Serviços
          </h3>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--seep-text-dark)' }}
          >
            O Agente Dinâmico
          </h2>
          <GoldDivider />
          <p className="mt-6 text-base max-w-2xl mx-auto" style={{ color: 'var(--seep-text-med)' }}>
            Um profissional multifuncional que integra mobilidade, estratégia e proteção.
            Disciplina, postura, discrição e capacidade de percepção de riscos com
            tomada de decisão real, analítica e preventiva.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-white rounded-xl p-8 border border-(--seep-border) group relative overflow-hidden"
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(139,35,54,0.06) 0%, transparent 60%)' }}
              />
              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--seep-light-gold)' }}
                  whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                >
                  <s.icon className="w-7 h-7" style={{ color: 'var(--seep-gold)' }} />
                </motion.div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--seep-text-med)' }}>
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Silverback Philosophy Section ──────────────────────────
function SilverbackSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="silverback" ref={ref} className="relative py-32 px-6 overflow-hidden" style={{ backgroundColor: 'var(--seep-dark)' }}>
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,35,54,0.04) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div style={{ y: yText }}>
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <h3
                className="text-sm font-bold tracking-[0.3em] uppercase mb-3"
                style={{ color: 'var(--seep-gold)' }}
              >
                Filosofia
              </h3>
              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-montserrat)', lineHeight: 1.1 }}
              >
                A Filosofia
                <br />
                <span style={{ color: 'var(--seep-gold)' }}>Silverback</span>
              </h2>
              <motion.div
                className="w-16 h-0.5 mb-8"
                style={{ backgroundColor: 'var(--seep-gold)' }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            <motion.div
              variants={slideFromLeft}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <p className="text-base leading-relaxed mb-6" style={{ color: '#B0B0C0' }}>
                Assim como o cão-guia é treinado para <strong className="text-white">proteger e não apenas obedecer</strong>,
                o Agente Dinâmico da SANTEEX atua com <strong className="text-white">autonomia, inteligência e responsabilidade</strong>.
                O diferencial operacional está na atuação em ambientes dinâmicos e imprevisíveis, com leitura constante do cenário.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#B0B0C0' }}>
                O termo &ldquo;Silverback&rdquo; vem do gorila-das-costas-prateadas — o macho dominante
                do grupo. Ele não lidera pelo medo, mas pela <strong className="text-white">presença imponente</strong> e
                pela <strong className="text-white">calma sob pressão</strong>. Quando um Silverback se levanta,
                o silêncio domina a selva.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#9A9AB0' }}>
                <strong style={{ color: 'var(--seep-gold)' }}>Antecipar é proteger.</strong>{' '}
                O Serviço Executivo de Eficiência Pessoal representa a evolução da segurança moderna:
                integra mobilidade, estratégia e proteção — prevenção acima da reação,
                eficiência em deslocamentos críticos.
              </p>
            </motion.div>

            <motion.blockquote
              className="border-l-4 pl-6 py-3"
              style={{ borderColor: 'var(--seep-gold)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="text-xl italic leading-relaxed" style={{ color: 'var(--seep-light-gold)' }}>
                &ldquo;Ser um Silverback não é sobre ter a voz mais alta,
                mas sobre ter a presença mais firme.&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Silverback visual */}
          <motion.div
            className="flex justify-center"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="relative">
              {/* Glow behind logo */}
              <div
                className="absolute inset-0 blur-3xl opacity-20"
                style={{
                  background: 'radial-gradient(circle, rgba(139,35,54,0.6) 0%, transparent 70%)',
                }}
              />

              {/* Logo */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              >
                <Image
                  src="/seep/seep_black_bg.png"
                  alt="SANTEEX Silverback"
                  width={320}
                  height={320}
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Silverback Characteristics Section ─────────────────────
const characteristics = [
  {
    icon: Eye,
    title: 'Calma Sob Fogo',
    subtitle: 'Controle absoluto',
    desc: 'O Silverback não reage por impulso. Cada movimento é calculado. Sob pressão, a calma é a arma mais poderosa — e a diferença entre proteger e falhar.',
    color: '#8B2336',
  },
  {
    icon: Shield,
    title: 'Proteção como Propósito',
    subtitle: 'Missão inegociável',
    desc: 'Não é um trabalho. É uma vocação. O Silverback existe para garantir que quem está sob sua guarda volte para casa em segurança, todos os dias.',
    color: '#4A9B6E',
  },
  {
    icon: Crosshair,
    title: 'Visão Estratégica',
    subtitle: 'Antecipação constante',
    desc: 'Enxerga o que outros não veem. Mapeia riscos antes que se materializem. Age antes que a ameaça se torne perigo — prevenção é a essência da proteção.',
    color: '#5B8DEF',
  },
];

function CharacteristicsSection() {
  return (
    <section className="py-28 px-6" style={{ backgroundColor: '#0C0C10' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h3
            className="text-sm font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: 'var(--seep-gold)' }}
          >
            Características
          </h3>
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            O DNA do Silverback
          </h2>
          <motion.div
            className="w-20 h-0.5 mx-auto"
            style={{ backgroundColor: 'var(--seep-gold)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characteristics.map((c, i) => (
            <motion.div
              key={c.title}
              className="relative group"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                className="rounded-2xl p-8 h-full border relative overflow-hidden"
                style={{
                  backgroundColor: 'rgba(20,20,28,0.6)',
                  borderColor: 'rgba(139,35,54,0.1)',
                }}
                whileHover={{
                  borderColor: 'rgba(139,35,54,0.3)',
                  transition: { duration: 0.3 },
                }}
              >
                {/* Top accent */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: c.color, scaleX: 0, transformOrigin: 'left' }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${c.color}15` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <c.icon className="w-6 h-6" style={{ color: c.color }} />
                  </motion.div>
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase mb-2" style={{ color: c.color }}>
                    {c.subtitle}
                  </p>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9A9AB0' }}>
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Competências Section ───────────────────────────────────
const competencias = [
  { icon: HeartHandshake, label: 'Ética', desc: 'Integridade como base de cada decisão' },
  { icon: Users, label: 'Trabalho em Equipe', desc: 'Sinergia operacional coordenada' },
  { icon: Brain, label: 'Inteligência Emocional', desc: 'Controle sob pressão extrema' },
  { icon: Lightbulb, label: 'Criatividade', desc: 'Soluções táticas não convencionais' },
  { icon: Shield, label: 'Resiliência', desc: 'Firmeza diante da adversidade' },
  { icon: UserCheck, label: 'Liderança', desc: 'Comando com autoridade natural' },
  { icon: Target, label: 'Resolução de Problemas', desc: 'Análise rápida, ação precisa' },
  { icon: Eye, label: 'Pensamento Crítico', desc: 'Avaliação constante do cenário' },
  { icon: BookOpen, label: 'Aprendizagem Ativa', desc: 'Evolução contínua e adaptável' },
  { icon: Globe, label: 'Diversidade Cultural', desc: 'Atuação em qualquer contexto' },
  { icon: RefreshCw, label: 'Adaptabilidade', desc: 'Resposta fluida ao inesperado' },
  { icon: Lock, label: 'Autoconhecimento', desc: 'Consciência total de capacidades' },
];

function CompetenciasSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden" style={{ backgroundColor: 'var(--seep-dark)' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, var(--seep-gold) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, var(--seep-gold) 0%, transparent 70%)' }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(139,35,54,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,35,54,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h3
            className="text-sm font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: 'var(--seep-gold)' }}
          >
            Valorização
          </h3>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-montserrat)', color: '#FFFFFF' }}
          >
            Competências do Agente
          </h2>
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="h-px w-12" style={{ backgroundColor: 'rgba(139,35,54,0.3)' }} />
            <div className="w-2 h-2 rotate-45" style={{ backgroundColor: 'var(--seep-gold)' }} />
            <div className="h-px w-12" style={{ backgroundColor: 'rgba(139,35,54,0.3)' }} />
          </div>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Observando sempre postura e disciplina, valorizamos as competências
            que formam o profissional de excelência.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {competencias.map((c, i) => (
            <motion.div
              key={c.label}
              className="group relative flex items-center gap-4 p-5 rounded-xl border transition-all duration-500 cursor-default"
              variants={scaleIn}
              custom={i}
              whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
              style={{
                backgroundColor: 'rgba(139,35,54,0.03)',
                borderColor: 'rgba(139,35,54,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(139,35,54,0.08)';
                e.currentTarget.style.borderColor = 'rgba(139,35,54,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(139,35,54,0.03)';
                e.currentTarget.style.borderColor = 'rgba(139,35,54,0.1)';
              }}
            >
              {/* Gold number index */}
              <span
                className="absolute top-2.5 right-3.5 text-[10px] font-bold tracking-wider"
                style={{ color: 'rgba(139,35,54,0.15)', fontFamily: 'var(--font-mono)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(139,35,54,0.15) 0%, rgba(139,35,54,0.05) 100%)',
                  border: '1px solid rgba(139,35,54,0.15)',
                }}
              >
                <c.icon className="w-5 h-5" style={{ color: 'var(--seep-gold)' }} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h4
                  className="text-sm font-bold mb-0.5"
                  style={{ color: '#FFFFFF', fontFamily: 'var(--font-montserrat)' }}
                >
                  {c.label}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          className="mt-16 flex items-center justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,35,54,0.3))' }} />
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: 'rgba(139,35,54,0.4)' }}
            >
              12 Competências Fundamentais
            </span>
            <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, rgba(139,35,54,0.3), transparent)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Despertar do Silverback Section ────────────────────────
function DespertarSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ backgroundColor: 'var(--seep-dark)' }}>
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139,35,54,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Crown className="w-10 h-10 mx-auto mb-6" style={{ color: 'var(--seep-gold)', opacity: 0.6 }} />
        </motion.div>

        <motion.h3
          className="text-sm font-bold tracking-[0.4em] uppercase mb-6"
          style={{ color: 'var(--seep-gold)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          O Despertar do Silverback
        </motion.h3>

        <motion.h2
          className="text-2xl md:text-4xl font-bold text-white mb-10 leading-snug"
          style={{ fontFamily: 'var(--font-montserrat)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          &ldquo;Não é um cargo.
          <br />
          <span style={{ color: 'var(--seep-gold)' }}>É um chamado.&rdquo;</span>
        </motion.h2>

        <motion.div
          className="w-16 h-px mx-auto mb-10"
          style={{ backgroundColor: 'rgba(139,35,54,0.4)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.p
          className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto"
          style={{ color: '#B0B0C0' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Tornar-se um Silverback não acontece da noite para o dia. É o resultado de
          anos de disciplina, treinamento e decisões difíceis. É acordar todos os dias
          com a certeza de que alguém depende da sua excelência para estar seguro.
        </motion.p>

        <motion.p
          className="text-base leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ color: '#8B8BA0' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          O Silverback carrega o peso da responsabilidade sem reclamar. Não busca
          reconhecimento — busca resultados. Quando todos entram em pânico, ele é a
          âncora. Quando o inesperado acontece, ele já antecipou.
        </motion.p>

        <motion.blockquote
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative py-8 px-10 rounded-2xl" style={{
            background: 'linear-gradient(135deg, rgba(139,35,54,0.08) 0%, rgba(139,35,54,0.02) 100%)',
            border: '1px solid rgba(139,35,54,0.15)',
          }}>
            <div
              className="absolute top-4 left-6 text-5xl leading-none"
              style={{ color: 'rgba(139,35,54,0.2)', fontFamily: 'Georgia, serif' }}
            >
              &ldquo;
            </div>
            <p
              className="text-xl md:text-2xl italic leading-relaxed relative z-10"
              style={{ color: 'var(--seep-light-gold)', fontFamily: 'var(--font-montserrat)' }}
            >
              Não é sobre fazer muito...
              <br />
              é sobre nunca parar de fazer.
            </p>
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}

// ─── Pillars Section — Os 3 Pilares Reais da SANTEEX ────────
const pilares = [
  {
    icon: Car,
    title: 'Mobilidade Segura',
    num: '01',
    desc: 'Condução veicular evasiva e tática. Gestão técnica de ativos — manutenção e mecânica. Planejamento tático de rotas e protocolos de evasão para deslocamentos de alto risco.',
  },
  {
    icon: Clock,
    title: 'Logística e Gestão de Tempo',
    num: '02',
    desc: 'Elaboração de relatórios de viabilidade para deslocamentos complexos. Monitoramento de rotas em tempo real para garantir pontualidade absoluta. Sincronia total com compromissos.',
  },
  {
    icon: Briefcase,
    title: 'Concierge Pessoal Executivo',
    num: '03',
    desc: 'Assunção de tarefas burocráticas e operacionais do executivo. Gestão de reservas e triagem de prestadores de serviço. Devolvemos tempo ao cliente para que foque na tomada de decisão.',
  },
];

function PillarsSection() {
  return (
    <section className="py-28 px-6" style={{ backgroundColor: 'var(--seep-warm-bg)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h3
            className="text-sm font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: 'var(--seep-gold)' }}
          >
            Estrutura
          </h3>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--seep-text-dark)' }}
          >
            Os 3 Pilares da SANTEEX
          </h2>
          <GoldDivider />
        </motion.div>

        <div className="space-y-8">
          {pilares.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-white rounded-2xl overflow-hidden border border-(--seep-border)"
              variants={i % 2 === 0 ? slideFromLeft : slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
            >
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Number accent */}
                <div
                  className="flex items-center justify-center px-8 py-6 md:py-0 md:min-w-[140px]"
                  style={{
                    background: 'linear-gradient(135deg, #141418 0%, #1A1A22 100%)',
                  }}
                >
                  <div className="text-center">
                    <span
                      className="text-4xl md:text-5xl font-bold block"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--seep-gold)', opacity: 0.8 }}
                    >
                      {p.num}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-8 md:p-10 flex items-center gap-6">
                  <motion.div
                    className="hidden md:flex w-14 h-14 rounded-xl items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--seep-light-gold)' }}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <p.icon className="w-7 h-7" style={{ color: 'var(--seep-gold)' }} />
                  </motion.div>
                  <div>
                    <h3
                      className="text-xl md:text-2xl font-bold mb-2"
                      style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--seep-text-dark)' }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--seep-text-med)' }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mentalidade SEEP Section ───────────────────────────────
const mentalidade = [
  'Organização Absoluta',
  'Tomada de Decisão Eficiente',
  'Controle Operacional',
  'Disciplina Pessoal',
  'Gestão de Rotina',
  'Aumento de Performance',
  'Solução Estrutural de Problemas',
  'Comportamento de Alto Padrão',
  'Transparência e Direção',
];

function MentalidadeSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#0C0C10' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h3
            className="text-sm font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: 'var(--seep-gold)' }}
          >
            Mentalidade
          </h3>
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            A Mentalidade S.E.E.P.
          </h2>
          <motion.div
            className="w-20 h-0.5 mx-auto"
            style={{ backgroundColor: 'var(--seep-gold)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {mentalidade.map((m, i) => (
            <motion.div
              key={m}
              className="flex items-center gap-3 px-5 py-4 rounded-xl border"
              style={{
                borderColor: 'rgba(139,35,54,0.15)',
                backgroundColor: 'rgba(20,20,28,0.5)',
              }}
              variants={fadeUp}
              custom={i}
              whileHover={{
                borderColor: 'rgba(139,35,54,0.4)',
                backgroundColor: 'rgba(139,35,54,0.05)',
                transition: { duration: 0.3 },
              }}
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: 'var(--seep-gold)' }}
              />
              <span className="text-sm font-medium text-white">{m}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Values Section ─────────────────────────────────────────
const valores = ['RESPEITO', 'CONFIANÇA', 'LEALDADE', 'TRABALHO'];

function ValuesSection() {
  return (
    <section className="py-20 px-6 overflow-hidden" style={{ backgroundColor: 'var(--seep-light-bg)' }}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3
            className="text-sm font-bold tracking-[0.3em] uppercase mb-8"
            style={{ color: 'var(--seep-gold)' }}
          >
            Nossos Valores
          </h3>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 md:gap-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {valores.map((v, i) => (
            <motion.div
              key={v}
              className="flex items-center"
              variants={scaleIn}
              custom={i}
            >
              <motion.span
                className="text-2xl md:text-5xl font-bold tracking-widest px-4 md:px-6"
                style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--seep-text-dark)' }}
                whileHover={{ color: '#8B2336', transition: { duration: 0.3 } }}
              >
                {v}
              </motion.span>
              {i < valores.length - 1 && (
                <motion.div
                  className="hidden md:block w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--seep-gold)' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Credenciais Section ────────────────────────────────────
function CredenciaisSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: 'var(--seep-dark)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="rounded-2xl p-10 border text-center"
          style={{
            borderColor: 'rgba(139,35,54,0.2)',
            background: 'linear-gradient(135deg, rgba(26,26,34,0.4) 0%, rgba(20,20,28,0.6) 100%)',
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3
            className="text-sm font-bold tracking-[0.3em] uppercase mb-6"
            style={{ color: 'var(--seep-gold)' }}
          >
            Diferencial Competitivo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold mb-2" style={{ color: 'var(--seep-gold)', fontFamily: 'var(--font-montserrat)' }}>
                <AnimatedCounter value="30" suffix="+" />
              </p>
              <p className="text-sm" style={{ color: '#B0B0C0' }}>
                Anos em Segurança Pública (PMESP)
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2" style={{ color: 'var(--seep-gold)', fontFamily: 'var(--font-montserrat)' }}>
                <AnimatedCounter value="10" suffix="+" />
              </p>
              <p className="text-sm" style={{ color: '#B0B0C0' }}>
                Anos em Segurança Executiva Privada
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2" style={{ color: 'var(--seep-gold)', fontFamily: 'var(--font-montserrat)' }}>
                <ShieldCheck className="w-10 h-10 mx-auto" style={{ color: 'var(--seep-gold)' }} />
              </p>
              <p className="text-sm" style={{ color: '#B0B0C0' }}>
                Aperfeiçoamento Acadêmico em Gestão
              </p>
            </div>
          </div>
          <motion.p
            className="text-base mt-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#8B8BA0' }}
          >
            &ldquo;Segurança não é apenas a ausência de incidentes,
            é a presença de tranquilidade para produzir mais.&rdquo;
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── How It Works Section ───────────────────────────────────
const steps = [
  { num: '01', title: 'Diagnóstico', desc: 'Análise completa do cenário de risco, perfil do contratante e necessidades específicas de segurança.', icon: Search },
  { num: '02', title: 'Plano de Segurança', desc: 'Elaboração de estratégia personalizada com protocolos operacionais, rotas e procedimentos de emergência.', icon: FileText },
  { num: '03', title: 'Operação Ativa', desc: 'Execução com monitoramento em tempo real, comunicação criptografada e relatórios contínuos.', icon: Radio },
];

function HowItWorksSection() {
  return (
    <section className="py-28 px-6" style={{ backgroundColor: 'var(--seep-warm-bg)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h3
            className="text-sm font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: 'var(--seep-gold)' }}
          >
            Processo
          </h3>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--seep-text-dark)' }}
          >
            Como Funciona
          </h2>
          <GoldDivider />
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-[60px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px]"
            style={{ backgroundColor: 'rgba(139,35,54,0.2)' }}
          />
          <motion.div
            className="hidden md:block absolute top-[60px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px]"
            style={{ backgroundColor: 'var(--seep-gold)', transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="text-center relative"
                variants={fadeUp}
                custom={i}
              >
                <motion.div
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #8B2336 0%, #A02840 100%)',
                    boxShadow: '0 4px 20px rgba(139,35,54,0.3)',
                  }}
                  whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                >
                  <s.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--seep-text-dark)' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--seep-text-med)' }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ────────────────────────────────────────────
const objetivosPills = [
  { value: 'patrimonial', label: 'Patrimonial' },
  { value: 'eletronica', label: 'Eletrônica' },
  { value: 'acesso', label: 'Acesso' },
  { value: 'monitoramento', label: 'Monitoramento' },
  { value: 'incendio', label: 'Incêndios' },
];

function CTASection() {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', tipo: 'PF', objetivos: [] });
  const [sent, setSent] = useState(false);

  const toggleObjetivo = (val) => {
    setForm((prev) => ({
      ...prev,
      objetivos: prev.objetivos.includes(val)
        ? prev.objetivos.filter((o) => o !== val)
        : [...prev.objetivos, val],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-28 px-6" style={{ backgroundColor: 'var(--seep-dark)' }}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Shield className="w-8 h-8 mx-auto mb-4" style={{ color: 'var(--seep-gold)', opacity: 0.5 }} />
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Solicite um diagnóstico de risco
          </h2>
          <p className="mb-10" style={{ color: '#B0B0C0' }}>
            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
          </p>
        </motion.div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl p-10 border"
            style={{ backgroundColor: 'rgba(26,26,34,0.5)', borderColor: 'rgba(139,35,54,0.2)' }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.6 }}
            >
              <ShieldCheck className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--seep-gold)' }} />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Solicitação enviada
            </h3>
            <p style={{ color: '#B0B0C0' }}>
              Nossa equipe analisará sua solicitação e entrará em contato em até 24 horas.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 border"
            style={{ backgroundColor: 'rgba(26,26,34,0.3)', borderColor: 'rgba(139,35,54,0.15)' }}
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Nome completo"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl text-sm bg-(--seep-dark) border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-(--seep-gold)/50 focus:border-transparent transition-all"
              />
              <input
                type="tel"
                placeholder="Telefone"
                required
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl text-sm bg-(--seep-dark) border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-(--seep-gold)/50 focus:border-transparent transition-all"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                placeholder="E-mail"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl text-sm bg-(--seep-dark) border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-(--seep-gold)/50 focus:border-transparent transition-all"
              />
              <select
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl text-sm bg-(--seep-dark) border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-(--seep-gold)/50 focus:border-transparent transition-all"
              >
                <option value="PF">Pessoa Física</option>
                <option value="PJ">Pessoa Jurídica</option>
              </select>
            </div>

            {/* Objetivo pills */}
            <div className="mb-6">
              <p className="text-xs text-white/40 mb-3 text-left">Objetivo da avaliação (opcional)</p>
              <div className="flex flex-wrap gap-2">
                {objetivosPills.map((o) => {
                  const isActive = form.objetivos.includes(o.value);
                  return (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => toggleObjetivo(o.value)}
                      className="px-3 py-1.5 rounded-full text-xs border transition-all duration-200"
                      style={{
                        borderColor: isActive ? 'var(--seep-gold)' : 'rgba(255,255,255,0.1)',
                        backgroundColor: isActive ? 'rgba(139,35,54,0.1)' : 'transparent',
                        color: isActive ? '#8B2336' : 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {o.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <Button size="lg" className="w-full" type="submit">
              Enviar solicitação
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="py-16 px-6"
      style={{ backgroundColor: '#0C0C10', borderTop: '1px solid rgba(139,35,54,0.12)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h4
              className="text-2xl font-bold text-white mb-1"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              S.E.E.P.
            </h4>
            <p className="text-sm mb-1" style={{ color: '#B0B0C0' }}>
              Serviço Executivo de Eficiência Pessoal
            </p>
            <p className="text-xs" style={{ color: '#6B7280' }}>
              Powered by Santeex Group
            </p>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Links</h5>
            <ul className="space-y-2 text-sm" style={{ color: '#B0B0C0' }}>
              <li><a href="#silverback" className="hover:text-(--seep-gold) transition-colors">Filosofia Silverback</a></li>
              <li><a href="#servicos" className="hover:text-(--seep-gold) transition-colors">Serviços</a></li>
              <li><Link href="/seep/login" className="hover:text-(--seep-gold) transition-colors">Área do Contratante</Link></li>
              <li><Link href="/seep/quiz/agente" className="hover:text-(--seep-gold) transition-colors">Seja um Agente</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Contato</h5>
            <ul className="space-y-2 text-sm" style={{ color: '#B0B0C0' }}>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                (11) 99999-0000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                contato@seep.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-6 text-center" style={{ borderColor: 'rgba(139,35,54,0.1)' }}>
          <p className="text-xs" style={{ color: '#6B7280' }}>
            Todos os direitos reservados &copy; 2026 S.E.E.P. — Santeex Executive Service
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ──────────────────────────────────────────────
export default function SeepLandingPage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <SilverbackSection />
      <CharacteristicsSection />
      <CompetenciasSection />
      <DespertarSection />
      <MentalidadeSection />
      <PillarsSection />
      <ValuesSection />
      <CredenciaisSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  );
}
