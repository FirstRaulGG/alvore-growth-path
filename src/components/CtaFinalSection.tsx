import { getWhatsAppLinkEspecialista } from "@/lib/whatsapp";

const CtaFinalSection = () => {
  return (
    <section className="bg-dark py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] gold-gradient opacity-20" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-light text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-12">
            Se você já cresceu no esforço, agora é hora de crescer com{" "}
            <span className="text-gold">direção</span>.
          </h2>

          <a
            href={getWhatsAppLinkEspecialista()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-dark font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:opacity-90 transition-opacity duration-300"
          >
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaFinalSection;
