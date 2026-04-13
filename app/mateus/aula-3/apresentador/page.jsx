'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAula3Sync } from '../useAula3Sync';
import {
  colors,
  sectionData,
  noteCategories,
  presetCards,
  reactionTypes,
  WarmCard,
} from '../sections/shared';

// ========================================
// TIMER COMPONENT
// ========================================
function Timer({ startedAt, sessionStatus }) {
  const [elapsed, setElapsed] = useState(0);
  const frozenRef = useRef(null);

  useEffect(() => {
    if (!startedAt) return;
    if (sessionStatus === 'ended') {
      if (frozenRef.current === null) {
        frozenRef.current = Math.floor((Date.now() - startedAt.getTime()) / 1000);
        setElapsed(frozenRef.current);
      }
      return;
    }
    frozenRef.current = null;
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startedAt.getTime()) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startedAt, sessionStatus]);

  if (!startedAt) return <span style={{ color: colors.graphiteLight }}>--:--:--</span>;

  const ended = sessionStatus === 'ended';
  const h = Math.floor(elapsed / 3600);
  const m = Math.floor((elapsed % 3600) / 60);
  const s = elapsed % 60;

  return (
    <span style={{ color: ended ? colors.graphiteLight : colors.gold, fontVariantNumeric: 'tabular-nums' }}>
      {h > 0 ? `${h}:` : ''}
      {String(m).padStart(2, '0')}:{String(s).padStart(2, '0')}
      {ended && ' ✓'}
    </span>
  );
}

// ========================================
// SECTION NAVIGATOR
// ========================================
function SectionNav({ currentSection, totalSections, prevSection, nextSection, sessionStatus, startSession, endSession, resetSession }) {
  const section = sectionData[currentSection];
  const isWaiting = sessionStatus === 'waiting';
  const isEnded = sessionStatus === 'ended';
  const isLastSection = currentSection === totalSections - 1;

  return (
    <WarmCard>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wider" style={{ color: colors.graphiteLight }}>
          {isEnded ? 'Aula encerrada' : `Seção ${currentSection} de ${totalSections - 1}`}
        </span>
        {section?.duration && !isEnded && (
          <span className="text-xs" style={{ color: colors.graphiteLight }}>
            ~{section.duration}
          </span>
        )}
      </div>

      <p className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}>
        {section?.title || ''}
      </p>

      {isEnded ? (
        <div className="space-y-2">
          <div className="text-center py-2">
            <span className="text-sm" style={{ color: colors.olive }}>✓ Aula finalizada</span>
          </div>
          <button
            onClick={resetSession}
            className="w-full py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: colors.offWhiteDark, color: colors.graphite }}
          >
            Reiniciar Aula
          </button>
        </div>
      ) : isWaiting ? (
        <button
          onClick={startSession}
          className="w-full py-3 rounded-xl text-white font-medium text-sm transition-opacity hover:opacity-90"
          style={{ background: colors.gold }}
        >
          Iniciar Aula
        </button>
      ) : (
        <div className="space-y-2">
          <div className="flex gap-2">
            <button
              onClick={prevSection}
              disabled={currentSection === 0}
              className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-opacity disabled:opacity-30"
              style={{ background: colors.offWhiteDark, color: colors.graphite }}
            >
              ← Anterior
            </button>
            <button
              onClick={nextSection}
              disabled={isLastSection}
              className="flex-1 py-2.5 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-30"
              style={{ background: colors.gold }}
            >
              Próxima →
            </button>
          </div>

          {isLastSection && (
            <button
              onClick={endSession}
              className="w-full py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: colors.terracotta, color: colors.white }}
            >
              Encerrar Aula
            </button>
          )}
        </div>
      )}
    </WarmCard>
  );
}

