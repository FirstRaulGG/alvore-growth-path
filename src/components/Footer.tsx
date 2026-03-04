import { motion } from "framer-motion";
import alvoreLogo from "@/assets/alvore-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-lighter py-12 border-t border-gold/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.a
            href="#"
            className="flex items-center gap-3 group relative"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.img
              src={alvoreLogo}
              alt="Alvore"
              className="h-6 w-6 object-contain"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase group-hover:tracking-[0.3em] transition-all duration-500">
              Alvore
            </span>
            <span className="absolute -bottom-1 left-0 h-[1px] w-0 gold-gradient group-hover:w-full transition-all duration-500" />
          </motion.a>
          <p className="text-muted-light text-xs font-light tracking-wide">
            {year} Alvore Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
