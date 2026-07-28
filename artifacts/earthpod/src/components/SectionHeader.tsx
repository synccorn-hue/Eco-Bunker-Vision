import { motion } from "framer-motion";

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export function SectionHeader({ title, subtitle, dark = false }: SectionHeaderProps) {
  return (
    <div className="mb-16 md:mb-24">
      <div className="flex-1">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className={`font-serif text-4xl md:text-5xl lg:text-6xl mb-4 ${dark ? 'text-white' : 'text-foreground'}`}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-lg md:text-xl max-w-2xl font-light ${dark ? 'text-white/70' : 'text-muted-foreground'}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
