import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "MounjaSlim realmente funciona?",
      answer: "Sim! MounjaSlim é formulado com ingredientes naturais cientificamente comprovados para auxiliar na perda de peso. Milhares de clientes já comprovaram os resultados, com perda de peso visível em poucas semanas de uso regular."
    },
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "Os primeiros resultados podem ser notados já nas primeiras semanas, mas recomendamos o uso contínuo por pelo menos 60-90 dias para resultados mais significativos e duradouros. Cada organismo responde de forma diferente."
    },
    {
      question: "Tem efeitos colaterais?",
      answer: "MounjaSlim é 100% natural e seguro. Não causa efeitos colaterais quando usado conforme as instruções. No entanto, se você tem alguma condição médica ou está grávida/amamentando, consulte seu médico antes de usar."
    },
    {
      question: "Como devo tomar o MounjaSlim?",
      answer: "Recomenda-se tomar 2 cápsulas ao dia, preferencialmente antes das principais refeições, com um copo de água. Para melhores resultados, combine com uma alimentação equilibrada e prática de exercícios físicos."
    },
    {
      question: "Posso comprar na farmácia?",
      answer: "Não. MounjaSlim é um produto exclusivo e só pode ser adquirido através do site oficial. Isso garante que você receba o produto original com todas as garantias e benefícios."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Oferecemos garantia de satisfação de 30 dias. Se você não estiver satisfeito com os resultados, devolvemos 100% do seu dinheiro, sem perguntas."
    },
    {
      question: "O frete é grátis?",
      answer: "Sim! Para compras acima de 2 unidades, o frete é totalmente grátis para todo o Brasil. Você recebe em casa sem custo adicional."
    },
    {
      question: "É seguro comprar online?",
      answer: "Totalmente seguro! Utilizamos criptografia de ponta e sistemas de pagamento certificados. Seus dados estão protegidos e a compra é 100% segura."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire todas as suas dúvidas sobre o MounjaSlim
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
