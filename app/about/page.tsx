import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutExpertise from "@/components/AboutExpertise";

export default function About() {
  return (
    <div className="h-full">
      <AboutHero />
      <AboutStory />
      <AboutExpertise />
      <Footer />
    </div>
  );
} 