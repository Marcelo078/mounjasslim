import { CheckCircle, Zap, Heart, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Acelera o metabolismo",
      description: "Potencializa a queima de gordura naturalmente, transformando seu corpo em uma máquina de perder peso."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "100% natural",
      description: "Fórmula desenvolvida com ingredientes naturais, sem químicos agressivos ou substâncias prejudiciais."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sem efeitos colaterais",
      description: "Seguro para uso diário. Testado e aprovado, sem causar mal-estar ou dependência."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Resultados comprovados",
      description: "Milhares de pessoas já transformaram suas vidas e conquistaram o corpo dos sonhos."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Por que MounjaSlim é diferente?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Não é apenas mais um suplemento. É uma solução completa baseada em ciência e resultados reais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary/50"
            >
              <div className="text-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
