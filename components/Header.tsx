"use client";

import { useEffect, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export const NavItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Properties",
    href: "/properties",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  useEffect(() => {
    const scrollThreshold = 10;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        const isScrolled = window.scrollY > scrollThreshold;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
        timeoutId = null;
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [scrolled]);

  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      <div className="flex h-20 mx-auto">
        <motion.div
          className={cn(
            "flex-1 flex items-center relative overflow-hidden px-10 transition-all duration-300 text-4xl gap-6 font-normal tracking-wider z-10 uppercase text-white",
            scrolled ? "bg-black" : "bg-transparent"
          )}
        >
          <span className="font-light">KB</span>
          <Separator
            orientation="vertical"
            className="!h-2/3 mt-2 opacity-50"
          />
          <span className="font-normal">Kelly Baldwin</span>
        </motion.div>
        <motion.div
          className={cn(
            "flex-1 flex items-center justify-center gap-6 relative overflow-hidden px-10 transition-all duration-300",
            scrolled ? "bg-white" : "bg-transparent"
          )}
        >
          <div className="flex w-full justify-between gap-6 relative z-10">
            {/* Menu Button */}
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-black`}
            >
              <Menu size={20} />
              <span>Menu</span>
            </button>

            {/* Contact Kelly Button */}
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 text-black`}
            >
              Contact Kelly
            </button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
