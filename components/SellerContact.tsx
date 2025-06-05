import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function SellerContact() {
  return (
    <section className="pb-12 lg:pb-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              READY TO SELL YOUR HOME?
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let&apos;s start your home selling journey today. I&apos;m here to
              guide you through every step and help you get the best possible
              price.
            </p>
          </div>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/contact"
          >
            Contact Kelly
          </Link>
        </div>
      </div>
    </section>
  );
}
