import Footer from "@/components/Footer";
import Awards from "@/components/Awards";
import AwardsHero from "@/app/awards/agent-of-the-year-2025/_components/AwardsHero";

export const metadata = {
  title: "Awards & Recognition | Kelly Baldwin - Benicia Realtor",
  description: "View Kelly Baldwin's awards and recognition from RateMyAgent, including Top 20 Agent in the Nation and Agent of the Year 2025.",
};

export default function AwardsPage() {
  return (
    <div className="h-full">
      <AwardsHero />
      <Awards showHeader={false} />
      <Footer />
    </div>
  );
} 