import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import officeImg from "@/assets/office-consulting.jpg";

const QuemSomosSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="quem-somos" className="bg-light py-24 md:py-36">
      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-5xl mx-auto">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mb-8" />
            <h2 className="text-dark text-3xl md:text-4xl font-light mb-10">
              Quem Somos
            </h2>
            <div className="space-y-6 text-muted-dark text-base md:text-lg font-light leading-[1.8]">
              <p>
                A Alvore é uma consultoria de gestão AI-first. Combinamos inteligência estratégica com tecnologia para entregar clareza operacional a empresas em crescimento.
              </p>
              <p>
                Não vendemos teoria. Entramos na operação, diagnosticamos o que trava e entregamos um plano executável — com indicadores, prazos e responsáveis.
              </p>
              <p className="text-dark font-medium">
                Gestão bem feita não é luxo. É a base para que o crescimento se sustente.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={officeImg}
                alt="Escritório Alvore Consultoria"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Gold corner accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/40" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
