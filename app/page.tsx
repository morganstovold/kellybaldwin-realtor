import Footer from "@/components/Footer";
import Hero from "../components/Hero";
import MeetKelly from "../components/MeetKelly";
import FeaturedListings from "../components/FeaturedListings";
import Testimonials from "../components/Testimonials";
import WorkWithKelly from "../components/WorkWithKelly";
import VirtualTourFixer from "../components/VirtualTourFixer";

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <MeetKelly />
      <FeaturedListings />
      <Testimonials />
      <WorkWithKelly />
      <Footer />
      
      {/* Development Tools - Only visible in development */}
      <VirtualTourFixer />
    </div>
  );
}
