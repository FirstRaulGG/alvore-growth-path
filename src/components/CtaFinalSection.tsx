import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import alvoreLogo from "@/assets/alvore-logo.png";

const CtaFinalSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-dark py-32 md:py-44 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] gold-gradient opacity-20" />

      {/* Watermark logo */}
      <img src={alvoreLogo} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 object-contain opacity-[0.02] pointer-events-none select-none" />

      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="gold-line mx-auto mb-10"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 60 } : {}}
            transition={{ duration: 0.8 }}
          />

          <motion.h2
            className="text-light text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Se sua empresa já cresceu, agora ela precisa de{" "}
            <span className="text-gold">estrutura.</span>
          </motion.h2>

          <motion.p
            className="text-muted-light text-base font-light mb-14 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Converse com a Alvore e descubra o que está travando o próximo nível da sua operação.
          </motion.p>

          <motion.a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 gold-gradient text-dark font-semibold text-sm tracking-wider uppercase px-12 py-5 hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_40px_hsl(41_58%_54%/0.25)]"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Diagnóstico no WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CtaFinalSection;
