# NAVEGAÇÃO POR MOVIMENTOS — Briefing + código pronto
## Para o deck `/app/apologetica/joao/encontro-1/`

O deck vai passar de 56 para 94 slides cobrindo João 1–6. Com sessões que param no meio (paramos no cap. 2 com 2h de conversa), precisamos de três coisas: **retomar de onde parou**, **pular direto para um movimento**, e **ver onde estamos**. Tudo abaixo usa apenas o design system existente — nenhuma cor ou fonte nova.

## O que entra

1. **`movementFor` atualizado** — 7 movimentos com capítulo no label.
2. **Menu de movimentos (overlay)** — abre com a tecla `M` ou clicando no label central da barra inferior. Lista os sete movimentos (numeral romano, nome, capítulo, intervalo de slides); clicar pula para o primeiro slide do movimento.
3. **Teclas 1–7** — pulam direto para o início do movimento correspondente.
4. **Retomada por URL** — `?slide=43` abre direto no slide 43. O índice atual é refletido na URL (via `replaceState`), então um refresh não volta ao início. Para a próxima sessão (Nicodemos): abrir `/apologetica/joao/encontro-1?slide=43`.
5. **Retomada automática** — o último slide visto fica em `localStorage`; ao abrir sem `?slide=`, aparece um pill discreto "Continuar do slide N" por alguns segundos.

## Código

### 1. `movementFor` (substituir no `page.jsx`)

```jsx
// Intervalos em índice zero. AJUSTAR os limites se a contagem final
// de slides dos novos movimentos mudar na implementação.
const MOVEMENTS = [
    { roman: 'I',   label: 'O Prólogo',      chapter: 'João 1.1–18',  start: 0,  end: 21, accentKey: 'lapis' },
    { roman: 'II',  label: 'Testemunhas',    chapter: 'João 1.19–51', start: 22, end: 33, accentKey: 'gold' },
    { roman: 'III', label: 'Sinal e Templo', chapter: 'João 2',       start: 34, end: 41, accentKey: 'wine' },
    { roman: 'IV',  label: 'Nicodemos',      chapter: 'João 3',       start: 42, end: 55, accentKey: 'lapisDeep' },
    { roman: 'V',   label: 'O Poço',         chapter: 'João 4',       start: 56, end: 69, accentKey: 'lapisSoft' },
    { roman: 'VI',  label: 'Betesda',        chapter: 'João 5',       start: 70, end: 80, accentKey: 'wine' },
    { roman: 'VII', label: 'O Pão',          chapter: 'João 6',       start: 81, end: 93, accentKey: 'gold' },
];

function movementFor(index0) {
    const mov = MOVEMENTS.find(m => index0 >= m.start && index0 <= m.end) ?? MOVEMENTS[MOVEMENTS.length - 1];
    return { ...mov, accent: colors[mov.accentKey] };
}
```

### 2. Estado inicial com `?slide=` + localStorage (dentro do componente)

```jsx
const STORAGE_KEY = 'joao-encontro-1-slide';

const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
const [resumeHint, setResumeHint] = useState(null); // slide salvo, se houver
const [menuOpen, setMenuOpen] = useState(false);

// Inicialização: ?slide= tem prioridade; senão, oferece retomada
useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = parseInt(params.get('slide'), 10);
    const saved = parseInt(localStorage.getItem(STORAGE_KEY), 10);

    if (!isNaN(fromUrl) && fromUrl >= 1 && fromUrl <= totalSlides) {
        setCurrentSlideIndex(fromUrl - 1);
    } else if (!isNaN(saved) && saved > 0 && saved < totalSlides) {
        setResumeHint(saved); // mostra o pill; não pula sozinho
        const t = setTimeout(() => setResumeHint(null), 8000);
        return () => clearTimeout(t);
    }
}, []);

// Persistência: localStorage + URL sempre atualizados
useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(currentSlideIndex));
    const url = new URL(window.location);
    url.searchParams.set('slide', String(currentSlideIndex + 1));
    window.history.replaceState({}, '', url);
}, [currentSlideIndex]);
```

### 3. Teclado: M para o menu, 1–7 para os movimentos (substituir o handler atual)

