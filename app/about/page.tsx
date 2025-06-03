import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutExpertise from "@/components/AboutExpertise";
import AboutCredentials from "@/components/AboutCredentials";
import AboutValues from "@/components/AboutValues";
import AboutContact from "@/components/AboutContact";

export default function About() {
  return (
    <div className="h-full">
      <AboutHero />
      <AboutStory />
      <AboutExpertise />
      <AboutCredentials />
      <AboutValues />
      <AboutContact />
      <Footer />
    </div>
  );
} 