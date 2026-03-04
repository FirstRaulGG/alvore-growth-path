import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Target, Cpu } from "lucide-react";
import alvoreLogo from "@/assets/alvore-logo.png";

const cards = [
  {
    icon: TrendingUp,
    title: "Empresas em fase de crescimento",
    subtitle: "1M–50M de faturamento",
    desc: "Faturamento consolidado, mas sem estrutura financeira e de gestão compatível com o porte.",
  },
  {
    icon: Target,
    title: "Fundadores e executivos",
    subtitle: "Decisões mais claras",
    desc: "Líderes que reconhecem que o próximo nível exige decisão baseada em dados, não em intuição.",
  },
  {
    icon: Cpu,
    title: "Empresas que querem integrar IA",
    subtitle: "IA aplicada à gestão",
    desc: "Organizações prontas para integrar inteligência artificial à governança e operação.",
  },
];

const AuthoritySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-dark relative py-28 md:py-40 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(hsl(var(--gold)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Watermark logo */}
      <img src={alvoreLogo} alt="" className="absolute bottom-8 right-8 w-24 h-24 object-contain opacity-[0.04] pointer-events-none select-none" />
      
      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mx-auto mb-8" />
            <h2 className="text-light text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight">
              Para empresas que querem escalar{" "}
              <span className="text-gold">com estrutura</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="group relative border border-gold/10 bg-dark-lighter p-8 lg:p-10 hover:border-gold/30 transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
              >
                {/* Gold accent top line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] gold-gradient group-hover:w-full transition-all duration-700" />
                
                <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center mb-7 group-hover:border-gold/50 transition-colors duration-500">
                  <card.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-light text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-gold text-xs font-medium tracking-wider uppercase mb-4">{card.subtitle}</p>
                <p className="text-muted-light text-sm font-light leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
