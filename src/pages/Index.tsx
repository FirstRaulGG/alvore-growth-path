import HeroSection from "@/components/HeroSection";
import VerdadeSection from "@/components/VerdadeSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import ParaQuemSection from "@/components/ParaQuemSection";
import DiagnosticoSection from "@/components/DiagnosticoSection";
import EstruturamosSection from "@/components/EstruturamosSection";
import CtaFinalSection from "@/components/CtaFinalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <VerdadeSection />
      <QuemSomosSection />
      <ParaQuemSection />
      <DiagnosticoSection />
      <EstruturamosSection />
      <CtaFinalSection />
      <Footer />
    </main>
  );
};

export default Index;
