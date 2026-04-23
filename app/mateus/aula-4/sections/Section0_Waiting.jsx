'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { colors } from './shared';

export function Section0_Waiting({ participants }) {
  const isConnected = participants.length > 0;
  const [participantUrl, setParticipantUrl] = useState('');

  useEffect(() => {
    setParticipantUrl(`${window.location.origin}/mateus/aula-4/participante`);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-bold mb-3"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        Graça Que Transforma
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg md:text-xl mb-12 italic"
        style={{ color: colors.graphiteLight }}
      >
        Estudo Bíblico — Mateus & Ricky
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="p-6 rounded-2xl shadow-md mb-6"
        style={{ background: colors.white }}
      >
        {participantUrl && (
          <QRCodeSVG
            value={participantUrl}
            size={200}
            bgColor={colors.white}
            fgColor={colors.charcoal}
            level="M"
          />
        )}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-sm mb-8"
        style={{ color: colors.graphiteLight }}
      >
        Escaneie para conectar
      </motion.p>

      {isConnected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: 'rgba(122, 139, 92, 0.1)',
            color: colors.olive,
          }}
        >
          <span className="w-2 h-2 rounded-full bg-current" />
          <span className="text-sm font-medium">
            {participants[0]?.name || 'Participante'} está conectado
          </span>
          <span>✓</span>
        </motion.div>
      )}
    </div>
  );
}
