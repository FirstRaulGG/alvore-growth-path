import { motion } from "framer-motion";
import { getWhatsAppLinkDiagnostico } from "@/lib/whatsapp";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="bg-dark min-h-screen flex items-center relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            className="gold-line mb-8"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.h1
            className="text-gold text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.15] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transformamos intenção<br />em direção.
          </motion.h1>

          <motion.p
            className="text-muted-light text-lg md:text-xl font-light leading-relaxed mb-14 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Organizamos o financeiro, estruturamos a gestão e criamos previsibilidade para empresas que já cresceram — mas ainda operam sem clareza real.
          </motion.p>

          <motion.a
            href={getWhatsAppLinkDiagnostico()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-dark font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(41_58%_54%/0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Agendar Diagnóstico Estratégico
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-muted-light text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gold/40"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
