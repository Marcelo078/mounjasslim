import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  imageUrl?: string;
}

const SEO = ({ 
  title = "MounjaSlim - Perda de Peso Natural e Saudável | Emagreça com Saúde",
  description = "Descubra o MounjaSlim: a fórmula revolucionária 100% natural para perda de peso rápida e saudável. Milhares de clientes satisfeitos. Garantia de 30 dias. Frete grátis!",
  keywords = "mounja slim, emagrecedor natural, perda de peso, suplemento para emagrecer, queima gordura, acelera metabolismo, emagrecimento saudável",
  imageUrl = "/og-image.jpg"
}: SEOProps) => {
  
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta tags
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: imageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ];
    
    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (element) {
        element.content = content;
      } else {
        element = document.createElement("meta");
        if (name) element.name = name;
        if (property) element.setAttribute("property", property);
        element.content = content;
        document.head.appendChild(element);
      }
    });

    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "MounjaSlim",
      "description": description,
      "image": imageUrl,
      "brand": {
        "@type": "Brand",
        "name": "MounjaSlim"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2847"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://app.monetizze.com.br/r/AJZ25504136",
        "priceCurrency": "BRL",
        "price": "14.76",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "MounjaSlim"
        }
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData);
    } else {
      scriptTag = document.createElement("script") as HTMLScriptElement;
      scriptTag.type = "application/ld+json";
      scriptTag.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }
  }, [title, description, keywords, imageUrl]);

  return null;
};

export default SEO;
