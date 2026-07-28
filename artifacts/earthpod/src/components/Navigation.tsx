import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Concept", href: "#concept" },
  { name: "Design", href: "#design" },
  { name: "Experience", href: "#photography" },
  { name: "Site", href: "#site" },
  { name: "Precedents", href: "#precedents" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
          isScrolled || mobileOpen
            ? "bg-background/95 backdrop-blur-md py-4 border-b border-border/50 shadow-sm"
            : "bg-transparent py-6 md:py-8"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between">
          <a
            href="#top"
            onClick={handleLinkClick}
            className={cn(
              "font-serif text-lg md:text-xl tracking-wider transition-colors duration-300 leading-tight",
              isScrolled || mobileOpen ? "text-foreground" : "text-white"
            )}
          >
            Ubuntu Reflections<span className="text-xs align-super">™</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs tracking-widest uppercase transition-colors duration-300",
                  isScrolled
                    ? "text-foreground/60 hover:text-foreground"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className={cn(
              "md:hidden p-2 transition-colors duration-300",
              isScrolled || mobileOpen ? "text-foreground" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-24 px-8 pb-12"
          >
            <nav className="flex flex-col gap-1 flex-1">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.35 }}
                  className="font-serif text-4xl text-foreground/80 hover:text-foreground py-3 border-b border-border/40 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto space-y-1"
            >
              <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Get in touch</p>
              <a href="mailto:info@ubuntu-reflections.co.za" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                info@ubuntu-reflections.co.za
              </a>
              <a href="tel:+27727268775" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                +27 72 726 8775
              </a>
              <a href="https://www.instagram.com/ubuntubunkers" target="_blank" rel="noopener noreferrer" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                @ubuntubunkers
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
