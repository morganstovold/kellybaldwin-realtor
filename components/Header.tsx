"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="flex h-16 md:h-20 mx-auto">
        <motion.div
          className={cn(
            "flex-1 h-full flex items-center relative overflow-hidden px-4 md:px-10 transition-all duration-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl gap-2 sm:gap-4 md:gap-6 font-normal tracking-wider z-10 uppercase text-white",
            scrolled ? "bg-black" : "bg-transparent"
          )}
        >
          <span className="font-light">KB</span>
          <Separator
            orientation="vertical"
            className="!h-2/3 opacity-50 hidden sm:block"
          />
          <span className="font-normal hidden sm:inline">Kelly Baldwin</span>
        </motion.div>
        <motion.div
          className={cn(
            "flex-1 h-full flex items-center justify-center gap-2 sm:gap-4 md:gap-6 relative overflow-hidden px-4 md:px-10 transition-all duration-300",
            scrolled ? "bg-white" : "bg-transparent"
          )}
        >
          <div className="flex w-full justify-between gap-2 sm:gap-4 md:gap-6 relative z-10">
            <Button variant="ghost" className="text-sm sm:text-base p-2 sm:p-3">
              <Menu className="size-4 sm:size-5 md:size-6" />
              <span className="hidden sm:inline ml-1 sm:ml-2">Menu</span>
            </Button>

            <Button variant="ghost" className="text-sm sm:text-base p-2 sm:p-3">
              <span className="hidden sm:inline">Contact Kelly</span>
              <span className="sm:hidden">Contact</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
