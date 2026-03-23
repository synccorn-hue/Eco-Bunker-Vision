import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export function SectionHeader({ number, title, subtitle, dark = false }: SectionHeaderProps) {
  return (
    <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`font-serif text-6xl md:text-8xl opacity-20 leading-none ${dark ? 'text-white' : 'text-earth-deep'}`}
      >
        {number}
      </motion.div>
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
