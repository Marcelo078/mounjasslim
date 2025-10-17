import { Button } from "@/components/ui/button";
import productImage from "@/assets/product-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[hsl(var(--primary-start))] to-[hsl(var(--primary-end))] px-4 py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              MounjaSlim: o segredo por trás da perda de peso rápida e saudável
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto lg:mx-0">
              A fórmula revolucionária que está mudando vidas! Perca peso de forma natural, sem efeitos colaterais e com resultados comprovados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl transition-all"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AJZ25504136" target="_blank" rel="noopener noreferrer">
                  Comprar com 30% OFF 🔥
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={productImage} 
                alt="MounjaSlim - Fórmula para perda de peso saudável" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
