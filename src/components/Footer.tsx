const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MounjaSlim</h3>
            <p className="text-background/80 text-sm">
              A solução natural para perda de peso saudável e duradoura. Transforme seu corpo e sua vida.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Informações</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Política de Privacidade</li>
              <li>Termos de Uso</li>
              <li>Política de Reembolso</li>
              <li>Contato</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Garantias</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>✓ Produto 100% Original</li>
              <li>✓ Compra Segura</li>
              <li>✓ Garantia de 30 dias</li>
              <li>✓ Frete Grátis</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p className="mb-4">
            AVISO IMPORTANTE: Os resultados podem variar de pessoa para pessoa. Este produto não substitui orientação médica profissional. Consulte sempre um profissional de saúde antes de iniciar qualquer programa de perda de peso.
          </p>
          <p>
            © 2025 MounjaSlim. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
