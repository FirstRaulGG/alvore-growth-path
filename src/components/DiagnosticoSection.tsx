import { getWhatsAppLinkDiagnostico } from "@/lib/whatsapp";

const DiagnosticoSection = () => {
  return (
    <section className="bg-light-muted py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="gold-line mb-8" />
          <h2 className="text-dark text-3xl md:text-4xl font-light mb-10">
            Diagnóstico Estratégico
          </h2>

          <div className="space-y-6 text-muted-dark text-base md:text-lg font-light leading-relaxed mb-12">
            <p>
              O Diagnóstico Estratégico Alvore é um raio-x completo da sua operação. Analisamos o financeiro, os processos, a estrutura comercial e a gestão como um todo.
            </p>
            <p>
              O resultado é um plano de ação estruturado, com prioridades claras, indicadores de acompanhamento e um caminho definido para que sua empresa saia do improviso e passe a operar com previsibilidade.
            </p>
            <p>
              Não é uma reunião genérica. É uma imersão objetiva no que realmente importa para o seu negócio avançar.
            </p>
          </div>

          <a
            href={getWhatsAppLinkDiagnostico()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold text-gold font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Solicitar Diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticoSection;
