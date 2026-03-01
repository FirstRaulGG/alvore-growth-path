import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getWhatsAppLinkDiagnostico } from "@/lib/whatsapp";
import diagnosticoBg from "@/assets/diagnostico-bg.jpg";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Imersão", desc: "Análise profunda de financeiro, processos e estrutura comercial." },
  { num: "02", title: "Diagnóstico", desc: "Mapeamento de gargalos e oportunidades com dados reais." },
  { num: "03", title: "Plano de Ação", desc: "Entrega de roadmap estruturado com prioridades, prazos e responsáveis." },
];

const DiagnosticoSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="diagnostico" className="bg-dark py-24 md:py-36 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${diagnosticoBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-8" />
            <h2 className="text-light text-3xl md:text-4xl font-light mb-6">
              Diagnóstico Estratégico
            </h2>
            <p className="text-muted-light text-base md:text-lg font-light leading-[1.8] max-w-2xl mb-16">
              Um raio-x completo da sua operação. Não é uma reunião genérica — é uma imersão objetiva no que realmente importa para o seu negócio avançar.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="border border-gold/15 p-8 hover:border-gold/40 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                <span className="text-gold text-sm font-light tracking-widest">{step.num}</span>
                <h3 className="text-light text-xl font-medium mt-4 mb-3">{step.title}</h3>
                <p className="text-muted-light text-sm font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href={getWhatsAppLinkDiagnostico()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gold text-gold font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold hover:text-dark transition-all duration-300 group"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar Diagnóstico
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticoSection;
