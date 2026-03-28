'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db } from '../../../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const colors = {
  gold: '#D4A853',
  blue: '#2C3E6B',
  offWhite: '#FAF6F0',
  charcoal: '#2D2926',
  terracotta: '#C47A5A',
  graphite: '#3D3835',
  graphiteLight: '#5A5552',
  olive: '#7A8B5C',
  white: '#FFFFFF',
};

const phases = [
  { id: 1, label: 'A Base', subtitle: 'O Que Salva', color: colors.gold },
  { id: 2, label: 'A Lente', subtitle: 'O Que a Cruz Mudou', color: colors.blue },
  { id: 3, label: 'A Vida', subtitle: 'Identidade e Esperança', color: colors.olive },
];

const lessons = [
  { id: 1, title: 'Conversa de Escuta', phase: 1 },
  { id: 2, title: 'O Presente: Entendendo a Cruz', phase: 1 },
  { id: 3, title: 'Fé e Obras', phase: 1 },
  { id: 4, title: 'Duas Leis, Dois Destinos', phase: 2 },
  { id: 5, title: 'O Que Paulo Quis Dizer', phase: 2 },
  { id: 6, title: 'O Sábado: Gênesis, Não Sinai', phase: 2 },
  { id: 7, title: 'O Corpo Como Templo', phase: 2 },
  { id: 8, title: 'Dízimo e Mordomia', phase: 2 },
  { id: 9, title: 'O Santuário', phase: 3 },
  { id: 10, title: 'A Morte e a Esperança', phase: 3 },
  { id: 11, title: 'A Volta de Jesus', phase: 3 },
  { id: 12, title: 'Como Estudar a Bíblia', phase: 3 },
  { id: 13, title: 'Decisão e Caminho', phase: 3 },
];

export default function JornadaPage() {
  const [journeyData, setJourneyData] = useState({});
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    if (!db) return; // Firebase not initialized
    const unsub = onSnapshot(doc(db, 'journey', 'mateus'), (snap) => {
      if (snap.exists()) {
        setJourneyData(snap.data());
      }
    });
    return () => unsub();
  }, []);

  return (
    <div className="min-h-screen px-6 py-12" style={{ background: colors.offWhite }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
          >
            Sua Jornada
          </h1>
          <p className="text-sm" style={{ color: colors.graphiteLight }}>
            Graça Que Transforma — 13 aulas
          </p>
        </motion.div>

        {/* Phase sections */}
        {phases.map((phase, phaseIdx) => {
          const phaseLessons = lessons.filter((l) => l.phase === phase.id);
          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: phaseIdx * 0.15 }}
              className="mb-10"
            >
              {/* Phase header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: phase.color }}
                />
                <div>
                  <h2 className="text-lg font-semibold" style={{ color: colors.charcoal }}>
                    Fase {phase.id}: {phase.label}
                  </h2>
                  <p className="text-xs" style={{ color: colors.graphiteLight }}>
                    {phase.subtitle}
                  </p>
                </div>
              </div>

              {/* Lesson nodes */}
              <div className="ml-1.5 border-l-2 pl-6 space-y-3" style={{ borderColor: `${phase.color}33` }}>
                {phaseLessons.map((lesson) => {
                  const data = journeyData[`aula-${lesson.id}`];
                  const isCompleted = data?.completed;
                  const isSelected = selectedLesson === lesson.id;

                  return (
                    <motion.button
                      key={lesson.id}
                      onClick={() => setSelectedLesson(isSelected ? null : lesson.id)}
                      className="flex items-start gap-3 w-full text-left group relative"
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Node dot */}
                      <div className="relative -ml-[1.85rem] mt-1">
                        <motion.div
                          className="w-3 h-3 rounded-full border-2"
                          style={{
                            background: isCompleted ? phase.color : colors.offWhite,
                            borderColor: isCompleted ? phase.color : `${phase.color}66`,
                          }}
                          animate={
                            isCompleted
                              ? {}
                              : { opacity: [0.5, 1, 0.5] }
                          }
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </div>

                      {/* Lesson info */}
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{
                            color: isCompleted ? colors.charcoal : colors.graphiteLight,
                          }}
                        >
                          Aula {lesson.id}: {lesson.title}
                        </p>

                        {isSelected && data && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-1 text-xs space-y-0.5"
                            style={{ color: colors.graphiteLight }}
                          >
                            {data.date && <p>📅 {data.date}</p>}
                            {data.highlight && (
                              <p className="italic" style={{ color: phase.color }}>
                                &ldquo;{data.highlight}&rdquo;
                              </p>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
