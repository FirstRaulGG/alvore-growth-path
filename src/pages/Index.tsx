import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemaSection from "@/components/ProblemaSection";
import ComoAtuamosSection from "@/components/ComoAtuamosSection";
import ParaQuemSection from "@/components/ParaQuemSection";
import CtaFinalSection from "@/components/CtaFinalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <ProblemaSection />
      <ComoAtuamosSection />
      <ParaQuemSection />
      <CtaFinalSection />
      <Footer />
    </main>
  );
};

export default Index;
