import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";

const items = [
  "Faturamento acima de R$ 1 milhão por ano, mas sem clareza sobre a margem real",
  "Equipe crescendo, mas sem processos definidos para sustentar a operação",
  "Decisões baseadas em intuição, não em dados estruturados",
  "Financeiro desorganizado, sem fluxo de caixa previsível",
  "Crescimento acelerado, mas com a sensação de que tudo pode desmoronar",
  "Fundadores sobrecarregados, presos na operação diária",
];

const ParaQuemSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-light-muted py-24 md:py-36">
      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-8" />
            <h2 className="text-dark text-3xl md:text-4xl font-light mb-4">
              Para Quem É
            </h2>
            <p className="text-muted-dark text-base md:text-lg font-light mb-12">
              A Alvore trabalha com empresas que reconhecem ao menos uma dessas realidades:
            </p>
          </motion.div>

          <ul className="space-y-6">
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
              >
                <span className="mt-1.5 flex-shrink-0 w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors duration-300">
                  <Check className="w-3.5 h-3.5 text-gold" strokeWidth={2} />
                </span>
                <span className="text-muted-dark text-base md:text-lg font-light leading-relaxed group-hover:text-dark transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ParaQuemSection;
