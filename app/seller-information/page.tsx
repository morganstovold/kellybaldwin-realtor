import Footer from "@/components/Footer";
import SellerHero from "@/components/SellerHero";
import SellerProcess from "@/components/SellerProcess";
import SellerContact from "@/components/SellerContact";

export default function SellerServices() {
  return (
    <div className="h-full overflow-x-hidden">
      <SellerHero />
      <SellerProcess />
      <SellerContact />
      <Footer />
    </div>
  );
} 