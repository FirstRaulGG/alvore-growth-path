import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getWhatsAppLinkEspecialista } from "@/lib/whatsapp";

const CtaFinalSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-dark py-32 md:py-44 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] gold-gradient opacity-20" />

      <div ref={ref} className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="gold-line mx-auto mb-10"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 60 } : {}}
            transition={{ duration: 0.8 }}
          />

          <motion.h2
            className="text-light text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Se você já cresceu no esforço, agora é hora de crescer com{" "}
            <span className="text-gold">direção</span>.
          </motion.h2>

          <motion.a
            href={getWhatsAppLinkEspecialista()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-dark font-semibold text-sm tracking-widest uppercase px-12 py-5 hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_40px_hsl(41_58%_54%/0.25)]"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Falar com um especialista
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CtaFinalSection;
