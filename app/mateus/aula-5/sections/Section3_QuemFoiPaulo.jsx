'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

const bio = [
  {
    label: 'Origem',
    line: 'Fariseu de fariseus.',
    detail: 'Conhecia a lei como ninguém — especialista, não leigo.',
    ref: 'Filipenses 3:5-6',
  },
  {
    label: 'Performance',
    line: 'Irrepreensível segundo a lei.',
    detail: 'Cumpriu tudo. O melhor aluno da turma.',
    ref: 'Filipenses 3:6',
  },
  {
    label: 'Convicção',
    line: 'Perseguia a igreja.',
    detail: 'Achava que estava defendendo Deus.',
    ref: 'Atos 9:1-2',
  },
  {
    label: 'Encontro',
    line: 'Damasco.',
    detail: 'Não foi argumento que o convenceu — foi encontro. Três anos na Arábia depois.',
    ref: 'Atos 9 · Gálatas 1:17-18',
  },
];

export function Section3_QuemFoiPaulo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-14">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-xs uppercase tracking-widest mb-3"
        style={{ color: colors.blue, fontWeight: 600 }}
      >
        O Filtro Biográfico
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        Quem Foi Paulo
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-2 text-sm md:text-base italic text-center max-w-xl"
        style={{ color: colors.graphiteLight }}
      >
        Antes do versículo, o autor.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: colors.blue }}
      />

      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
        {bio.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.18, duration: 0.6 }}
            className="rounded-xl px-4 py-4"
            style={{
              background: colors.white,
              border: `1px solid ${colors.offWhiteDark}`,
              borderLeft: `3px solid ${colors.blue}`,
            }}
          >
            <p
              className="text-[10px] uppercase tracking-widest mb-2"
              style={{ color: colors.blue, fontWeight: 600 }}
            >
              {item.label}
            </p>
            <p
              className="text-base md:text-lg font-semibold"
              style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
            >
              {item.line}
            </p>
            <p
              className="text-xs md:text-sm mt-1.5 italic"
              style={{ color: colors.graphite }}
            >
              {item.detail}
            </p>
            <p
              className="text-[10px] mt-2 font-mono"
              style={{ color: colors.graphiteLight }}
            >
              {item.ref}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="max-w-xl text-base md:text-lg italic leading-relaxed text-center px-4"
        style={{
          fontFamily: 'var(--font-playfair)',
          color: colors.graphite,
          borderTop: `1px solid ${colors.offWhiteDark}`,
          paddingTop: '1.25rem',
        }}
      >
        Ele atacou a lei depois de tentar ser salvo por ela.
        <br />
        Cumpriu — e descobriu que cumprir não bastava.
      </motion.blockquote>
    </div>
  );
}
