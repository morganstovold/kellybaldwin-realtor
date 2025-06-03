"use client";

import { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import Header from "./Header";

export default function HeaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      console.log("scroll");
      const element = event.currentTarget as HTMLDivElement;
      console.log(element.scrollTop);
      const isScrolled = element.scrollTop > 10;
      setScrolled(isScrolled);
    };

    // Find the viewport element within the ScrollArea
    const viewport = scrollAreaRef.current?.querySelector('[data-slot="scroll-area-viewport"]') as HTMLDivElement;
    
    if (viewport) {
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <ScrollArea
      className="h-screen"
      ref={scrollAreaRef}
    >
      <Header scrolled={scrolled} />
      {children}
    </ScrollArea>
  );
}
