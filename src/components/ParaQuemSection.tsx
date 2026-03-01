import { Check } from "lucide-react";

const items = [
  "Faturamento acima de R$ 1 milhão por ano, mas sem clareza sobre a margem real",
  "Equipe crescendo, mas sem processos definidos para sustentar a operação",
  "Decisões baseadas em intuição, não em dados estruturados",
  "Financeiro desorganizado, sem fluxo de caixa previsível",
  "Crescimento acelerado, mas com a sensação de que tudo pode desmoronar",
  "Fundadores sobrecarregados, presos na operação diária",
];

const ParaQuemSection = () => {
  return (
    <section className="bg-light py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="gold-line mb-8" />
          <h2 className="text-dark text-3xl md:text-4xl font-light mb-4">
            Para Quem É
          </h2>
          <p className="text-muted-dark text-base md:text-lg font-light mb-12">
            A Alvore trabalha com empresas que reconhecem ao menos uma dessas realidades:
          </p>

          <ul className="space-y-5">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="mt-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </span>
                <span className="text-muted-dark text-base md:text-lg font-light leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ParaQuemSection;
