import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Concept", href: "#concept" },
  { name: "Design", href: "#design" },
  { name: "Experience", href: "#photography" },
  { name: "Site", href: "#site" },
  { name: "Precedents", href: "#precedents" },
  { name: "Gallery", href: "#gallery" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md py-4 border-b border-border/50 shadow-sm" 
          : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#top" 
          className={cn(
            "font-serif text-2xl tracking-wider transition-colors duration-300",
            isScrolled ? "text-foreground" : "text-white"
          )}
        >
          EarthPod<span className="text-sm align-super">™</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm tracking-wide uppercase transition-colors duration-300 hover:opacity-100",
                isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle (Simplified for static) */}
        <button className="md:hidden flex flex-col space-y-1.5 p-2">
          <span className={cn("block w-6 h-[1px] transition-colors", isScrolled ? "bg-foreground" : "bg-white")} />
          <span className={cn("block w-6 h-[1px] transition-colors", isScrolled ? "bg-foreground" : "bg-white")} />
        </button>
      </div>
    </motion.nav>
  );
}
