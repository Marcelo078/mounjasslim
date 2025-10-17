const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Acelera o metabolismo",
      description: "Os ingredientes ativos começam a trabalhar imediatamente, aumentando a queima de calorias mesmo em repouso."
    },
    {
      number: "2",
      title: "Controla o apetite",
      description: "Reduz a ansiedade por comida e ajuda você a fazer escolhas mais saudáveis naturalmente."
    },
    {
      number: "3",
      title: "Queima gordura localizada",
      description: "Ataca diretamente os depósitos de gordura mais difíceis, especialmente na barriga, coxas e braços."
    },
    {
      number: "4",
      title: "Mantém os resultados",
      description: "Diferente de dietas radicais, ajuda você a manter o peso ideal sem efeito sanfona."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[hsl(var(--primary-start))] to-[hsl(var(--primary-end))]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 text-primary-foreground">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Como MounjaSlim funciona?
          </h2>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Uma abordagem científica em 4 etapas para transformar seu corpo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {step.number}
                </div>
                <div className="text-primary-foreground">
                  <h3 className="text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="opacity-90">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
