import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { number: "150+", label: "Diagnósticos realizados" },
  { number: "R$ 2Bi+", label: "Em faturamento estruturado" },
  { number: "92%", label: "De retenção de clientes" },
];

const VerdadeSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="verdade" className="bg-light py-24 md:py-36">
      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-8" />
            <h2 className="text-dark text-3xl md:text-4xl font-light mb-10">
              A Verdade
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 text-muted-dark text-base md:text-lg font-light leading-[1.8]"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>
              Muitas empresas cresceram rápido. Conquistaram clientes, montaram equipes, aumentaram o faturamento. Mas por dentro, a operação não acompanhou.
            </p>
            <p>
              O financeiro não tem previsibilidade. As decisões são tomadas por instinto. O crescimento acontece, mas ninguém sabe dizer com exatidão para onde ele está levando.
            </p>
            <p className="text-dark font-medium">
              Não é falta de esforço. É falta de estrutura. E estrutura não se resolve com mais trabalho — se resolve com clareza, método e direção.
            </p>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="max-w-3xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-16 border-t border-gold/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-gold text-3xl md:text-4xl font-light mb-2">{stat.number}</p>
              <p className="text-muted-dark text-sm font-light tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VerdadeSection;
