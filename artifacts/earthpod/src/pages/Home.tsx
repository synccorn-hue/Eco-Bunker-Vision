import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { Eye, Sun, Wind, Camera, Bed, Utensils, Map, Leaf } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-background min-h-screen selection:bg-earth-olive selection:text-white overflow-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section id="top" ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-earth-deep">
        <motion.div 
          style={{ y, opacity }} 
          className="absolute inset-0 w-full h-full"
        >
          {/* Using generated hero image with an overlay for text readability */}
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-landscape.png`} 
            alt="African savanna landscape" 
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 tracking-tight"
          >
            Disappear to<br/>see more.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="font-sans font-light tracking-wide uppercase text-white/80 text-sm md:text-base max-w-2xl mx-auto"
          >
            A climate-responsive wildlife observation pod integrated into the African bushveld.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-32 md:py-48 px-6 bg-background relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-serif text-3xl md:text-5xl leading-snug md:leading-tight text-foreground"
          >
            EarthPod™ is not just built on the landscape, <span className="italic text-earth-olive">it becomes the landscape.</span> A masterclass in ecological respect designed for absolute stillness.
          </motion.p>
        </div>
      </section>

      {/* CONCEPT & VISION */}
      <section id="concept" className="py-24 md:py-32 px-6 bg-card relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            number="01" 
            title="Concept & Vision" 
            subtitle="Architecture that yields to nature."
          />
          
          <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                The philosophy behind EarthPod™ is rooted in absolute minimal disturbance. Traditional lodges elevate guests above the landscape, separating them from the environment. We chose the opposite approach.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By sinking the structure into the earth and extending the natural topography over its roof, the pod effectively disappears. This camouflage allows wildlife to approach without fear, offering an unparalleled, intimate connection with the wild.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/5] bg-gradient-to-br from-earth-stone to-earth-olive/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-noise opacity-20 mix-blend-multiply" />
              <div className="absolute inset-10 border border-white/20 flex items-center justify-center p-8 text-center">
                 <p className="font-serif text-2xl text-earth-deep/50 italic">"Stillness is the ultimate luxury."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DESIGN & ARCHITECTURE */}
      <section id="design" className="py-24 md:py-40 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            number="02" 
            title="Spatial Layout" 
            subtitle="Programmatic separation for undisturbed observation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Eye className="w-8 h-8 mb-6 text-earth-olive" strokeWidth={1} />,
                title: "The Viewing Bunker",
                desc: "A sunken, curved observation deck facing the waterhole. Acoustic baffling and darkened interiors keep observers invisible and silent."
              },
              {
                icon: <Utensils className="w-8 h-8 mb-6 text-earth-olive" strokeWidth={1} />,
                title: "Social Core",
                desc: "The central lounge and kitchen act as the transition space, kept functionally separate from the quiet observation zones."
              },
              {
                icon: <Bed className="w-8 h-8 mb-6 text-earth-olive" strokeWidth={1} />,
                title: "Resting Pods",
                desc: "Compact, intensely private sleeping quarters situated on the flanks, prioritizing rest with minimal energy footprint."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-card p-10 group hover:shadow-xl transition-all duration-500 border border-transparent hover:border-earth-sand/30"
              >
                {item.icon}
                <h3 className="text-xl font-serif mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Abstract Layout Diagram */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20 border border-border p-8 md:p-16 relative bg-noise"
          >
            <div className="absolute top-4 left-4 text-xs font-mono text-muted-foreground">FIG 1. PLAN VIEW</div>
            <div className="w-full aspect-[21/9] flex items-stretch justify-center gap-2 md:gap-4 p-4 md:p-12">
              <div className="w-1/4 bg-earth-stone/20 border border-earth-stone/40 flex items-center justify-center text-xs tracking-widest text-muted-foreground rotate-180" style={{ writingMode: 'vertical-rl' }}>SLEEP</div>
              <div className="w-1/2 flex flex-col gap-2 md:gap-4">
                <div className="flex-1 bg-earth-sand/20 border border-earth-sand/40 flex items-center justify-center text-xs tracking-widest text-muted-foreground">SOCIAL / KITCHEN</div>
                <div className="h-1/3 bg-earth-olive/20 border border-earth-olive/40 flex items-center justify-center text-xs tracking-widest text-earth-olive font-medium">BUNKER (QUIET)</div>
              </div>
              <div className="w-1/4 bg-earth-stone/20 border border-earth-stone/40 flex items-center justify-center text-xs tracking-widest text-muted-foreground rotate-180" style={{ writingMode: 'vertical-rl' }}>SLEEP</div>
            </div>
            <div className="mt-8 text-center text-sm font-light text-muted-foreground flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-border"></span>
              WATERHOLE PROXIMITY
              <span className="w-12 h-[1px] bg-border"></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHOTOGRAPHY EXPERIENCE */}
      <section id="photography" className="py-24 md:py-32 px-6 bg-earth-deep text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            number="03" 
            title="The Lens" 
            subtitle="Engineered for the perfect shot."
            dark
          />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-serif text-3xl md:text-4xl text-earth-sand">Eye-Level Immersion</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                By sinking the bunker, photographers are positioned exactly at ground level. This transforms the perspective from looking down on animals to looking them directly in the eye, creating immensely powerful, empathetic imagery.
              </p>
              
              <ul className="space-y-4 mt-8 pt-8 border-t border-white/10">
                {[
                  { icon: <Camera size={20} />, text: "Unobtrusive slit windows" },
                  { icon: <Sun size={20} />, text: "South-facing for soft, even lighting" },
                  { icon: <Wind size={20} />, text: "Draft-free design prevents scent carrying" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/80 font-light">
                    <span className="text-earth-sand">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2A1E15] to-[#1A120C] p-8 md:p-12 border border-white/5 flex flex-col justify-center"
            >
              <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-white/90 italic mb-8">
                "The golden hour light spills across the waterhole, hitting the east panels perfectly. The elephants don't even know we are here."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-earth-sand"></div>
                <span className="text-xs tracking-widest uppercase text-earth-sand">Wildlife Photographer</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SITE & ENVIRONMENT & SUSTAINABILITY */}
      <section id="site" className="py-24 md:py-40 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <SectionHeader 
                  number="04" 
                  title="The Site" 
                  subtitle="Klaserie region, South Africa."
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="hidden lg:block w-full h-[400px] mt-12 bg-earth-stone/10 border border-border relative overflow-hidden"
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}images/texture-stone.png`} 
                    alt="Architectural texture" 
                    className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <Map className="w-12 h-12 text-earth-stone/50" strokeWidth={1} />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-16 space-y-24">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-3xl mb-6 text-foreground">The Lowveld Biome</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Situated in the heart of the bushveld, the site experiences hot climates (35–42°C) and seasonal rainfall. The architecture must respond not just visually, but thermally. 
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Surrounded by grassy savanna, mopane trees, and riverine forests, the area is rich with megafauna—elephants, leopards, and diverse antelope species frequent the adjacent water sources.
                </p>
              </motion.div>

              <div id="sustainability">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Leaf className="w-6 h-6 text-earth-olive" />
                    <h3 className="font-serif text-3xl text-foreground">Ecological Integration</h3>
                  </div>
                  <div className="space-y-8">
                    <div className="border-l-2 border-earth-olive pl-6">
                      <h4 className="font-sans font-medium text-foreground tracking-wide mb-2 uppercase text-sm">Living Roofs</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        The entire structure is blanketed with a thick layer of local soil seeded with indigenous fynbos and grasses. This provides massive thermal mass, drastically reducing cooling needs while restoring the habitat footprint.
                      </p>
                    </div>
                    <div className="border-l-2 border-earth-sand pl-6">
                      <h4 className="font-sans font-medium text-foreground tracking-wide mb-2 uppercase text-sm">Rammed Earth & Stone</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Constructed using materials excavated directly from the site. The walls breathe, regulate humidity, and possess the exact chromatic signature of the surrounding earth.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            number="05" 
            title="Visuals" 
            subtitle="Renders and atmospheric perspectives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-16">
            {[
              { label: "Exterior Integration", color: "from-earth-olive/80 to-earth-deep" },
              { label: "Central Lounge", color: "from-earth-sand to-earth-stone" },
              { label: "Viewing Bunker", color: "from-earth-deep to-black" },
              { label: "Living Roof Details", color: "from-earth-olive/60 to-earth-stone" },
              { label: "Waterhole at Dusk", color: "from-[#8B5A2B] to-earth-deep" },
              { label: "Elephant Approach", color: "from-earth-stone to-earth-stone/50" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative aspect-[4/3] overflow-hidden group cursor-pointer`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-700 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
                  <span className="text-white font-serif text-xl tracking-wide px-6 text-center">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-earth-deep text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">EarthPod<span className="text-lg align-super">™</span></h2>
          <p className="text-white/60 font-light mb-12 max-w-md">Architecture that yields to nature. Designed for stillness, observation, and ecological respect.</p>
          
          <div className="w-full h-[1px] bg-white/10 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between w-full text-xs tracking-widest uppercase text-white/40">
            <span>© 2026 EarthPod Eco Bunker</span>
            <span className="mt-4 md:mt-0">Klaserie, South Africa</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
