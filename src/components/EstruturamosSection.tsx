import { BarChart3, Settings, TrendingUp, Workflow } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Financeiro",
    description: "Fluxo de caixa, margem real, projeções e controle financeiro com clareza total.",
  },
  {
    icon: Settings,
    title: "Gestão",
    description: "Estrutura organizacional, indicadores e processos decisórios baseados em dados.",
  },
  {
    icon: TrendingUp,
    title: "Comercial",
    description: "Pipeline estruturado, previsibilidade de receita e estratégia de crescimento sustentável.",
  },
  {
    icon: Workflow,
    title: "Processos",
    description: "Mapeamento, automação e padronização para uma operação que funciona sem depender de pessoas-chave.",
  },
];

const EstruturamosSection = () => {
  return (
    <section className="bg-dark py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="gold-line mb-8" />
          <h2 className="text-light text-3xl md:text-4xl font-light mb-16">
            O que Estruturamos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <service.icon
                  className="w-8 h-8 text-gold mb-5"
                  strokeWidth={1}
                />
                <h3 className="text-light text-xl font-medium mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-light text-base font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstruturamosSection;
