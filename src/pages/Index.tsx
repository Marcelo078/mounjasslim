import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Index;
