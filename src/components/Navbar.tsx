import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { getWhatsAppLinkDiagnostico } from "@/lib/whatsapp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Sobre", href: "#verdade" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Diagnóstico", href: "#diagnostico" },
    { label: "Serviços", href: "#servicos" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md border-b border-gold/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <a href="#" className="text-gold text-lg font-semibold tracking-[0.25em] uppercase">
            Alvore
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-muted-light text-sm font-light tracking-wider hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <a
              href={getWhatsAppLinkDiagnostico()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient text-dark text-xs font-semibold tracking-widest uppercase px-6 py-2.5 hover:opacity-90 transition-opacity duration-300"
            >
              Contato
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 w-7"
            aria-label="Menu"
          >
            <span className={`block h-[1px] bg-gold transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`block h-[1px] bg-gold transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1px] bg-gold transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-light text-xl font-light tracking-wider hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={getWhatsAppLinkDiagnostico()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient text-dark text-sm font-semibold tracking-widest uppercase px-8 py-3 mt-4"
            >
              Contato
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
