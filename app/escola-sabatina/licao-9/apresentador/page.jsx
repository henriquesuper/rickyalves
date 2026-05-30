// Escola Sabatina · Lição 9 — Roteiro do Apresentador
// Página de leitura para o celular: um texto único, rolável, fonte grande.
// Lê a fonte única do roteiro em ../notes.js
import { notes, movements, lessonMeta } from '../notes';

const ink = '#2A1810';
const inkBody = '#33271B';
const inkSoft = '#6E5836';
const gold = '#9A6B0B';
const wine = '#722F37';
const parchment = '#F4E8D0';
const parchmentDeep = '#EBDDB8';

const serif = "Georgia, 'Times New Roman', serif";
const sans = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

function movementAt(n) {
    return movements.find(m => n >= m.from && n <= m.to);
}

export default function ApresentadorPage() {
    const slideNums = Object.keys(notes)
        .map(Number)
        .sort((a, b) => a - b);

    return (
        <main
            style={{
                background: parchment,
                color: inkBody,
                minHeight: '100vh',
                fontFamily: sans,
            }}
        >
            {/* Cabeçalho fixo enxuto */}
            <header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
                    background: `${parchmentDeep}F2`,
                    borderBottom: `1px solid ${inkSoft}33`,
                    backdropFilter: 'blur(8px)',
                    padding: '0.7rem 1.1rem',
                }}
            >
                <p style={{ margin: 0, fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: gold, fontWeight: 700 }}>
                    {lessonMeta.lesson} · Roteiro do Apresentador
                </p>
                <p style={{ margin: '0.15rem 0 0', fontSize: '0.95rem', color: ink, fontFamily: serif }}>
                    {lessonMeta.title}
                </p>
            </header>

            <div
                style={{
                    maxWidth: '680px',
                    margin: '0 auto',
                    padding: '1.5rem 1.25rem 6rem',
                }}
            >
                {slideNums.map((n, idx) => {
                    const note = notes[n];
                    const mov = movementAt(n);
                    const prevMov = idx > 0 ? movementAt(slideNums[idx - 1]) : null;
                    const showMovDivider = !prevMov || (mov && prevMov && mov.label !== prevMov.label);

                    return (
                        <section key={n} style={{ marginBottom: '2.6rem' }}>
                            {showMovDivider && mov && (
                                <div
                                    style={{
                                        margin: idx === 0 ? '0 0 1.6rem' : '2.4rem 0 1.6rem',
                                        paddingBottom: '0.5rem',
                                        borderBottom: `2px solid ${gold}`,
                                    }}
                                >
                                    <p style={{ margin: 0, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: wine, fontWeight: 700 }}>
                                        Movimento {mov.roman}
                                    </p>
                                    <p style={{ margin: '0.1rem 0 0', fontSize: '1.5rem', color: ink, fontFamily: serif }}>
                                        {mov.label}
                                    </p>
                                </div>
                            )}

                            {/* Cabeçalho do slide */}
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.5rem' }}>
                                <span
                                    style={{
                                        flexShrink: 0,
                                        fontSize: '0.72rem',
                                        fontWeight: 700,
                                        color: parchment,
                                        background: gold,
                                        borderRadius: '999px',
                                        padding: '0.12rem 0.6rem',
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    {n}
                                </span>
                                <h2 style={{ margin: 0, fontSize: '1.35rem', lineHeight: 1.25, color: ink, fontFamily: serif, fontWeight: 600 }}>
                                    {note.title}
                                </h2>
                            </div>

                            {note.lead && (
                                <p style={{ margin: '0 0 0.9rem', fontSize: '1.05rem', fontStyle: 'italic', color: gold, fontFamily: serif, lineHeight: 1.4 }}>
                                    {note.lead}
                                </p>
                            )}

                            {note.script && note.script.map((para, i) => (
                                <p
                                    key={i}
                                    style={{
                                        margin: '0 0 1rem',
                                        fontSize: '1.18rem',
                                        lineHeight: 1.66,
                                        color: inkBody,
                                    }}
                                >
                                    {para}
                                </p>
                            ))}

                            {note.depth && note.depth.map((d, i) => (
                                <div
                                    key={i}
                                    style={{
                                        margin: '1rem 0 0',
                                        padding: '0.85rem 1rem',
                                        background: `${parchmentDeep}99`,
                                        borderLeft: `3px solid ${gold}`,
                                        borderRadius: '2px',
                                    }}
                                >
                                    <p style={{ margin: '0 0 0.35rem', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: gold, fontWeight: 700 }}>
                                        {d.label}
                                    </p>
                                    <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: 1.6, color: inkBody }}>
                                        {d.text}
                                    </p>
                                </div>
                            ))}
                        </section>
                    );
                })}

                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: inkSoft, marginTop: '3rem', letterSpacing: '0.1em' }}>
                    · fim do roteiro ·
                </p>
            </div>
        </main>
    );
}
