import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "../components/Hero";
import MeetKelly from "../components/MeetKelly";
import FeaturedListings from "../components/FeaturedListings";
import Testimonials from "../components/Testimonials";
import WorkWithKelly from "../components/WorkWithKelly";

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <Hero />
      <MeetKelly />
      <FeaturedListings />
      <Testimonials />
      <WorkWithKelly />
      <Footer />
    </div>
  );
}
