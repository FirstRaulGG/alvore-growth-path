import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, Shield, Brain } from "lucide-react";

const etapas = [
  {
    num: "01",
    icon: Search,
    title: "Diagnóstico Estrutural",
    desc: "Análise profunda do financeiro, operação e tomada de decisão. Identificamos onde a empresa sangra sem perceber.",
  },
  {
    num: "02",
    icon: Shield,
    title: "Implementação de Governança Financeira",
    desc: "Construímos fluxo de caixa real, margem por produto/serviço e modelo de projeção para decisões com base em dados — não em achismo.",
  },
  {
    num: "03",
    icon: Brain,
    title: "Infraestrutura Cognitiva com IA",
    desc: "Integramos inteligência artificial nos processos decisórios da empresa. Dashboards preditivos, automação de análise e alertas em tempo real.",
  },
];

const ComoAtuamosSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="como-atuamos" className="bg-dark py-28 md:py-40 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(hsl(var(--gold)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />
      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-8" />
            <h2 className="text-light text-3xl md:text-4xl font-semibold mb-4">
              Arquitetura de Decisão <span className="text-gold">Alvore</span>
            </h2>
            <p className="text-muted-light text-base font-light mb-16 max-w-2xl">
              Três camadas de implementação que transformam a gestão da sua empresa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {etapas.map((etapa, i) => (
              <motion.div
                key={i}
                className="border border-gold/15 p-8 hover:border-gold/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
              >
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                  <etapa.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-xs font-light tracking-widest">{etapa.num}</span>
                <h3 className="text-light text-lg font-medium mt-2 mb-3">{etapa.title}</h3>
                <p className="text-muted-light text-sm font-light leading-relaxed">{etapa.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoAtuamosSection;
