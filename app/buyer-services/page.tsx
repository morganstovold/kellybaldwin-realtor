import Footer from "@/components/Footer";
import BuyerHero from "@/components/BuyerHero";
import BuyerProcess from "@/components/BuyerProcess";
import BuyerBenefits from "@/components/BuyerBenefits";
import BuyerResources from "@/components/BuyerResources";
import BuyerTestimonials from "@/components/BuyerTestimonials";
import BuyerContact from "@/components/BuyerContact";

export default function BuyerServices() {
  return (
    <div className="h-full">
      <BuyerHero />
      <BuyerProcess />
      <BuyerBenefits />
      <BuyerResources />
      <BuyerTestimonials />
      <BuyerContact />
      <Footer />
    </div>
  );
} 