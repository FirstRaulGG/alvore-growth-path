import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import alvoreLogo from "@/assets/alvore-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [navHovered, setNavHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "O Problema", href: "#problema" },
    { label: "Como Atuamos", href: "#como-atuamos" },
    { label: "Para Quem", href: "#para-quem" },
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
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => setNavHovered(false)}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md border-b border-gold/10 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Brand */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group relative"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.img
              src={alvoreLogo}
              alt="Alvore"
              className="h-8 w-8 object-contain"
              animate={{ rotate: navHovered ? 360 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <span className="text-gold text-lg font-semibold tracking-[0.25em] uppercase group-hover:tracking-[0.35em] transition-all duration-500">
              Alvore
            </span>
            {/* Underline on hover */}
            <span className="absolute -bottom-1 left-0 h-[1px] w-0 gold-gradient group-hover:w-full transition-all duration-500" />
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-5 py-2.5 text-sm font-light tracking-wider transition-colors duration-300"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background pill on hover */}
                <AnimatePresence>
                  {hoveredLink === link.href && (
                    <motion.span
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'hsl(var(--gold) / 0.08)' }}
                      layoutId="navHover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </AnimatePresence>

                {/* Logo icon appears on hover */}
                <span className="relative z-10 flex items-center gap-2">
                  <AnimatePresence>
                    {hoveredLink === link.href && (
                      <motion.img
                        src={alvoreLogo}
                        alt=""
                        className="w-3.5 h-3.5 object-contain"
                        initial={{ opacity: 0, scale: 0, width: 0 }}
                        animate={{ opacity: 0.7, scale: 1, width: 14 }}
                        exit={{ opacity: 0, scale: 0, width: 0 }}
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className={`transition-colors duration-300 ${hoveredLink === link.href ? "text-gold" : "text-muted-light"}`}>
                    {link.label}
                  </span>
                </span>
              </motion.button>
            ))}

            <motion.a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gold-gradient text-dark text-xs font-semibold tracking-widest uppercase px-6 py-2.5 ml-4"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(41 58% 54% / 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </motion.a>
          </div>

          {/* Mobile hamburger */}
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
            {/* Watermark logo */}
            <img src={alvoreLogo} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 object-contain opacity-[0.04] pointer-events-none select-none" />

            {links.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="flex items-center gap-3 text-light text-xl font-light tracking-wider hover:text-gold transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={alvoreLogo} alt="" className="w-4 h-4 object-contain opacity-30" />
                {link.label}
              </motion.button>
            ))}
            <motion.a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gold-gradient text-dark text-sm font-semibold tracking-widest uppercase px-8 py-3 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
