import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-dark min-h-screen flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            className="gold-line mb-10"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.2 }} />
          

          <motion.h1
            className="text-light text-3xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.15] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}>
            
            Empresas que escalam constroem estrutura{" "}
            <span className="text-gold">quebram no auge.</span>
          </motion.h1>

          <motion.p
            className="text-muted-light text-lg md:text-xl font-light leading-relaxed mb-14 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}>
            Projetamos a Segunda Mente da sua empresa, conectando governança, dados e IA para decisões mais claras e crescimento sustentável.

          </motion.p>

          <motion.a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 gold-gradient text-dark font-semibold text-sm tracking-wider uppercase px-10 py-4 hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(41_58%_54%/0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            
            <MessageCircle className="w-5 h-5" />
            Falar com a Alvore no WhatsApp
          </motion.a>
        </div>
      </div>
    </section>);

};

export default HeroSection;