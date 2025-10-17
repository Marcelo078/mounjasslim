import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carla Marcela",
      image: testimonial1,
      rating: 5,
      text: "Perdi 12kg em 2 meses! Nunca imaginei que seria tão fácil. O MounjaSlim mudou minha vida completamente. Hoje me sinto mais confiante e saudável."
    },
    {
      name: "Mívia Gabriela",
      image: testimonial2,
      rating: 5,
      text: "Testei vários produtos antes, mas só o MounjaSlim realmente funcionou. Em 45 dias eliminei 9kg sem passar fome e sem sofrimento. Recomendo!"
    },
    {
      name: "Flávia Poppo",
      image: testimonial3,
      rating: 5,
      text: "Estava muito acima do peso e sem esperança. Com MounjaSlim consegui emagrecer 15kg em 3 meses. Minha autoestima voltou e hoje sou outra pessoa!"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Histórias reais de transformação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que quem já experimentou tem a dizer sobre MounjaSlim
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/20"
                />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  {testimonial.name}
                </h3>
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
