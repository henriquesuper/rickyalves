'use client';

import { useState, useRef } from 'react';
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
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1B1B2F 0%, #0D0D1A 50%, #1B1B2F 100%)' }}
    >
      {/* Parallax geometric pattern */}
      <motion.div className="absolute inset-0 opacity-[0.04]" style={{ y: yBg }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(30deg, #C6A94D 12%, transparent 12.5%, transparent 87%, #C6A94D 87.5%, #C6A94D), linear-gradient(150deg, #C6A94D 12%, transparent 12.5%, transparent 87%, #C6A94D 87.5%, #C6A94D), linear-gradient(30deg, #C6A94D 12%, transparent 12.5%, transparent 87%, #C6A94D 87.5%, #C6A94D), linear-gradient(150deg, #C6A94D 12%, transparent 12.5%, transparent 87%, #C6A94D 87.5%, #C6A94D)',
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
          }}
        />
      </motion.div>

      {/* Animated gold accent lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #C6A94D 50%, transparent 100%)' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(198,169,77,0.06) 0%, transparent 70%)' }}
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(198,169,77,0.04) 0%, transparent 70%)' }}
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ opacity }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border"
          style={{ borderColor: 'rgba(198,169,77,0.3)', backgroundColor: 'rgba(198,169,77,0.08)' }}
        >
          <Shield className="w-3.5 h-3.5" style={{ color: '#C6A94D' }} />
          <span className="text-xs font-medium tracking-wider uppercase" style={{ color: '#C6A94D' }}>
            Santeex Executive Service
          </span>
        </motion.div>

        {/* Main title with character stagger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h1
            className="text-7xl md:text-9xl font-bold tracking-wider mb-2"
            style={{ fontFamily: 'var(--font-montserrat)', color: '#FFFFFF' }}
          >
            {'S.E.E.P.'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: [0.25, 0.4, 0.25, 1] }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.h2
          className="text-xl md:text-2xl font-medium tracking-[0.25em] uppercase mb-3"
          style={{ color: '#C6A94D', fontFamily: 'var(--font-montserrat)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Serviço Executivo de Eficiência Pessoal
        </motion.h2>

        <motion.p
          className="text-sm md:text-base mb-3 tracking-widest uppercase"
          style={{ color: '#8B8BA0' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Powered by Santeex Group
        </motion.p>

        <motion.div
          className="w-24 h-px mx-auto mb-8"
          style={{ backgroundColor: 'rgba(198,169,77,0.4)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        />

        <motion.p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#B0B0C0' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          O silêncio que domina a selva. Proteção executiva com a filosofia
          <span style={{ color: '#C6A94D' }}> Silverback</span> — presença firme,
          resposta calibrada, excelência inabalável.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <a href="#silverback">
            <Button size="lg">
              Descubra a Filosofia Silverback
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <Link href="/seep/login">
            <Button variant="outline" size="lg">
              Área do contratante
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="w-6 h-10 border-2 border-[#C6A94D]/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-[#C6A94D]/50 rounded-full"
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
    desc: 'Motoristas especializados em rotas alternativas, direção evasiva e contra-vigilância veicular.',
  },
  {
    icon: ShieldCheck,
    title: 'Proteção Direta',
    desc: 'Agentes de segurança pessoal com treinamento avançado para proteção executiva e familiar.',
  },
  {
    icon: Brain,
    title: 'Decisão Estratégica',
    desc: 'Análise de risco, inteligência operacional e planejamento de segurança personalizado.',
  },
  {
    icon: UserCheck,
    title: 'Perfil Multifuncional',
    desc: 'Profissionais versáteis: segurança, logística, comunicação e gestão de crises integradas.',
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
            Não é um segurança comum. É um profissional multi-skilled que combina
            proteção pessoal, condução evasiva, decisão estratégica e perfil executivo
            em uma única solução.
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
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(198,169,77,0.06) 0%, transparent 60%)' }}
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
          background: 'radial-gradient(circle, rgba(198,169,77,0.04) 0%, transparent 70%)',
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
                O termo &ldquo;Silverback&rdquo; vem do gorila-das-costas-prateadas — o macho dominante
                do grupo. Ele não lidera pelo medo, mas pela <strong className="text-white">presença imponente</strong> e
                pela <strong className="text-white">calma sob pressão</strong>. Quando um Silverback se levanta,
                o silêncio domina a selva.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#9A9AB0' }}>
                Assim como o Silverback protege seu grupo com serenidade e força inabalável,
                o agente SEEP opera com <strong style={{ color: 'var(--seep-gold)' }}>autoridade silenciosa</strong>.
                Proteção não é ostentação — é preparação constante, resposta calibrada e
                compromisso absoluto com a segurança de quem está sob nossa responsabilidade.
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
              {/* Outer ring - rotating */}
              <motion.div
                className="absolute inset-[-20px] rounded-full"
                style={{
                  border: '1px solid rgba(198,169,77,0.15)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--seep-gold)' }}
                />
              </motion.div>

              {/* Main circle */}
              <motion.div
                className="w-72 h-72 md:w-80 md:h-80 rounded-full flex flex-col items-center justify-center relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(22,36,71,0.8) 0%, rgba(27,27,47,0.9) 100%)',
                  border: '2px solid rgba(198,169,77,0.3)',
                  boxShadow: '0 0 80px rgba(198,169,77,0.1), inset 0 0 40px rgba(198,169,77,0.05)',
                }}
                whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
              >
                <Shield className="w-20 h-20 mb-3" style={{ color: 'var(--seep-gold)', opacity: 0.7 }} />
                <p
                  className="text-sm font-bold tracking-[0.2em] uppercase"
                  style={{ color: 'var(--seep-gold)', fontFamily: 'var(--font-montserrat)' }}
                >
                  Silverback
                </p>
                <p className="text-[10px] tracking-widest uppercase mt-1" style={{ color: '#8B8BA0' }}>
                  O Silêncio que Domina
                </p>
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
    color: '#C6A94D',
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
    <section className="py-28 px-6" style={{ backgroundColor: '#0D0D1A' }}>
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
                  backgroundColor: 'rgba(27,27,47,0.6)',
                  borderColor: 'rgba(198,169,77,0.1)',
                }}
                whileHover={{
                  borderColor: 'rgba(198,169,77,0.3)',
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

// ─── Despertar do Silverback Section ────────────────────────
function DespertarSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ backgroundColor: 'var(--seep-dark)' }}>
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(198,169,77,0.06) 0%, transparent 60%)',
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
          style={{ backgroundColor: 'rgba(198,169,77,0.4)' }}
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
            background: 'linear-gradient(135deg, rgba(198,169,77,0.08) 0%, rgba(198,169,77,0.02) 100%)',
            border: '1px solid rgba(198,169,77,0.15)',
          }}>
            <div
              className="absolute top-4 left-6 text-5xl leading-none"
              style={{ color: 'rgba(198,169,77,0.2)', fontFamily: 'Georgia, serif' }}
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

