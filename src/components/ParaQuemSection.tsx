import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const perfis = [
  {
    title: "Empresas entre R$1M e R$20M",
    desc: "Faturamento consolidado, mas sem estrutura financeira e de gestão compatível com o porte.",
  },
  {
    title: "Empresas em expansão",
    desc: "Crescimento acelerado que está expondo a fragilidade dos processos internos e da governança.",
  },
  {
    title: "Empresas que querem crescer com estrutura",
    desc: "Fundadores que reconhecem que o próximo nível exige decisão baseada em dados, não em intuição.",
  },
];

const ParaQuemSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="para-quem" className="bg-light py-24 md:py-36">
      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-8" />
            <h2 className="text-dark text-3xl md:text-4xl font-semibold mb-12">
              Para Quem É
            </h2>
          </motion.div>

          <div className="space-y-8">
            {perfis.map((perfil, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 border-l-2 border-gold/30 pl-6 hover:border-gold transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * index }}
              >
                <div>
                  <h3 className="text-dark text-lg font-medium mb-1 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-gold" />
                    {perfil.title}
                  </h3>
                  <p className="text-muted-dark text-base font-light leading-relaxed">
                    {perfil.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaQuemSection;
