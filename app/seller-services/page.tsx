import Footer from "@/components/Footer";
import SellerHero from "@/components/SellerHero";
import SellerProcess from "@/components/SellerProcess";
import SellerMarketing from "@/components/SellerMarketing";
import SellerPricing from "@/components/SellerPricing";
import SellerTestimonials from "@/components/SellerTestimonials";
import SellerContact from "@/components/SellerContact";

export default function SellerServices() {
  return (
    <div className="h-full">
      <SellerHero />
      <SellerProcess />
      <SellerMarketing />
      <SellerPricing />
      <SellerTestimonials />
      <SellerContact />
      <Footer />
    </div>
  );
} 