import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle } from "lucide-react";

const sintomas = [
  "Você não tem clareza real da sua margem",
  "O caixa aperta mesmo com faturamento alto",
  "Decisões dependem excessivamente do dono",
  "Crescimento desorganizado",
  "Falta de previsibilidade financeira",
];

const ProblemaSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="problema" className="bg-light py-24 md:py-36">
      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-8" />
            <h2 className="text-dark text-3xl md:text-4xl font-semibold mb-4 leading-tight">
              O crescimento sem estrutura é{" "}
              <span className="text-gold">silenciosamente perigoso.</span>
            </h2>
            <p className="text-muted-dark text-base font-light mb-12">
              Se algum desses sintomas parece familiar, sua empresa precisa de estrutura — não de mais esforço.
            </p>
          </motion.div>

          <ul className="space-y-5">
            {sintomas.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <span className="mt-1 flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </span>
                <span className="text-dark text-base md:text-lg font-light leading-relaxed">
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

export default ProblemaSection;