```jsx
useEffect(() => {
    const handleKeyDown = (e) => {
        if (e.key === 'm' || e.key === 'M') {
            setMenuOpen(open => !open);
            return;
        }
        if (e.key === 'Escape') { setMenuOpen(false); return; }

        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= MOVEMENTS.length) {
            setCurrentSlideIndex(MOVEMENTS[num - 1].start);
            setMenuOpen(false);
            return;
        }

        if (e.key === 'f' || e.key === 'F') {
            if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
            else document.exitFullscreen?.();
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
            e.preventDefault(); nextSlide();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault(); prevSlide();
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
}, [currentSlideIndex, totalSlides]);
```

### 4. Componente `MovementNav` (overlay)

```jsx
function MovementNav({ open, onClose, current, onJump }) {
    if (!open) return null;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
            style={{ background: `${colors.inkDeep}CC`, backdropFilter: 'blur(6px)' }}
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full max-w-xl mx-4 px-8 py-8"
                style={{
                    background: colors.parchment,
                    border: `1px solid ${colors.inkSoft}40`,
                    borderRadius: '2px',
                }}
                onClick={e => e.stopPropagation()}
            >
                <p
                    className="text-xs uppercase tracking-[0.45em] mb-6 text-center"
                    style={{ color: colors.inkMuted, fontFamily: fonts.body, fontVariant: 'small-caps' }}
                >
                    Encontro 1 · João 1–6
                </p>
                {MOVEMENTS.map((m, i) => {
                    const active = current >= m.start && current <= m.end;
                    const accent = colors[m.accentKey];
                    return (
                        <button
                            key={m.roman}
                            onClick={() => { onJump(m.start); onClose(); }}
                            className="w-full flex items-baseline justify-between px-4 py-3 my-1 text-left transition-colors"
                            style={{
                                background: active ? `${accent}14` : 'transparent',
                                borderLeft: `2px solid ${active ? accent : 'transparent'}`,
                                fontFamily: fonts.body,
                            }}
                        >
                            <span className="flex items-baseline gap-4">
                                <span className="text-sm w-8" style={{ color: accent, fontVariant: 'small-caps' }}>
                                    {m.roman}
                                </span>
                                <span style={{ color: colors.inkDeep }}>{m.label}</span>
                            </span>
                            <span className="text-xs" style={{ color: colors.inkMuted, letterSpacing: '0.1em' }}>
                                {m.chapter} · {m.start + 1}–{m.end + 1}
                            </span>
                        </button>
                    );
                })}
                <p className="text-[10px] mt-6 text-center" style={{ color: colors.inkMuted, letterSpacing: '0.1em' }}>
                    Teclas 1–7 pulam direto · M abre e fecha · Esc fecha
                </p>
            </motion.div>
        </motion.div>
    );
}
```

### 5. Pill de retomada (renderizar junto da barra inferior)

```jsx
{resumeHint !== null && (
    <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        onClick={() => { setCurrentSlideIndex(resumeHint); setResumeHint(null); }}
        className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-5 py-2 text-sm rounded-full"
        style={{
            background: colors.parchmentDeep,
            border: `1px solid ${colors.gold}66`,
            color: colors.inkDeep,
            fontFamily: fonts.body,
            fontVariant: 'small-caps',
            letterSpacing: '0.12em',
        }}
    >
        Continuar do slide {resumeHint + 1} →
    </motion.button>
)}
```

### 6. Mudanças na barra inferior existente

- O `<span>` central ("Mov. I · O Prólogo — N / total") vira um `<button>` que faz `setMenuOpen(true)` — vira a porta de entrada do menu no toque/clique, além da tecla M.
- Acrescentar `· {mov.chapter}` ao label central: `Mov. {mov.roman} · {mov.label} · {mov.chapter} — {n} / {total}`.
- Renderizar `<MovementNav open={menuOpen} onClose={() => setMenuOpen(false)} current={currentSlideIndex} onJump={setCurrentSlideIndex} />` no topo do JSX retornado.

## Detalhes de qualidade

- O menu fecha com Esc, clique no fundo, ou após pular.
- `prefers-reduced-motion`: as animações do overlay são curtas (0.35s); se quiser, condicionar com `useReducedMotion()` do framer-motion.
- Acessibilidade mínima: o botão central da barra ganha `aria-label="Abrir menu de movimentos"`; o overlay, `role="dialog"`.
- **Lembrete operacional:** para a próxima sessão com a Guga, abrir em `?slide=43` (início de Nicodemos) — ou simplesmente confiar no pill de retomada.