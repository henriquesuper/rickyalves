// Solução de Problemas — Roteiro do Apresentador
// Leitura no celular: texto único, rolável, fonte grande. Lê a fonte única em ../notes.
import { notes, movements, lessonMeta } from '../notes';

const base = '#0E1217';
const surface = '#161B22';
const surfaceSoft = '#1C232C';
const line = '#2A323D';
const textHigh = '#F3F5F8';
const textBody = '#C5CDD8';
const textMuted = '#8A95A3';
const amber = '#F2A33C';
const amberSoft = '#F7BE6B';

const sans = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
const display = "'Space Grotesk', system-ui, sans-serif";
const mono = "'JetBrains Mono', ui-monospace, monospace";

function movementAt(n) {
    return movements.find(m => n >= m.from && n <= m.to);
}

export default function ApresentadorPage() {
    const slideNums = Object.keys(notes).map(Number).sort((a, b) => a - b);

    return (
        <main style={{ background: base, color: textBody, minHeight: '100vh', fontFamily: sans }}>
            <header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
                    background: `${base}F2`,
                    borderBottom: `1px solid ${line}`,
                    backdropFilter: 'blur(8px)',
                    padding: '0.7rem 1.1rem',
                }}
            >
                <p style={{ margin: 0, fontSize: '0.68rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: amber, fontWeight: 600, fontFamily: mono }}>
                    {lessonMeta.course} · Roteiro do Apresentador
                </p>
                <p style={{ margin: '0.15rem 0 0', fontSize: '1.05rem', color: textHigh, fontFamily: display, fontWeight: 600 }}>
                    {lessonMeta.title}
                </p>
            </header>

            <div style={{ maxWidth: '680px', margin: '0 auto', padding: '1.5rem 1.25rem 6rem' }}>
                {slideNums.map((n, idx) => {
                    const note = notes[n];
                    const mov = movementAt(n);
                    const prevMov = idx > 0 ? movementAt(slideNums[idx - 1]) : null;
                    const showMovDivider = !prevMov || (mov && prevMov && mov.label !== prevMov.label);

                    return (
                        <section key={n} style={{ marginBottom: '2.6rem' }}>
                            {showMovDivider && mov && (
                                <div style={{ margin: idx === 0 ? '0 0 1.6rem' : '2.4rem 0 1.6rem', paddingBottom: '0.5rem', borderBottom: `2px solid ${amber}` }}>
                                    <p style={{ margin: 0, fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: amberSoft, fontWeight: 600, fontFamily: mono }}>
                                        Movimento {mov.roman}
                                    </p>
                                    <p style={{ margin: '0.1rem 0 0', fontSize: '1.5rem', color: textHigh, fontFamily: display, fontWeight: 600 }}>
                                        {mov.label}
                                    </p>
                                </div>
                            )}

                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.5rem' }}>
                                <span style={{ flexShrink: 0, fontSize: '0.72rem', fontWeight: 700, color: base, background: amber, borderRadius: '999px', padding: '0.12rem 0.6rem', letterSpacing: '0.05em', fontFamily: mono }}>
                                    {n}
                                </span>
                                <h2 style={{ margin: 0, fontSize: '1.35rem', lineHeight: 1.25, color: textHigh, fontFamily: display, fontWeight: 600 }}>
                                    {note.title}
                                </h2>
                            </div>

                            {note.lead && (
                                <p style={{ margin: '0 0 0.9rem', fontSize: '1.05rem', fontStyle: 'italic', color: amberSoft, fontFamily: display, lineHeight: 1.4 }}>
                                    {note.lead}
                                </p>
                            )}

                            {note.script && note.script.map((para, i) => (
                                <p key={i} style={{ margin: '0 0 1rem', fontSize: '1.18rem', lineHeight: 1.66, color: textBody }}>
                                    {para}
                                </p>
                            ))}

                            {note.depth && note.depth.map((d, i) => (
                                <div key={i} style={{ margin: '1rem 0 0', padding: '0.85rem 1rem', background: surfaceSoft, borderLeft: `3px solid ${amber}`, borderRadius: '2px' }}>
                                    <p style={{ margin: '0 0 0.35rem', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: amber, fontWeight: 600, fontFamily: mono }}>
                                        {d.label}
                                    </p>
                                    <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: 1.6, color: textBody }}>
                                        {d.text}
                                    </p>
                                </div>
                            ))}
                        </section>
                    );
                })}

                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: textMuted, marginTop: '3rem', letterSpacing: '0.1em', fontFamily: mono }}>
                    · fim do roteiro ·
                </p>
            </div>
        </main>
    );
}
