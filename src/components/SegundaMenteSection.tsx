import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Database, Shield, Brain, BarChart3, Rocket } from "lucide-react";
import alvoreLogo from "@/assets/alvore-logo.png";

const nodes = [
  { icon: Database, label: "Dados" },
  { icon: Shield, label: "Governança" },
  { icon: Brain, label: "IA" },
  { icon: BarChart3, label: "Decisões" },
  { icon: Rocket, label: "Escala" },
];

const SegundaMenteSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-light relative py-28 md:py-40 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]" style={{
        background: `radial-gradient(circle, hsl(var(--gold)), transparent 70%)`,
      }} />

      {/* Watermark logo */}
      <img src={alvoreLogo} alt="" className="absolute top-10 right-10 w-28 h-28 object-contain opacity-[0.06] pointer-events-none select-none" />

      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="gold-line mb-8" />
              <h2 className="text-dark text-3xl md:text-4xl font-semibold leading-tight mb-6">
                O que é uma{" "}
                <span className="text-gold">Segunda Mente</span>{" "}
                empresarial?
              </h2>
              <div className="space-y-4">
                <p className="text-muted-dark text-base md:text-lg font-light leading-relaxed">
                  Uma Segunda Mente não é um software isolado.
                </p>
                <p className="text-muted-dark text-base md:text-lg font-light leading-relaxed">
                  É a infraestrutura que organiza dados, estrutura decisões e integra IA à governança da empresa.
                </p>
              </div>
            </motion.div>

            {/* Diagram side */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative flex flex-col items-center gap-0">
                {nodes.map((node, i) => (
                  <div key={i} className="flex flex-col items-center">
                    {/* Connecting line (before node, except first) */}
                    {i > 0 && (
                      <motion.div
                        className="w-[2px] h-10 md:h-12"
                        style={{ background: `linear-gradient(to bottom, hsl(var(--gold) / 0.15), hsl(var(--gold) / 0.4))` }}
                        initial={{ scaleY: 0 }}
                        animate={isVisible ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                      />
                    )}
                    
                    {/* Node */}
                    <motion.div
                      className="flex items-center gap-4 group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                    >
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gold/30 bg-dark flex items-center justify-center group-hover:border-gold/60 transition-colors duration-500 shadow-[0_0_20px_hsl(var(--gold)/0.1)]">
                        <node.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" strokeWidth={1.5} />
                      </div>
                      <span className="text-dark text-base md:text-lg font-medium tracking-wide min-w-[100px]">
                        {node.label}
                      </span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegundaMenteSection;
