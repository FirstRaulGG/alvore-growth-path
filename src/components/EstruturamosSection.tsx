import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BarChart3, Settings, TrendingUp, Workflow } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Financeiro",
    description: "Fluxo de caixa, margem real, projeções e controle financeiro com clareza total.",
  },
  {
    icon: Settings,
    title: "Gestão",
    description: "Estrutura organizacional, indicadores e processos decisórios baseados em dados.",
  },
  {
    icon: TrendingUp,
    title: "Comercial",
    description: "Pipeline estruturado, previsibilidade de receita e estratégia de crescimento sustentável.",
  },
  {
    icon: Workflow,
    title: "Processos",
    description: "Mapeamento, automação e padronização para uma operação autônoma e escalável.",
  },
];

const EstruturamosSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="bg-light py-24 md:py-36">
      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-8" />
            <h2 className="text-dark text-3xl md:text-4xl font-light mb-16">
              O que Estruturamos
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gold/15">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`p-10 md:p-12 group hover:bg-light-muted transition-colors duration-500 ${
                  index < 2 ? "border-b border-gold/15" : ""
                } ${index % 2 === 0 ? "md:border-r border-gold/15" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
              >
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold/60 transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-dark text-xl font-medium mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-dark text-base font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstruturamosSection;
