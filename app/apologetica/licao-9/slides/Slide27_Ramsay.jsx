'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, StampBadge, colors } from './shared';

export default function Slide27_Ramsay() {
    const titulos = [
        { cidade: 'Tessalônica', titulo: 'Politarcas', status: '19 inscrições confirmam' },
        { cidade: 'Malta', titulo: 'Protos', status: 'Título exato confirmado' },
        { cidade: 'Filipos', titulo: 'Pretores', status: 'Inscrições locais confirmam' },
        { cidade: 'Éfeso', titulo: 'Asiarcas', status: 'Registros epigráficos confirmam' },
    ];

    return (
        <SlideWrapper variant="cream">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Ramsay e a Arqueologia"
                    subtitle="O cético que mudou de posição"
                    icon="🏛️"
                    protocol="CASO NT-02 · LUCAS-ATOS"
                    delay={0.2}
                />

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-4 rounded-xl border mb-6 text-center"
                    style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.slateBlue}30` }}
                >
                    <p className="text-sm mb-1" style={{ color: colors.textMuted }}>Sir William Ramsay (1851–1939)</p>
                    <p className="text-base italic" style={{ color: colors.amber }}>
                        Começou querendo provar que Atos era ficção.
                    </p>
                    <p className="text-base italic" style={{ color: colors.mossGreen }}>
                        Décadas de escavações depois, concluiu o oposto.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {titulos.map((t, i) => (
                        <motion.div
                            key={t.cidade}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.12 }}
                            className="flex items-center gap-3 p-3 rounded-lg border"
                            style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.mossGreen}25` }}
                        >
                            <div className="flex-1">
                                <h4 className="font-bold text-sm" style={{ color: colors.warmWhite }}>{t.cidade}</h4>
                                <p className="text-xs" style={{ color: colors.amber }}>Título: {t.titulo}</p>
                                <p className="text-xs" style={{ color: colors.mossGreen }}>{t.status}</p>
                            </div>
                            <StampBadge type="verified" size="sm" delay={0.8 + i * 0.1} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="p-4 rounded-xl text-center border"
                    style={{ background: `${colors.mossGreen}10`, borderColor: `${colors.mossGreen}30` }}
                >
                    <p className="text-lg font-bold italic" style={{ color: colors.mossGreen, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        &ldquo;Lucas é um historiador de primeira classe.&rdquo;
                    </p>
                    <p className="text-sm mt-1" style={{ color: colors.textMuted }}>— Sir William Ramsay</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
