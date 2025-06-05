import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutExpertise from "@/components/AboutExpertise";
import Awards from "@/components/Awards";

export default function About() {
  return (
    <div className="h-full flex flex-col">
      <AboutHero />
      <AboutStory />
      <Awards variant="about" />
      <AboutExpertise />
      <Footer />
    </div>
  );
} 