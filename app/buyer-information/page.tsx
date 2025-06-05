import Footer from "@/components/Footer";
import BuyerHero from "@/components/BuyerHero";
import BuyerProcess from "@/components/BuyerProcess";
import BuyerContact from "@/components/BuyerContact";

export default function BuyerServices() {
  return (
    <div className="h-full overflow-x-hidden">
      <BuyerHero />
      <BuyerProcess />
      <BuyerContact />
      <Footer />
    </div>
  );
} 