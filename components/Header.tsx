"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
// import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/BALDWIN LOGO MARKS white_Kelly alone.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About Kelly" },
    { href: "/awards", label: "Awards & Recognition" },
    { href: "/buyer-information", label: "Buyer Information" },
    { href: "/seller-information", label: "Seller Information" },
    { href: "/contact", label: "Contact" },
  ];

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
            "flex-1 h-full flex items-center relative overflow-hidden px-4 transition-all duration-300 text-lg sm:text-2xl md:text-4xl gap-2 sm:gap-4 md:gap-6 font-normal tracking-wider z-10 uppercase text-white",
            scrolled ? "bg-black" : "bg-black lg:bg-transparent"
          )}
        >
          {/* <span className="font-light hidden sm:inline">KB</span>
          <Separator
            orientation="vertical"
            className="!h-2/3 opacity-50 hidden sm:block"
          />
          <span className="font-normal">Kelly Baldwin</span> */}
          <Image src={Logo} alt="Kelly Baldwin Logo" width={300} height={200} />
        </motion.div>
        <motion.div
          className={cn(
            "flex-1 h-full flex items-center justify-center gap-2 sm:gap-4 md:gap-6 relative overflow-hidden px-4 transition-all duration-300",
            scrolled ? "bg-white" : "bg-white lg:bg-transparent"
          )}
        >
          <div className="flex w-full justify-between gap-2 sm:gap-4 md:gap-6 relative z-10">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-lg">
                  <Menu className="size-4 sm:size-5 md:size-6" />
                  <span className="hidden sm:inline ml-1 sm:ml-2">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-2xl font-light tracking-wider">
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <div className="space-y-6 px-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-normal text-gray-800 hover:text-black transition-colors py-2 border-b border-gray-100 last:border-b-0"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/contact"
            >
              Contact Kelly
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
