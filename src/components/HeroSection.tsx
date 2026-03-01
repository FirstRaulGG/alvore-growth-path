import { getWhatsAppLinkDiagnostico } from "@/lib/whatsapp";

const HeroSection = () => {
  return (
    <section className="bg-dark min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle golden accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] gold-gradient opacity-40" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-32">
        <div className="max-w-3xl">
          <div className="gold-line mb-8 animate-fade-in" />
          
          <h1 className="text-gold text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 animate-fade-up">
            Transformamos intenção em direção.
          </h1>
          
          <p className="text-muted-light text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Organizamos o financeiro, estruturamos a gestão e criamos previsibilidade para empresas que já cresceram — mas ainda operam sem clareza real.
          </p>
          
          <a
            href={getWhatsAppLinkDiagnostico()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-dark font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:opacity-90 transition-opacity duration-300 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Agendar Diagnóstico Estratégico
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent" />
    </section>
  );
};

export default HeroSection;
