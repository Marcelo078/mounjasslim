import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      bottles: 1,
      oldPrice: "R$ 147,00",
      price: "14,76",
      savings: "Economize 90%",
      popular: false
    },
    {
      bottles: 3,
      oldPrice: "R$ 294,00",
      price: "23,80",
      savings: "Economize 92%",
      popular: true
    },
    {
      bottles: 5,
      oldPrice: "R$ 490,00",
      price: "33,84",
      savings: "Economize 93%",
      popular: false
    }
  ];

  const benefits = [
    "Fórmula 100% natural e segura",
    "Resultados visíveis em semanas",
    "Frete grátis para todo Brasil",
    "Garantia de 30 dias",
    "Suporte especializado"
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Escolha seu kit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quanto mais você compra, mais economiza. Aproveite as ofertas especiais!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-lg border-2 transition-all hover:shadow-xl relative ${
                pkg.popular ? 'border-primary scale-105' : 'border-border'
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-sm px-4 py-1">
                  Mais Popular
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                  {pkg.bottles} MounjaSlim
                </h3>
                <p className="text-sm text-muted-foreground line-through">
                  {pkg.oldPrice}
                </p>
                <div className="my-4">
                  <span className="text-sm text-muted-foreground">por apenas</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-secondary">R$</span>
                    <span className="text-5xl font-bold text-secondary">{pkg.price}</span>
                  </div>
                </div>
                <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent">
                  {pkg.savings}
                </Badge>
              </div>

              <Button 
                className="w-full mb-4 text-lg py-6 font-bold"
                variant="secondary"
                size="lg"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AJZ25504136" target="_blank" rel="noopener noreferrer">
                  Comprar agora
                </a>
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                🔒 Compra 100% segura
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-card-foreground">
            O que está incluído:
          </h3>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
