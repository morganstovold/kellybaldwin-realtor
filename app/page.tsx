import Footer from "@/components/Footer";
import Hero from "../components/Hero";
import MeetKelly from "../components/MeetKelly";
import FeaturedListings from "../components/FeaturedListings";
import Testimonials from "../components/Testimonials";
import WorkWithKelly from "../components/WorkWithKelly";

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <FeaturedListings />
      <MeetKelly />
      <Testimonials />
      <WorkWithKelly />
      <Footer />
    </div>
  );
}