// ─── Pillars Section (Updated) ──────────────────────────────
const pilares = [
  {
    icon: Crown,
    title: 'Autoridade de Presença',
    num: '01',
    desc: 'O Silverback não precisa falar para ser notado. Sua presença é suficiente para mudar o ambiente. Postura, olhar e preparo transmitem uma mensagem clara: aqui, a segurança é inegociável.',
  },
  {
    icon: Target,
    title: 'Domínio do Processo',
    num: '02',
    desc: 'Cada operação segue protocolos rigorosos. Do diagnóstico de risco ao debriefing pós-missão, cada etapa é documentada, analisada e aperfeiçoada. Excelência é um processo, não um acidente.',
  },
  {
    icon: Lock,
    title: 'Sincronização Forçada',
    num: '03',
    desc: 'Agente, contratante e central operam como um só organismo. Comunicação em tempo real, protocolos compartilhados e confiança mútua. Quando um se move, todos se movem.',
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
            Pilares
          </h3>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-montserrat)', color: 'var(--seep-text-dark)' }}
          >
            Pilares da Atuação
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
                    background: 'linear-gradient(135deg, #1B1B2F 0%, #162447 100%)',
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
                whileHover={{ color: '#C6A94D', transition: { duration: 0.3 } }}
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
            style={{ backgroundColor: 'rgba(198,169,77,0.2)' }}
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
                    background: 'linear-gradient(135deg, #C6A94D 0%, #D4B96A 100%)',
                    boxShadow: '0 4px 20px rgba(198,169,77,0.3)',
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
function CTASection() {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', tipo: 'PF' });
  const [sent, setSent] = useState(false);

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
            style={{ backgroundColor: 'rgba(22,36,71,0.5)', borderColor: 'rgba(198,169,77,0.2)' }}
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
            style={{ backgroundColor: 'rgba(22,36,71,0.3)', borderColor: 'rgba(198,169,77,0.15)' }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
      style={{ backgroundColor: '#0D0D1A', borderTop: '1px solid rgba(198,169,77,0.12)' }}
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
        <div className="border-t pt-6 text-center" style={{ borderColor: 'rgba(198,169,77,0.1)' }}>
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
    <main>
      <HeroSection />
      <ServicesSection />
      <SilverbackSection />
      <CharacteristicsSection />
      <DespertarSection />
      <PillarsSection />
      <ValuesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  );
}
