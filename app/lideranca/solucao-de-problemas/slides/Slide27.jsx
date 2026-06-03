'use client';
import { StageWrapper, Kicker, DisplayTitle, Reveal, colors, fonts } from './shared';

export function Slide27({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-14 flex flex-col items-center gap-9 text-center">
                <div>
                    <Kicker>V · Plano</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="md">Escalar é competência</DisplayTitle>
                    </div>
                </div>
                <div className="w-full mx-auto p-7 text-left" style={{ maxWidth: '40rem', background: colors.surface, border: `1px solid ${colors.amber}55`, borderRadius: 14 }}>
                    <p style={{ fontFamily: fonts.mono, fontSize: '0.7rem', color: colors.amber, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 14 }}>
                        Escalar do jeito certo
                    </p>
                    <p style={{ fontFamily: fonts.display, fontSize: '1.5rem', color: colors.textHigh, lineHeight: 1.4, fontWeight: 500 }}>
                        Fato <span style={{ color: colors.textMuted }}>+</span> causa <span style={{ color: colors.textMuted }}>+</span> 3 opções <span style={{ color: colors.textMuted }}>+</span> recomendação
                    </p>
                </div>
                <Reveal step={step} at={1}>
                    <p className="text-xl md:text-2xl" style={{ color: colors.amberSoft, fontFamily: fonts.display, fontStyle: 'italic' }}>
                        &ldquo;Me ajuda&rdquo; vira &ldquo;confirma minha decisão&rdquo;.
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide27.steps = 2;