// ========================================
// GUIDE QUESTIONS
// ========================================
function GuideQuestions({ currentSection }) {
  const [open, setOpen] = useState(true);
  const section = sectionData[currentSection];
  const questions = section?.guideQuestions || [];

  if (questions.length === 0) return null;

  return (
    <WarmCard>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-sm font-semibold" style={{ color: colors.charcoal }}>
          📋 Perguntas Guia
        </span>
        <span className="text-xs" style={{ color: colors.graphiteLight }}>
          {open ? '▲' : '▼'}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="mt-3 space-y-2.5">
              {questions.map((q, i) => (
                <li
                  key={i}
                  className="text-sm pl-3"
                  style={{
                    borderLeft: `2px solid ${colors.goldSoft.replace('0.15', '0.4')}`,
                    color: colors.graphite,
                    lineHeight: '1.5',
                  }}
                >
                  {q}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </WarmCard>
  );
}

// ========================================
// NOTES SYSTEM
// ========================================
function NotesPanel({ notes, addNote }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('intelectual');
  const scrollRef = useRef(null);

  const handleSubmit = () => {
    if (!text.trim()) return;
    addNote({ text, category });
    setText('');
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [notes]);

  return (
    <WarmCard>
      <p className="text-sm font-semibold mb-3" style={{ color: colors.charcoal }}>
        📝 Anotações
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escreva uma nota..."
        rows={2}
        className="w-full p-3 rounded-xl text-sm resize-none outline-none"
        style={{
          background: colors.offWhite,
          border: `1px solid ${colors.offWhiteDark}`,
          color: colors.graphite,
        }}
      />

      <div className="flex gap-1.5 mt-2 mb-3 flex-wrap">
        {noteCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat.key)}
            className="px-2.5 py-1 rounded-lg text-xs font-medium transition-all"
            style={{
              background: category === cat.key ? `${cat.color}22` : colors.offWhite,
              color: category === cat.key ? cat.color : colors.graphiteLight,
              border: `1px solid ${category === cat.key ? cat.color : 'transparent'}`,
            }}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!text.trim()}
        className="w-full py-2 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-30"
        style={{ background: colors.blue }}
      >
        Salvar nota
      </button>

      {notes.length > 0 && (
        <div ref={scrollRef} className="mt-4 max-h-48 overflow-y-auto space-y-2">
          <p className="text-xs" style={{ color: colors.graphiteLight }}>
            ── Notas anteriores ──
          </p>
          {notes.map((note) => {
            const cat = noteCategories.find((c) => c.key === note.category);
            const time = note.timestamp?.toDate
              ? note.timestamp.toDate().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
              : '';
            return (
              <div
                key={note.id}
                className="text-xs p-2 rounded-lg"
                style={{
                  background: `${cat?.color || colors.blue}11`,
                  borderLeft: `3px solid ${cat?.color || colors.blue}`,
                  color: colors.graphite,
                }}
              >
                <span>{cat?.icon || '📝'}</span> {note.text}
                {time && (
                  <span className="block mt-1" style={{ color: colors.graphiteLight }}>
                    {time}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </WarmCard>
  );
}

// ========================================
// REACTIONS FEED
// ========================================
function ReactionsFeed({ reactions }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [reactions]);

  return (
    <WarmCard>
      <p className="text-sm font-semibold mb-3" style={{ color: colors.charcoal }}>
        🔔 Reações do Mateus
      </p>

      {reactions.length === 0 ? (
        <p className="text-xs italic" style={{ color: colors.graphiteLight }}>
          Nenhuma reação ainda...
        </p>
      ) : (
        <div ref={scrollRef} className="max-h-36 overflow-y-auto space-y-1.5">
          {reactions.slice(-20).map((r) => {
            const time = r.timestamp?.toDate
              ? r.timestamp.toDate().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
              : '';
            return (
              <div key={r.id} className="text-xs flex items-center gap-2" style={{ color: colors.graphite }}>
                <span className="text-base">{r.content}</span>
                <span>{r.from}</span>
                {time && <span style={{ color: colors.graphiteLight }}>— {time}</span>}
              </div>
            );
          })}
        </div>
      )}
    </WarmCard>
  );
}

// ========================================
// CARD RESPONSES FEED
// ========================================
function CardResponsesFeed({ cardResponses }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [cardResponses]);

  if (cardResponses.length === 0) return null;

  return (
    <WarmCard>
      <p className="text-sm font-semibold mb-3" style={{ color: colors.charcoal }}>
        💬 Respostas aos Cards
      </p>

      <div ref={scrollRef} className="max-h-48 overflow-y-auto space-y-2">
        {cardResponses.map((r) => {
          const time = r.timestamp?.toDate
            ? r.timestamp.toDate().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            : '';
          const isScale = r.cardType === 'scale';
          return (
            <div
              key={r.id}
              className="text-xs p-2.5 rounded-lg"
              style={{
                background: `${colors.blue}08`,
                borderLeft: `3px solid ${colors.blue}`,
                color: colors.graphite,
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <span className="font-medium" style={{ color: colors.blue }}>{r.from}</span>
                  {r.cardContent && (
                    <p className="mt-0.5" style={{ color: colors.graphiteLight }}>
                      Re: &ldquo;{r.cardContent.length > 50 ? r.cardContent.slice(0, 50) + '…' : r.cardContent}&rdquo;
                    </p>
                  )}
                  <p className="mt-1 text-sm" style={{ color: colors.graphite }}>
                    {isScale ? `${r.response}/5` : r.response}
                  </p>
                </div>
                {time && (
                  <span className="shrink-0" style={{ color: colors.graphiteLight }}>{time}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </WarmCard>
  );
}

// ========================================
// CARD SENDER
// ========================================
function CardSender({ sendCard, dismissCard, activeCard, cardResponses }) {
  const [customContent, setCustomContent] = useState('');

  const handlePreset = (preset) => {
    sendCard({
      type: preset.type,
      content: preset.content,
      label: preset.label,
      scaleLabels: preset.scaleLabels || null,
    });
  };

  const handleCustom = () => {
    if (!customContent.trim()) return;
    sendCard({ type: 'reflection', content: customContent.trim() });
    setCustomContent('');
  };

  return (
    <WarmCard>
      <p className="text-sm font-semibold mb-3" style={{ color: colors.charcoal }}>
        🎯 Enviar Card pro Mateus
      </p>

      {activeCard ? (
        <div className="space-y-2">
          <div
            className="text-xs p-2 rounded-lg"
            style={{ background: colors.goldSoft, color: colors.graphite }}
          >
            <span className="font-medium">Card ativo:</span> {activeCard.content}
          </div>

          {cardResponses.length > 0 && (
            <div className="text-xs" style={{ color: colors.olive }}>
              ✓ {cardResponses[cardResponses.length - 1]?.from} respondeu:{' '}
              <strong>{cardResponses[cardResponses.length - 1]?.response}</strong>
            </div>
          )}

          <button
            onClick={dismissCard}
            className="w-full py-2 rounded-xl text-xs font-medium"
            style={{ background: colors.offWhiteDark, color: colors.graphite }}
          >
            Recolher card
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {presetCards.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handlePreset(preset)}
                className="py-2 px-3 rounded-xl text-xs font-medium text-left transition-all hover:shadow-sm"
                style={{
                  background: colors.offWhite,
                  border: `1px solid ${colors.offWhiteDark}`,
                  color: colors.graphite,
                }}
              >
                <span className="block font-semibold">{preset.label}</span>
                <span className="text-[10px]" style={{ color: colors.graphiteLight }}>
                  {preset.type === 'scale' ? '📊 Escala' : '💭 Reflexão'}
                </span>
              </button>
            ))}
          </div>

          <div className="flex gap-2 mt-2">
            <input
              value={customContent}
              onChange={(e) => setCustomContent(e.target.value)}
              placeholder="Pergunta customizada..."
              className="flex-1 px-3 py-2 rounded-xl text-xs outline-none"
              style={{
                background: colors.offWhite,
                border: `1px solid ${colors.offWhiteDark}`,
                color: colors.graphite,
              }}
            />
            <button
              onClick={handleCustom}
              disabled={!customContent.trim()}
              className="px-3 py-2 rounded-xl text-xs font-medium text-white disabled:opacity-30"
              style={{ background: colors.terracotta }}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </WarmCard>
  );
}

// ========================================
// MAIN PRESENTER PAGE
// ========================================
export default function ApresentadorPage() {
  const {
    currentSection,
    sessionStatus,
    startedAt,
    participants,
    reactions,
    notes,
    activeCard,
    cardResponses,
    connected,
    totalSections,
    prevSection,
    nextSection,
    startSession,
    endSession,
    resetSession,
    addNote,
    sendCard,
    dismissCard,
  } = useAula3Sync('presenter');

  const hasParticipant = participants.length > 0;

  return (
    <div
      className="min-h-screen pb-8"
      style={{ background: colors.offWhite }}
    >
      {/* Header */}
      <div
        className="sticky top-0 z-40 px-4 py-3 shadow-sm"
        style={{ background: colors.white, borderBottom: `1px solid ${colors.offWhiteDark}` }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: colors.gold }}>
              Graça Que Transforma
            </p>
            <p className="text-xs" style={{ color: colors.graphiteLight }}>
              Aula 3 — Fé e Obras
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm font-mono">
              <Timer startedAt={startedAt} sessionStatus={sessionStatus} />
            </div>
            <div className="flex items-center gap-1 justify-end mt-0.5">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: hasParticipant ? colors.olive : colors.terracotta }}
              />
              <span className="text-[10px]" style={{ color: colors.graphiteLight }}>
                {hasParticipant
                  ? `${participants[0]?.name || 'Participante'} conectado`
                  : 'Aguardando...'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 space-y-3 max-w-lg mx-auto">
        <SectionNav
          currentSection={currentSection}
          totalSections={totalSections}
          prevSection={prevSection}
          nextSection={nextSection}
          sessionStatus={sessionStatus}
          startSession={startSession}
          endSession={endSession}
          resetSession={resetSession}
        />

        <GuideQuestions currentSection={currentSection} />

        <NotesPanel notes={notes} addNote={addNote} />

        <ReactionsFeed reactions={reactions} />

        <CardResponsesFeed cardResponses={cardResponses} />

        <CardSender
          sendCard={sendCard}
          dismissCard={dismissCard}
          activeCard={activeCard}
          cardResponses={cardResponses}
        />
      </div>
    </div>
  );
}
