import Footer from "@/components/Footer";
import PropertiesHero from "@/components/PropertiesHero";
import PropertyGrid from "@/components/PropertyGrid";

export default function Properties() {
  return (
    <div className="h-full">
      <PropertiesHero />
      <PropertyGrid />
      <Footer />
    </div>
  );
}
